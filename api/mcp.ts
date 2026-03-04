import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";

const OVERVIEW = {
  name: "Daniel Kalman",
  title: "Design Engineer",
  experience: "10+ years",
  location: "Amsterdam",
  current: "Entropy (blockchain workflow automation platform, since June 2025)",
  previous: ["Radicle", "Parity Technologies", "Linkurious", "DotLoop", "Prezi", "SatoshiPay"],
  philosophy:
    "Designer who codes. Strong design foundations matter more than ever when working with AI. I build prototypes to validate ideas fast and design systems to keep things from falling apart.",
  skills: ["Figma", "React", "Svelte", "TypeScript", "design systems", "user research", "prototyping"],
  available: true,
  contact: "https://dnlklmn.online/ask",
};

const CASE_STUDIES: Record<string, object> = {
  "good-listener": {
    slug: "good-listener",
    title: "Good Listener",
    subtitle: "Local transcriptions for therapists",
    year: 2026,
    tags: ["UX", "UI", "Front End"],
    url: "https://dnlklmn.online/good-listener",
    summary:
      "Local AI transcription app for therapists. Privacy-first — runs entirely locally using Whisper models, no cloud uploads.",
    problem:
      "Psychology practices are buried in admin. The transcribe-anonymise-summarise-write-report pipeline repeats at every session, eating the time therapists most need for patients.",
    process:
      "1-hour user interview with a practicing psychologist in Amsterdam. Built a pain points framework with Claude categorising friction across cognitive, administrative, and relational dimensions. Documentation emerged as the most consistently painful category. Built multiple prototypes: DSM-5 MCP client (Ollama + local models), n8n/Scriberr transcription workflow, CLI bundling local Whisper models. Integrated Langfuse for tracing and eval-driven improvement.",
    mvp: "Record, transcribe, and diarize — runs entirely locally, easy to install. Designed in Figma, wrapped in Tauri for native macOS.",
    tech: ["Figma", "Tauri", "Svelte", "Whisper", "n8n", "MCP servers", "Langfuse", "Claude API"],
    bestFor: [
      "AI product teams",
      "health/privacy-sensitive tools",
      "eval-driven development",
      "full-stack design engineering roles",
    ],
    role: "Research, Ideation, Design, Prototype, Front End",
  },
  auto: {
    slug: "auto",
    title: "Auto",
    subtitle: "Collaborative workflow builder for blockchain automations",
    year: 2025,
    tags: ["UX", "UI", "Front End"],
    url: "https://dnlklmn.online/auto",
    demo: "https://auto-workflow-builder.netlify.app/",
    summary:
      "Visual workflow builder with real-time multiplayer (Figma-like). Bridges on-chain triggers and off-chain actions. Built at Entropy Cryptography.",
    problem:
      "Could Entropy build a better workflow builder altogether, or would being crypto-native be the only differentiator? Use cases vary widely and workflow builders already exist.",
    process:
      "Parallel research tracks: optimal workflow map structure + ideal crypto workflow use cases. Built multiple prototypes exploring directed vs. freeform flows, atomic vs. use-case nodes, whether conditions are connectors or nodes. Forked n8n to experiment with a real workflow builder. Designed the interface with a limited node set to reduce cognitive load. Implemented real-time multiplayer using Yjs CRDTs and WebRTC.",
    tech: ["Figma", "Svelte", "Yjs", "WebRTC"],
    bestFor: ["Web3/blockchain companies", "complex data-heavy apps", "collaborative/multiplayer SaaS"],
    role: "Ideation, Design, Prototype, User research, Front End",
  },
  "radicle-desktop": {
    slug: "radicle-desktop",
    title: "Radicle Desktop",
    subtitle: "Your Code on Your Machine",
    year: 2024,
    tags: ["UX", "UI", "Front End"],
    url: "https://dnlklmn.online/radicle-desktop",
    summary:
      "Desktop app for Radicle, a decentralized peer-to-peer code collaboration platform. Manage issues, patches, code review, and notifications. Write and review offline, sync when back online.",
    problem:
      "Radicle's peer-to-peer, local-first model doesn't map neatly onto mental models from GitHub. Every design decision had to bridge that gap honestly without hiding what makes Radicle different.",
    process:
      "Per-feature loop: understand user need + protocol behaviour → hypothesis → wireframes → prototype → high-fidelity handoff. Validated with users and engineering team. Key challenge: patches in Radicle have revisions and each peer may be at a different revision — making this visible without overwhelming users.",
    principles: [
      "App mirrors the underlying protocol and CLI tools closely — no mental model switching",
      "Everything in Radicle is immutable and signed — UI reflects that",
      "Local-first: relies on seed nodes for peer discovery",
    ],
    tech: ["Figma", "Svelte"],
    bestFor: ["Developer tools", "open source products", "rigorous user research", "local-first/offline-first apps"],
    role: "Design, Prototype, User research",
  },
  "radicle-design-system": {
    slug: "radicle-design-system",
    title: "Radicle Design System",
    subtitle: "Consistency By Design",
    year: 2024,
    tags: ["Design System", "UI", "Front End"],
    url: "https://dnlklmn.online/radicle-design-system",
    summary:
      "Complete design system for the Radicle ecosystem. Design tokens, component library, Figma integration, CSS variables, icon system — connecting design tooling directly to code.",
    problem:
      "Radicle Explorer is open-source and anyone can deploy it. Design consistency is particularly challenging in distributed open source projects with diverse contributors.",
    process:
      "UI audit → color system + typographic scale + components in Figma → stakeholder sign-off → token export pipeline (Tokens Studio + Style Dictionary) → Svelte implementation. Tokens stored in a shared Radicle repo as single source of truth.",
    highlights: [
      "Semantic tokens create a shared language between designers and developers",
      "Components in Figma match production behaviour exactly",
      "Dark and light mode support",
      "Style pays homage to 90s programming interfaces — developer tools with character",
    ],
    tech: ["Figma", "Tokens Studio", "Style Dictionary", "Svelte"],
    bestFor: [
      "Companies scaling a design system",
      "design-engineering collaboration",
      "platform teams",
      "open-source product work",
    ],
    role: "Design Audit, Design System, Design Tokens",
  },
};

