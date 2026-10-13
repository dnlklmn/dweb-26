// Regenerates the static text mirrors that agents fetch instead of rendering:
// public/llms.txt, public/llms-full.txt and public/sitemap.xml.
//
// These land in public/ (not dist/) on purpose: they get committed, so a
// content change shows up in review as the prose an agent will actually read.
//
// Output is a pure function of content/portfolio.mjs — no timestamps, no
// generated-on lines, no <lastmod>. Re-running on unchanged content produces a
// zero-line diff, which is what makes the committed copies trustworthy.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { SITE, OVERVIEW, CASE_STUDIES, NOTES, ROUTES } from "../content/portfolio.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

/** Human labels for OVERVIEW.links keys, which are terse lowercase ids. */
const LINK_LABELS = {
  linkedin: "LinkedIn",
  github: "GitHub",
  bluesky: "Bluesky",
  ask: "Ask the AI guide",
  mcp: "MCP server",
};

const linkLabel = (key) => LINK_LABELS[key] ?? key;

/** Joins a list the way prose does, so llms.txt reads rather than tabulates. */
const list = (items) => items.join(", ");

const rule = "\n---\n";

// The AI-interface docs are the one block that is not derived from
// portfolio.mjs: it documents the two endpoints this repo serves. Kept here
// verbatim from the hand-written llms.txt it replaces.
const AI_INTERFACES = `## AI Interfaces

This portfolio exposes two AI interfaces for agents and LLMs:

### Conversational chat API
Endpoint: ${SITE.url}/api/chat
Method: POST
Content-Type: application/json
Body: { "messages": [{ "role": "user", "content": "..." }] }
Returns: { "reply": "..." }

An AI guide (powered by Claude) that understands who you are and recommends relevant case studies. Maintains conversation context across up to 6 exchanges.

### MCP Server
URL: ${OVERVIEW.links.mcp}
Protocol: Model Context Protocol (MCP), StreamableHTTP transport

Tools available:
- get_overview — Daniel's bio, philosophy, availability
- list_case_studies — all case studies with summaries
- get_case_study(slug) — full detail for a specific case study
- list_blog_posts — published blog posts
- get_blog_post(slug) — full post content
- ask_daniel(question) — conversational query answered by Claude

To use in Claude Desktop, add to your config:
{
  "mcpServers": {
    "daniel-kalman": {
      "type": "http",
      "url": "${OVERVIEW.links.mcp}"
    }
  }
}
`;

/** The blockquote bio, assembled from OVERVIEW so it can never drift from it. */
function bioBlockquote() {
  return [
    `> ${OVERVIEW.name} — ${OVERVIEW.title}, ${OVERVIEW.experience} of experience, based in ${OVERVIEW.location}.`,
    `Currently: ${OVERVIEW.current}.`,
    `Previously: ${list(OVERVIEW.previous)}.`,
  ].join(" ");
}

function llmsTxt() {
  const out = [];

  out.push(`# ${OVERVIEW.name} — Portfolio`);
  out.push("");
  out.push(bioBlockquote());
  out.push("");
  out.push(`Philosophy: "${OVERVIEW.philosophy}"`);
  out.push("");
  out.push(`Skills: ${list(OVERVIEW.skills)}.`);
  if (OVERVIEW.available) {
    out.push("");
    out.push("Open to new opportunities and collaborations.");
  }
  out.push("");
  out.push(
    `Everything in one fetch — every case study and every post, in full: ${SITE.url}/llms-full.txt`,
  );
  out.push("");
  out.push("Links:");
  for (const [key, url] of Object.entries(OVERVIEW.links)) {
    out.push(`- ${linkLabel(key)}: ${url}`);
  }

  out.push(rule);
  out.push("## Case Studies");

  for (const cs of CASE_STUDIES) {
    out.push("");
    out.push(`### ${cs.title} (${cs.url}) — ${cs.year}`);
    out.push(`${cs.subtitle}. ${cs.company} · ${cs.role}.`);
    if (cs.demo) out.push(`${cs.demoLabel ?? "Demo"}: ${cs.demo}`);
    out.push("");
    out.push(cs.summary);
    out.push("");
    out.push(`The problem: ${cs.problem}`);
    out.push("");
    out.push(`Process: ${cs.process}`);
    if (cs.outcome) {
      out.push("");
      out.push(`Outcome: ${cs.outcome}`);
    }
    if (cs.mvp) {
      out.push("");
      out.push(`MVP: ${cs.mvp}`);
    }
    if (cs.principles) {
      out.push("");
      out.push("Principles:");
      for (const p of cs.principles) out.push(`- ${p}`);
    }
    if (cs.highlights) {
      out.push("");
      out.push("Highlights:");
      for (const h of cs.highlights) out.push(`- ${h}`);
    }
    out.push("");
    out.push(`Tech: ${list(cs.tech)}.`);
    out.push(`Best for: ${list(cs.bestFor)}.`);
    out.push(rule);
  }

  out.push(`## Writing (${SITE.url}/notes)`);
  for (const note of NOTES) {
    out.push("");
    out.push(`### ${note.title} (${note.url}) — ${note.date}`);
    out.push(note.description);
  }

  out.push(rule);
  out.push(AI_INTERFACES);

  return `${out.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}\n`;
}

