// Renders the portfolio content module into the prose briefings the two LLM
// surfaces need: the /ask chat guide (api/chat.ts) and the MCP `ask_daniel`
// tool (api/mcp.ts). Every sentence here comes from ../content/portfolio.mjs —
// nothing is written by hand, so neither prompt can go stale.
//
// The `.mjs` specifier is load bearing: the module is plain ESM with no `.js`
// twin, and the bundler does not substitute extensions. Types come from the
// sibling declaration file through a type-only import, which is erased.
import { OVERVIEW, CASE_STUDIES, NOTES } from "../content/portfolio.mjs";
import type { CaseStudy, Note } from "../content/portfolio";

/** The first sentence of an outcome — what shipped, without the full account. */
export function outcomeLine(study: CaseStudy): string {
  if (!study.outcome) return "";
  const firstSentence = study.outcome.match(/^.*?[.!?](?=\s|$)/);
  return firstSentence ? firstSentence[0] : study.outcome;
}

/** Bio paragraph shared by both prompts. */
export function aboutDaniel(): string {
  const links = Object.entries(OVERVIEW.links)
    .map(([name, url]) => `${name}: ${url}`)
    .join(", ");
  return [
    `${OVERVIEW.name} is a ${OVERVIEW.title.toLowerCase()} with ${OVERVIEW.experience} of experience, based in ${OVERVIEW.location}.`,
    `Currently: ${OVERVIEW.current}.`,
    `Previously: ${OVERVIEW.previous.join(", ")}.`,
    `Works with: ${OVERVIEW.skills.join(", ")}.`,
    "",
    `His philosophy: "${OVERVIEW.philosophy}"`,
    "",
    OVERVIEW.available ? "He is open to new opportunities and collaborations." : "He is not currently taking on new work.",
    `Contact: ${OVERVIEW.contact}`,
    `Links: ${links}`,
  ].join("\n");
}

function caseStudySection(study: CaseStudy): string {
  const lines = [
    `## ${study.title} (/${study.slug}) — ${study.year}, ${study.company}`,
    `${study.subtitle}. Role: ${study.role}. Tags: ${study.tags.join(", ")}.`,
  ];
  if (study.demo) lines.push(`${study.demoLabel ?? "Demo"}: ${study.demo}`);
  lines.push("", study.summary, "", `The problem: ${study.problem}`, `Process: ${study.process}`);
  if (study.outcome) lines.push(`Outcome: ${study.outcome}`);
  if (study.mvp) lines.push(`MVP: ${study.mvp}`);
  if (study.principles) lines.push(`Principles: ${study.principles.join("; ")}.`);
  if (study.highlights) lines.push(`Highlights: ${study.highlights.join("; ")}.`);
  lines.push("", `Tech: ${study.tech.join(", ")}.`, `Best for: ${study.bestFor.join(", ")}.`);
  return lines.join("\n");
}

function noteSection(note: Note): string {
  return [`## ${note.title} (${note.url}) — ${note.date}`, note.description, "", note.content].join("\n");
}

/** The full briefing: every case study and note, outcomes included. */
export function fullBriefing(): string {
  return [
    "ABOUT DANIEL:",
    aboutDaniel(),
    "",
    "---",
    "",
    "HIS WORK:",
    "",
    CASE_STUDIES.map(caseStudySection).join("\n\n---\n\n"),
    "",
    "---",
    "",
    "HIS WRITING (/notes):",
    "",
    NOTES.map(noteSection).join("\n\n---\n\n"),
  ].join("\n");
}

/** One line per case study and note — for the short-answer `ask_daniel` tool. */
export function compactBriefing(): string {
  const studies = CASE_STUDIES.map((study: CaseStudy) => {
    const outcome = outcomeLine(study);
    return `- ${study.title} (${study.year}, ${study.company}, ${study.url}) — ${study.summary}${
      outcome ? ` Outcome: ${outcome}` : ""
    } Tech: ${study.tech.join(", ")}.`;
  }).join("\n");
  const notes = NOTES.map((note: Note) => `- "${note.title}" (${note.date}, ${note.url}) — ${note.description}`).join("\n");
  return [aboutDaniel(), "", "CASE STUDIES:", studies, "", "WRITING:", notes].join("\n");
}
