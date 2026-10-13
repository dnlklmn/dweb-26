import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { openRouterChat } from "./_openrouter.js";
import { compactBriefing, outcomeLine } from "./_briefing.js";
import { OVERVIEW, CASE_STUDIES, NOTES, caseStudyBySlug, noteBySlug } from "../content/portfolio.mjs";
import type { CaseStudy, Note } from "../content/portfolio";
import { z } from "zod";

const CASE_STUDY_SLUGS = CASE_STUDIES.map((study: CaseStudy) => study.slug);
const NOTE_SLUGS = NOTES.map((note: Note) => note.slug);

const ASK_SYSTEM_PROMPT = `You are an assistant that answers questions about Daniel Kalman's portfolio, work, and thinking. Answer concisely and accurately using only the information provided. If you don't know something, say so and suggest visiting ${OVERVIEW.contact} for a fuller conversation.

${compactBriefing()}`;

/** Full case study payload, with the outcome sitting right under the summary. */
function caseStudyPayload(study: CaseStudy) {
  return {
    slug: study.slug,
    title: study.title,
    subtitle: study.subtitle,
    year: study.year,
    company: study.company,
    role: study.role,
    tags: study.tags,
    url: study.url,
    ...(study.demo ? { demo: study.demo, demoLabel: study.demoLabel } : {}),
    summary: study.summary,
    ...(study.outcome ? { outcome: study.outcome } : {}),
    problem: study.problem,
    process: study.process,
    ...(study.mvp ? { mvp: study.mvp } : {}),
    ...(study.principles ? { principles: study.principles } : {}),
    ...(study.highlights ? { highlights: study.highlights } : {}),
    tech: study.tech,
    bestFor: study.bestFor,
  };
}

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
    "List all case studies with summaries, outcomes and URLs",
    {},
    async () => ({
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(
            CASE_STUDIES.map((study: CaseStudy) => ({
              slug: study.slug,
              title: study.title,
              subtitle: study.subtitle,
              year: study.year,
              company: study.company,
              url: study.url,
              summary: study.summary,
              ...(study.outcome ? { outcome: outcomeLine(study) } : {}),
              bestFor: study.bestFor,
              tech: study.tech,
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
    "Get full details for a specific case study, including what shipped and what changed because of it",
    { slug: z.string().describe(`Case study slug. One of: ${CASE_STUDY_SLUGS.join(", ")}`) },
    async ({ slug }) => {
      const study = caseStudyBySlug[slug];
      if (!study) {
        return {
          content: [
            {
              type: "text" as const,
              text: `Case study '${slug}' not found. Available slugs: ${CASE_STUDY_SLUGS.join(", ")}`,
            },
          ],
        };
      }
      return { content: [{ type: "text" as const, text: JSON.stringify(caseStudyPayload(study), null, 2) }] };
    }
  );

  server.tool("list_blog_posts", "List published blog posts with descriptions and URLs", {}, async () => ({
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(
          NOTES.map((note: Note) => ({
            slug: note.slug,
            title: note.title,
            date: note.date,
            url: note.url,
            description: note.description,
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
    { slug: z.string().describe(`Blog post slug. One of: ${NOTE_SLUGS.join(", ")}`) },
    async ({ slug }) => {
      const post = noteBySlug[slug];
      if (!post) {
        return {
          content: [
            {
              type: "text" as const,
              text: `Post '${slug}' not found. Available slugs: ${NOTE_SLUGS.join(", ")}`,
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
      try {
        const result = await openRouterChat({
          system: ASK_SYSTEM_PROMPT,
          messages: [{ role: "user", content: question }],
          maxTokens: 400,
        });
        return { content: [{ type: "text" as const, text: result.text }] };
      } catch (error) {
        const detail = error instanceof Error ? error.message : String(error);
        console.error("OpenRouter error:", detail);
        return {
          content: [{ type: "text" as const, text: `Could not answer right now: ${detail}` }],
        };
      }
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