const BLOG_POSTS: Record<string, object> = {
  "do-design": {
    slug: "do-design",
    title: "Why I design again",
    date: "2025 Dec 29",
    url: "https://dnlklmn.online/blog/do-design",
    description:
      "AI agents can have working software ready by lunch. What I've come to understand is that I was confusing activity with progress.",
    content: `Design is a decision-making framework. It reduces the solution space and turns vague ambition into a well-defined problem.

What I kept getting wrong: a well-built output can still be solving the wrong problem. In multi-agent workflows, a bad assumption in problem framing cascades through every layer. It looks like momentum — commits landing, PRs opening, demos running — while drifting far from the actual problem.

What I do differently now: frame the problem before decomposing work into agent-sized tasks. Write explicit acceptance criteria. Design the interfaces between agents rather than letting those boundaries emerge from output. Treat constraints as a first-class artifact.

"AI didn't make design obsolete. It made it the highest-leverage thing I can spend time on."`,
  },
  "design-systems-make-vibe-coding-real": {
    slug: "design-systems-make-vibe-coding-real",
    title: "A design system is documented decisions",
    date: "2026 Feb 18",
    url: "https://dnlklmn.online/blog/design-systems-make-vibe-coding-real",
    description:
      "A design system isn't only a component library. When I structure tokens, components, and rules, I'm solidifying the choices I've made deliberately.",
    content: `Each token is a decision. Each component is a bundle of decisions. Each rule is a constraint chosen deliberately.

Without documented decisions, each agent prompt reinvents spacing, color, and layout from scratch. The first screen looks fine. The second looks fine. Together they look like two different products. Worse: I couldn't trace back to what I'd implicitly committed to.

When agents work within a design system, they're not making all sorts of decisions — the decisions are already documented. I'm always moving forward. I can track decisions and measure their impact.

Decisions compound. When documented, they compound in your favor. When implicit, they compound against you.

"I build the system first. Then I vibe as hard as I want."`,
  },
};

