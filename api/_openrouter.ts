export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface OpenRouterResult {
  text: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
}

export class OpenRouterError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "OpenRouterError";
    this.status = status;
  }
}

const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

/** Overridable per deployment; defaults to the model the site used before. */
export const OPENROUTER_MODEL =
  process.env.OPENROUTER_MODEL || "anthropic/claude-haiku-4.5";

export async function openRouterChat({
  system,
  messages,
  maxTokens,
  model = OPENROUTER_MODEL,
}: {
  system: string;
  messages: ChatMessage[];
  maxTokens: number;
  model?: string;
}): Promise<OpenRouterResult> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new OpenRouterError("OPENROUTER_API_KEY is not configured", 500);
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      // Optional OpenRouter attribution headers.
      "HTTP-Referer": "https://danielkalman.design",
      "X-Title": "Daniel Kalman Portfolio",
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      messages: [{ role: "system", content: system }, ...messages],
    }),
    signal: AbortSignal.timeout(30_000),
  });

  const body = await res.json().catch(() => null);

  if (!res.ok || body?.error) {
    const message =
      body?.error?.message || body?.error || res.statusText || "Unknown error";
    throw new OpenRouterError(String(message), res.status);
  }

  const text = body?.choices?.[0]?.message?.content;
  if (typeof text !== "string" || !text.trim()) {
    throw new OpenRouterError("No text content in OpenRouter response", 502);
  }

  return {
    text,
    model: body.model || model,
    promptTokens: body.usage?.prompt_tokens ?? 0,
    completionTokens: body.usage?.completion_tokens ?? 0,
  };
}
