import { Langfuse } from "langfuse";
import { openRouterChat, OpenRouterError, OPENROUTER_MODEL } from "./_openrouter.js";
import { fullBriefing } from "./_briefing.js";

// Everything above CONVERSATION RULES is generated from ../content/portfolio.mjs,
// so the guide can never drift from the case studies it recommends. The rules
// below are hand-tuned behaviour, not content — edit them here.
const SYSTEM_PROMPT = `You are an interactive guide for Daniel Kalman's portfolio.

Your job: understand who the visitor is and what they're looking for, then recommend the most relevant case studies or writing from his portfolio.

---

${fullBriefing()}

---

CONVERSATION RULES:
- Ask at most ONE follow-up question before recommending.
- After 1-2 exchanges, give 1-3 specific recommendations with a one-sentence reason each.
- Use markdown links: [Good Listener](/good-listener)
- Keep every response to 2-4 sentences max. Be warm but direct.
- You can answer specific questions about his case studies, process, and philosophy using the content above.
- Never make up information about Daniel.
- Near the end of the conversation (your last or second-to-last message), naturally offer to connect the visitor with Daniel directly. Ask for their email address in the chat — something like: "If you'd like to get in touch, just reply with your email and I'll send Daniel a summary of our conversation."`;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { messages, sessionId, turnNumber } = req.body;

  if (!Array.isArray(messages) || messages.length > 12) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const langfuse = new Langfuse({
    secretKey: process.env.LANGFUSE_SECRET_KEY,
    publicKey: process.env.LANGFUSE_PUBLIC_KEY,
  });

  const trace = langfuse.trace({ name: "portfolio-chat", sessionId });

  try {
    const generation = trace.generation({
      name: "openrouter-reply",
      model: OPENROUTER_MODEL,
      input: messages,
    });

    const result = await openRouterChat({
      system: SYSTEM_PROMPT,
      messages,
      maxTokens: 500,
    });

    generation.end({
      output: result.text,
      usage: {
        promptTokens: result.promptTokens,
        completionTokens: result.completionTokens,
      },
    });

    const contactOfferMade = /email|get in touch|reach out|i'll send daniel|send daniel/i.test(result.text);
    trace.update({
      metadata: {
        turnNumber,
        totalMessages: messages.length + 1,
        contactOfferMade,
        model: result.model,
        ...(contactOfferMade ? { turnAtOffer: turnNumber } : {}),
      },
    });

    await langfuse.flushAsync();
    return res.json({ reply: result.text });
  } catch (error) {
    const status = error instanceof OpenRouterError ? error.status : 500;
    const detail = error instanceof Error ? error.message : String(error);
    trace.update({ metadata: { error: detail, status } });
    await langfuse.flushAsync();
    console.error("OpenRouter error:", status, detail);
    return res
      .status(status >= 400 && status < 600 ? status : 502)
      .json({ error: "Failed to get response", detail });
  }
}
