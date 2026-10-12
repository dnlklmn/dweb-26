// Writes one real HTML file per route into dist/, after `vite build`.
//
// Why: this is a client-rendered SPA, so `curl https://danielkalman.design/beeline`
// used to return a generic title and an empty <div id="root">. Anything that
// fetches rather than renders — crawlers, link unfurlers, and the AI agents
// recruiters increasingly point at a portfolio — read nothing at all.
//
// Each file is the built shell with the route's title, description, social and
// JSON-LD metadata, plus the route's actual prose injected inside
// <div id="root">. React 19's createRoot().render() clears a non-empty
// container on mount, so a human never sees the injected copy and src/index.tsx
// needs no change (this is deliberately NOT hydration — the markup here is for
// readers that never run the bundle).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { SITE, OVERVIEW, CASE_STUDIES, NOTES, ROUTES } from "../content/portfolio.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const shellPath = join(distDir, "index.html");

const shell = readFileSync(shellPath, "utf8");

// Sanity check: if Vite ever stops emitting hashed asset tags into the shell,
// every prerendered page would ship without the app. Fail the build instead.
if (!/<script type="module"[^>]+src="\/assets\/[^"]+\.js"/.test(shell)) {
  throw new Error("prerender: no built module script found in dist/index.html");
}

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

/** Escapes for both text nodes and attribute values — the prose has &, quotes and em-dashes. */
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ESCAPES[char]);

/** JSON-LD lives inside <script>, so only "<" can break out of it. */
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data, null, 2).replace(/</g, "\\u003c")}</script>`;

const MONTHS = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

/** "2026 May 18" -> "2026-05-18". Parsed by hand so no timezone can shift it. */
function isoDate(date) {
  const [year, month, day] = date.split(" ");
  const num = MONTHS[month];
  if (!num || !year || !day) return undefined;
  return `${year}-${num}-${day.padStart(2, "0")}`;
}

const absolute = (path) => (path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`);

const AUTHOR = { "@type": "Person", name: OVERVIEW.name, url: SITE.url };

// sameAs means "other profiles of this person", so the on-site links (/ask,
// /api/mcp) are filtered out rather than passed off as profiles.
const sameAs = Object.values(OVERVIEW.links).filter((url) => !url.startsWith(SITE.url));

// --- markup helpers -------------------------------------------------------

const p = (text) => `<p>${esc(text)}</p>`;
const section = (heading, text) => (text ? `<h2>${esc(heading)}</h2>${p(text)}` : "");
const bullets = (heading, items) =>
  items && items.length
    ? `<h2>${esc(heading)}</h2><ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`
    : "";
const row = (term, value) => (value ? `<dt>${esc(term)}</dt><dd>${esc(value)}</dd>` : "");
const link = (href, text) => `<a href="${esc(href)}">${esc(text)}</a>`;

/** Blank-line-separated source prose becomes real paragraphs. */
const paragraphs = (text) =>
  text
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => p(block))
    .join("");

function caseStudyBody(cs) {
  return [
    "<article>",
    `<h1>${esc(cs.title)}</h1>`,
    `<p>${esc(cs.subtitle)}</p>`,
    "<dl>",
    row("Company", cs.company),
    row("Role", cs.role),
    row("Year", cs.year),
    row("Tags", cs.tags.join(", ")),
    row("Tech", cs.tech.join(", ")),
    "</dl>",
    cs.demo ? `<p>${link(cs.demo, cs.demoLabel ?? "Demo")}</p>` : "",
    section("Summary", cs.summary),
    section("Problem", cs.problem),
    section("Process", cs.process),
    section("Outcome", cs.outcome),
    section("MVP", cs.mvp),
    bullets("Principles", cs.principles),
    bullets("Highlights", cs.highlights),
    bullets("Best for", cs.bestFor),
    "</article>",
  ].join("");
}

function noteBody(note) {
  return [
    "<article>",
    `<h1>${esc(note.title)}</h1>`,
    `<p>${esc(note.date)}</p>`,
    p(note.description),
    paragraphs(note.content),
    "</article>",
  ].join("");
}

/** The landing page doubles as the index an agent lands on first. */
function overviewBody({ heading, intro }) {
  return [
    "<article>",
    `<h1>${esc(heading)}</h1>`,
    p(intro),
    "<dl>",
    row("Title", OVERVIEW.title),
    row("Experience", OVERVIEW.experience),
    row("Location", OVERVIEW.location),
    row("Currently", OVERVIEW.current),
    row("Previously", OVERVIEW.previous.join(", ")),
    row("Skills", OVERVIEW.skills.join(", ")),
    row("Available for work", OVERVIEW.available ? "Yes" : "No"),
    "</dl>",
    `<h2>Philosophy</h2>${p(OVERVIEW.philosophy)}`,
    "<h2>Case studies</h2><ul>",
    CASE_STUDIES.map(
      (cs) =>
        `<li>${link(cs.url, `${cs.title} — ${cs.subtitle}`)} (${esc(cs.year)}): ${esc(cs.summary)}</li>`,
    ).join(""),
    "</ul>",
    "<h2>Writing</h2><ul>",
    NOTES.map(
      (n) => `<li>${link(n.url, n.title)} (${esc(n.date)}): ${esc(n.description)}</li>`,
    ).join(""),
    "</ul>",
    "<h2>Links</h2><ul>",
    Object.entries(OVERVIEW.links)
      .map(([key, url]) => `<li>${link(url, `${key}: ${url}`)}</li>`)
      .join(""),
    "</ul>",
    "</article>",
  ].join("");
}