const ASK_SYSTEM_PROMPT = `You are an assistant that answers questions about Daniel Kalman's portfolio, work, and thinking. Answer concisely and accurately using only the information provided. If you don't know something, say so and suggest visiting https://dnlklmn.online/ask for a fuller conversation.

Daniel Kalman is a design engineer with 10+ years of experience. He bridges design and frontend engineering — designs in Figma, builds in React and Svelte, thinks in systems. Currently at Entropy. Previously: Radicle, Parity Technologies, Linkurious, DotLoop, Prezi, SatoshiPay. Open to new opportunities.

Case studies: Good Listener (2026, local AI transcription for therapists, Tauri/Svelte/Whisper/Claude), Auto (2025, blockchain workflow builder with multiplayer, Svelte/Yjs), Radicle Desktop (2024, P2P code collaboration desktop app, Svelte), Radicle Design System (2024, full design token pipeline, Tokens Studio/Style Dictionary/Svelte).

Writing: "Why I design again" — design as decision-making framework in the AI age. "A design system is documented decisions" — design tokens enabling coherent AI-assisted development.`;

function createMcpServer() {
  const server = new McpServer({
    name: "daniel-kalman-portfolio",
    version: "1.0.0",
  });

  server.tool("get_overview", "Get Daniel Kalman's bio, philosophy, skills, and availability", {}, async () => ({
    content: [{ type: "text" as const, text: JSON.stringify(OVERVIEW, null, 2) }],
  }));

  server.tool(
    "list_case_studies",
    "List all case studies with summaries and URLs",
    {},
    async () => ({
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(
            Object.values(CASE_STUDIES).map((cs: any) => ({
              slug: cs.slug,
              title: cs.title,
              subtitle: cs.subtitle,
              year: cs.year,
              url: cs.url,
              summary: cs.summary,
              bestFor: cs.bestFor,
              tech: cs.tech,
            })),
            null,
            2
          ),
        },
      ],
    })
  );

  server.tool(
    "get_case_study",
    "Get full details for a specific case study",
    { slug: z.string().describe("Case study slug: good-listener, auto, radicle-desktop, radicle-design-system") },
    async ({ slug }) => {
      const study = CASE_STUDIES[slug];
      if (!study) {
        return {
          content: [
            {
              type: "text" as const,
              text: `Case study '${slug}' not found. Available slugs: ${Object.keys(CASE_STUDIES).join(", ")}`,
            },
          ],
        };
      }
      return { content: [{ type: "text" as const, text: JSON.stringify(study, null, 2) }] };
    }
  );

  server.tool("list_blog_posts", "List published blog posts with descriptions and URLs", {}, async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          Object.values(BLOG_POSTS).map((p: any) => ({
            slug: p.slug,
            title: p.title,
            date: p.date,
            url: p.url,
            description: p.description,
          })),
          null,
          2
        ),
      },
    ],
  }));

  server.tool(
    "get_blog_post",
    "Get the full content of a blog post",
    { slug: z.string().describe("Blog post slug: do-design, design-systems-make-vibe-coding-real") },
    async ({ slug }) => {
      const post = BLOG_POSTS[slug];
      if (!post) {
        return {
          content: [
            {
              type: "text" as const,
              text: `Post '${slug}' not found. Available slugs: ${Object.keys(BLOG_POSTS).join(", ")}`,
            },
          ],
        };
      }
      return { content: [{ type: "text" as const, text: JSON.stringify(post, null, 2) }] };
    }
  );

  server.tool(
    "ask_daniel",
    "Ask a conversational question about Daniel's work, process, or thinking. Answered by Claude using portfolio content.",
    { question: z.string().describe("Your question about Daniel's work, skills, or thinking") },
    async ({ question }) => {
      const apiKey = process.env.ANTHROPIC_API_KEY;
      if (!apiKey) {
        return {
          content: [{ type: "text" as const, text: "ANTHROPIC_API_KEY not configured on this server." }],
        };
      }
      const anthropic = new Anthropic({ apiKey });
      const response = await anthropic.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 400,
        system: ASK_SYSTEM_PROMPT,
        messages: [{ role: "user", content: question }],
      });
      const content = response.content[0];
      if (content.type !== "text") throw new Error("Unexpected content type");
      return { content: [{ type: "text" as const, text: content.text }] };
    }
  );

  return server;
}

export default async function handler(req: any, res: any) {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
  });

  const server = createMcpServer();
  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
}