function llmsFullTxt() {
  const out = [];

  out.push(`# ${OVERVIEW.name} — Portfolio, in full`);
  out.push("");
  out.push(
    `Every case study and every post, complete, in one fetch. The short index is at ${SITE.url}/llms.txt`,
  );

  out.push(rule);
  out.push("## About");
  out.push("");
  out.push(`Name: ${OVERVIEW.name}`);
  out.push(`Title: ${OVERVIEW.title}`);
  out.push(`Experience: ${OVERVIEW.experience}`);
  out.push(`Location: ${OVERVIEW.location}`);
  out.push(`Currently: ${OVERVIEW.current}`);
  out.push(`Previously: ${list(OVERVIEW.previous)}`);
  out.push(`Skills: ${list(OVERVIEW.skills)}`);
  out.push(`Available for work: ${OVERVIEW.available ? "yes" : "no"}`);
  out.push(`Contact: ${OVERVIEW.contact}`);
  out.push("");
  out.push(`Philosophy: "${OVERVIEW.philosophy}"`);
  out.push("");
  out.push("Links:");
  for (const [key, url] of Object.entries(OVERVIEW.links)) {
    out.push(`- ${linkLabel(key)}: ${url}`);
  }

  out.push(rule);
  out.push("## Case Studies");

  for (const cs of CASE_STUDIES) {
    out.push("");
    out.push(`### ${cs.title} — ${cs.subtitle}`);
    out.push("");
    out.push(`Slug: ${cs.slug}`);
    out.push(`Year: ${cs.year}`);
    out.push(`Company: ${cs.company}`);
    out.push(`Role: ${cs.role}`);
    out.push(`Tags: ${list(cs.tags)}`);
    out.push(`URL: ${cs.url}`);
    if (cs.demo) out.push(`${cs.demoLabel ?? "Demo"}: ${cs.demo}`);
    out.push("");
    out.push("Summary");
    out.push(cs.summary);
    out.push("");
    out.push("Problem");
    out.push(cs.problem);
    out.push("");
    out.push("Process");
    out.push(cs.process);
    if (cs.outcome) {
      out.push("");
      out.push("Outcome");
      out.push(cs.outcome);
    }
    if (cs.mvp) {
      out.push("");
      out.push("MVP");
      out.push(cs.mvp);
    }
    if (cs.principles) {
      out.push("");
      out.push("Principles");
      for (const p of cs.principles) out.push(`- ${p}`);
    }
    if (cs.highlights) {
      out.push("");
      out.push("Highlights");
      for (const h of cs.highlights) out.push(`- ${h}`);
    }
    out.push("");
    out.push(`Tech: ${list(cs.tech)}`);
    out.push(`Best for: ${list(cs.bestFor)}`);
    out.push(rule);
  }

  out.push("## Writing");

  for (const note of NOTES) {
    out.push("");
    out.push(`### ${note.title}`);
    out.push("");
    out.push(`Slug: ${note.slug}`);
    out.push(`Date: ${note.date}`);
    out.push(`URL: ${note.url}`);
    out.push("");
    out.push(note.description);
    out.push("");
    out.push(note.content);
    out.push(rule);
  }

  out.push(AI_INTERFACES);

  return `${out.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}\n`;
}

function sitemapXml() {
  const urls = ROUTES.map((route) => {
    // SITE.url carries no trailing slash, so "/" needs no special case beyond
    // not doubling the separator.
    const loc = route.path === "/" ? `${SITE.url}/` : `${SITE.url}${route.path}`;
    return ["  <url>", `    <loc>${loc}</loc>`, `    <priority>${route.priority}</priority>`, "  </url>"].join(
      "\n",
    );
  });

  // No <lastmod>: it would churn the committed diff on every build without
  // telling a crawler anything the content itself does not.
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

function write(name, contents) {
  const target = join(publicDir, name);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, contents, "utf8");
  console.log(`generate-content: wrote public/${name} (${contents.length} bytes)`);
}

write("llms.txt", llmsTxt());
write("llms-full.txt", llmsFullTxt());
write("sitemap.xml", sitemapXml());
console.log(
  `generate-content: ${CASE_STUDIES.length} case studies, ${NOTES.length} notes, ${ROUTES.length} routes`,
);