function notesIndexBody(route) {
  return [
    "<article>",
    "<h1>Notes</h1>",
    p(route.description),
    "<ul>",
    NOTES.map(
      (n) =>
        `<li>${link(n.url, n.title)} (${esc(n.date)}): ${esc(n.description)}</li>`,
    ).join(""),
    "</ul>",
    "</article>",
  ].join("");
}

function askBody(route) {
  return [
    "<article>",
    "<h1>Ask</h1>",
    p(route.description),
    "<ul>",
    `<li>${link(`${SITE.url}/api/chat`, "Chat API: POST /api/chat")}</li>`,
    `<li>${link(OVERVIEW.links.mcp, `MCP server: ${OVERVIEW.links.mcp}`)}</li>`,
    `<li>${link(`${SITE.url}/llms.txt`, "llms.txt — the short index")}</li>`,
    `<li>${link(`${SITE.url}/llms-full.txt`, "llms-full.txt — everything in one fetch")}</li>`,
    "</ul>",
    "</article>",
  ].join("");
}

// --- per-route assembly ---------------------------------------------------

function bodyFor(route) {
  if (route.caseStudy) return caseStudyBody(route.caseStudy);
  if (route.note) return noteBody(route.note);
  if (route.path === "/") {
    return overviewBody({ heading: OVERVIEW.name, intro: SITE.description });
  }
  if (route.path === "/about") {
    return overviewBody({ heading: `About ${OVERVIEW.name}`, intro: route.description });
  }
  if (route.path === "/notes") return notesIndexBody(route);
  if (route.path === "/ask") return askBody(route);
  return `<article><h1>${esc(route.title)}</h1>${p(route.description)}</article>`;
}

function structuredDataFor(route) {
  if (route.caseStudy) {
    const cs = route.caseStudy;
    return jsonLd({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${cs.title} — ${cs.subtitle}`,
      description: cs.summary,
      author: AUTHOR,
      url: cs.url,
      dateCreated: String(cs.year),
      keywords: cs.tags.join(", "),
    });
  }

  if (route.note) {
    const note = route.note;
    const published = isoDate(note.date);
    return jsonLd({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: note.title,
      description: note.description,
      author: AUTHOR,
      url: note.url,
      ...(published ? { datePublished: published } : {}),
    });
  }

  if (route.path === "/" || route.path === "/about") {
    return jsonLd({
      "@context": "https://schema.org",
      "@type": "Person",
      name: OVERVIEW.name,
      jobTitle: OVERVIEW.title,
      url: SITE.url,
      sameAs,
    });
  }

  return "";
}

function headFor(route) {
  const url = absolute(route.path);
  const type = route.note ? "article" : "website";
  return [
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:site_name" content="${esc(OVERVIEW.name)}" />`,
    `<meta property="og:title" content="${esc(route.title)}" />`,
    `<meta property="og:description" content="${esc(route.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(SITE.url)}/logo512.png" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${esc(route.title)}" />`,
    `<meta name="twitter:description" content="${esc(route.description)}" />`,
    `<meta name="twitter:image" content="${esc(SITE.url)}/logo512.png" />`,
    structuredDataFor(route),
  ]
    .filter(Boolean)
    .map((tag) => `    ${tag}`)
    .join("\n");
}

function pageFor(route) {
  let html = shell;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(route.description)}" />`,
  );
  // Matched with the leading newline so the injected block keeps the shell's
  // indentation instead of trailing the last built asset tag.
  html = html.replace(/\n([ \t]*)<\/head>/, `\n${headFor(route)}\n$1</head>`);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${bodyFor(route)}</div>`,
  );

  return html;
}

// --- vercel.json guard ----------------------------------------------------

// Prerendered files only reach a visitor if Vercel resolves the clean path to
// them. vercel.json carries one explicit rewrite per route for exactly that, so
// a route added to portfolio.mjs without a matching rewrite would silently fall
// back to the empty SPA shell. Catch it here, at build time.
function checkVercelRewrites() {
  const config = JSON.parse(readFileSync(join(root, "vercel.json"), "utf8"));
  const sources = new Set((config.rewrites ?? []).map((r) => r.source));
  const missing = ROUTES.filter((r) => r.path !== "/" && !sources.has(r.path)).map((r) => r.path);
  if (missing.length) {
    throw new Error(
      `prerender: vercel.json has no rewrite for ${missing.join(", ")} — ` +
        "those routes would serve the empty SPA shell. Add them before the catch-all.",
    );
  }
}

// --- run ------------------------------------------------------------------

checkVercelRewrites();

for (const route of ROUTES) {
  const target =
    route.path === "/" ? shellPath : join(distDir, route.path.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, pageFor(route), "utf8");
}

console.log(`prerender: wrote ${ROUTES.length} pages into dist/`);
