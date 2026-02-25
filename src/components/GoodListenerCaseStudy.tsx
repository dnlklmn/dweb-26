import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import appImage from "../assets/good-listener/app.png";
import radicleDesignSystemHeaderImage from "../assets/radicle-design-system/header.jpeg";
import radicleDesktopHeaderImage from "../assets/radicle-desktop/header-2.png";
import blueprint from "../assets/good-listener/blueprint.png";
import problemSpace from "../assets/good-listener/problem-framework.png";
import solutionSpace from "../assets/good-listener/solution-framework.png";
import n8n from "../assets/good-listener/n8n.png";
import dsmMcp from "../assets/good-listener/dsm-mcp.png";
import dsmCover from "../assets/good-listener/dsm-cover.png";

const meta: CaseStudyMeta = {
  title: "Good Listener",
  subtitle: "Local transcriptions for therapists",
  tags: "UX, UI, Front End",
  year: "2026",
  demoLink: "",
  demoLabel: "GitHub →",
};

// Border rule: row owns border-l border-r border-b.
// Each child cell owns border-r except the last child.
// All cells with content get p-2.
const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const GoodListenerCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img) => (
      <>
        {/* Spacer — border-t closes the header */}
        <div className={`${row} border-t h-12`} />

        {/* Intro — 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div
            className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}
          >
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              A quiet, private companion that frees up therapists' time — so
              they can focus on their patients instead of paperwork.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Client work</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">
                Research, Ideation, Design, Prototype, Front End
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">Figma, Tauri, Svelte, Whisper</span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Hero image */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            <div className="bg-[#181818] h-[366px] overflow-hidden">
              {img(appImage, "Good Listener desktop app")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Challenge + Process — 2col empty | 2col text */}
        <div className={row}>
          <div className={`${cell} w-1/2 p-2`} />
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-col gap-4 p-2 pb-12">
              <h3 className="text-sm font-bold">Challenge and Goals</h3>
              <p className="text-sm leading-relaxed">
                Psychology practices are buried in admin. Contracts, reminders,
                session notes, official forms — the manual labor that gets in
                the way of meaningful work is relentless.
              </p>
              <p className="text-sm leading-relaxed">
                The goal was to find the highest-leverage entry point for AI in
                a traditional, privacy-sensitive practice — and build something
                a therapist could actually trust and use.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-2 pb-12 border-t border-[var(--color-border)]">
              <h3 className="text-sm font-bold">
                Process and Responsibilities
              </h3>
              <p className="text-sm leading-relaxed">
                I started with a 1-hour interview with Sarah, a practicing
                psychologist. We mapped her full workflow — scheduling,
                sessions, documentation, billing — and identified where friction
                was highest.
              </p>
              <p className="text-sm leading-relaxed">
                From the process map I built a pain points framework with
                Claude, categorising friction across cognitive, administrative,
                and relational dimensions. Documentation emerged as the most
                consistently painful category across every stage of the
                practice.
              </p>
              <p className="text-sm leading-relaxed">
                I then built a series of demos to pressure-test different
                opportunities: a DSM-5 assistant with an MCP client, an n8n
                transcription workflow using Scriberr, and a CLI proof of
                concept bundling local models. The app was designed in Figma and
                wrapped in Tauri for a native macOS experience.
              </p>
            </div>
          </div>
        </div>

        {/* Section heading */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Research</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Research — text | wide placeholder */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              In an initial interview, Sarah, a psychotherapist in Amsterdam
              told us about her work processes. We drew a process blueprint and
              made an initial guess at bottlenecks. We then used Claude to
              generate a framework to help us think of the problem space.
            </p>
            <p className="text-sm leading-relaxed">
              The framework mapped friction across cognitive load,
              administrative tasks, and people management. The cognitive row,
              which entails transcription, anonymisation, and report writing was
              the most consistently painful across every stage so we decided
              we're going to tackle that first.
            </p>
          </div>
          <div className="w-1/2 p-2 h-64 flex items-center justify-center">
            {img(
              blueprint,
              "The process of a therapy praxis working with a client",
            )}
          </div>
          <div className="w-1/4 border-l border-[var(--color-border)] p-2 flex flex-1 items-center justify-center">
            {img(problemSpace, "Problem space framework table")}
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className="w-1/4 flex flex-col gap-4 p-2 pb-12">
            <h3 className="text-sm font-bold">Key Insight</h3>
            <p className="text-sm leading-relaxed">
              The "transcribe-anonymise-summarise-write report" pipeline repeats
              at every session touchpoint. It's repetitive, rule-governed, and
              eats the time Sarah most needs for her patients.
            </p>
            <p className="text-sm leading-relaxed">
              This made documentation assistance the clear opportunity: high
              frequency, high pain, and well-suited to AI. As long as we can
              manage privacy.
            </p>
          </div>
          <div className="border-l border-[var(--color-border)] w-1/4 p-2" />
          <div className="border-l border-[var(--color-border)] w-1/4 p-2" />
        </div>

        <div className={`${row} h-12`} />

        <div className={row}>
          <div className={`${cell} w-1/4 p-2 `} />
          <div className="w-1/4 flex p-2 h-64 items-center justify-center">
            {img(solutionSpace, "Problem space framework table")}
          </div>
          <div className="w-1/4 flex flex-col border-l border-[var(--color-border)] gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed">
              After putting down an initial set of ideas I asked Claude to build
              a framework around my thoughts so I can verify I thought of all
              the angles.
            </p>
            <p className="text-sm leading-relaxed">
              Five components covering the full documentation pipeline, from
              audio capture to structured clinical report, rated by how much
              effort it is me to build, and how much effort it requires from the
              users to use.
            </p>
          </div>
          <div className="border-l border-[var(--color-border)] w-1/4 p-2" />
        </div>

        {/* Section heading */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Early Experiments</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Experiments — text | 3 placeholders */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              The n8n transcription workflow listens to a specific folder for
              new files. Once a new audio file is added it starts the
              transcription using the locally running Scriberr app and saves a
              new text file to the same folder when the transcription finishes.
            </p>
            <p className="text-sm leading-relaxed">
              This is great because it's running locally, it's extensible, (and
              it's all open source), but it is quite cumbersome to operate.
            </p>
          </div>
          <div className="w-1/2 flex flex-1 p-2 items-center justify-center">
            {img(n8n, "An n8n workflow using scriberr")}
          </div>
          <div className="w-1/4 p-2 border-l border-[var(--color-boder)]" />
        </div>

        <div className={`${row} h-12`} />

        {/* Experiments — text | 3 placeholders */}
        <div className={`${row} h-96`}>
          <div className="w-1/4 flex flex-1 p-2 items-center justify-center">
            {img(dsmCover, "An n8n workflow using scriberr")}
          </div>
          <div className="w-1/4 flex flex-1 p-2 border-l border-[var(--color-border)] items-center justify-center">
            {img(dsmMcp, "An n8n workflow using scriberr")}
          </div>
          <div className="w-1/4 flex flex-col gap-4 p-2  border-l border-[var(--color-border)] shrink-0">
            <p className="text-sm leading-relaxed">
              The DSM assistant uses Ollama with local models to interact with
              the DSM-5 MCP server, which wraps the DSM-5 book (the standard
              reference for diagnosing mental health conditions using consistent
              criteria in the US and the Netherlands) and provides tools LLMs
              can call.
            </p>
            <p className="text-sm leading-relaxed">
              With this Sarah, our therapist, can now check her therapy session
              transcriptions against the DSM-5 book and get an initial
              classification, or get the identifiers of psychological illnesses
              she needs for filing the reports.
            </p>
          </div>
          <div className="w-1/4 p-2 border-l border-[var(--color-boder)]" />
        </div>

        {/* Section heading */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">The App</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* App description — 2col empty | 2col text */}
        <div className={row}>
          <div className={`${cell} w-1/2 p-2`} />
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <h3 className="text-sm font-bold">Design and Build</h3>
            <p className="text-sm leading-relaxed">
              Designed for the therapist's office: easy to install, runs
              entirely on the local machine, no data leaves the device. Pencil
              sketches established the core flows before moving into Figma, then
              Tauri wrapped the Svelte frontend into a native macOS app.
            </p>
            <p className="text-sm leading-relaxed">
              The interface is deliberately minimal — record, review, export.
              The cognitive load of the documentation pipeline is absorbed by
              the app, not the therapist.
            </p>
          </div>
        </div>

        {/* App image */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="bg-[#181818] h-full overflow-hidden">
              {img(appImage, "Good Listener desktop app interface")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer + Other work */}
        <div className={`${row} h-12`} />
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Other work</h2>
        </div>

        <div className="cs-other-section">
          <div className={row}>
            <Link to="/radicle-design-system" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link
              to="/radicle-desktop"
              className="cs-other-nav__cell cs-other-nav__cell--next"
            >
              <span className="cs-other-nav__label">Next →</span>
            </Link>
          </div>

          <div className={row}>
            <Link
              to="/radicle-design-system"
              className="cs-other-card cs-other-card--prev"
            >
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">
                    Radicle Design System
                  </span>
                  <span className="text-sm">Consistency by design</span>
                </div>
                <div className="cs-other-card__image">
                  <img
                    src={radicleDesignSystemHeaderImage}
                    alt="Radicle Design System preview"
                  />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold">
                    Design System, UI, Front End
                  </span>
                  <span className="text-sm text-[#5e5e5e]">2024</span>
                </div>
              </div>
            </Link>
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-cards__spacer" />
            <Link
              to="/radicle-desktop"
              className="cs-other-card cs-other-card--next"
            >
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">Radicle Desktop</span>
                  <span className="text-sm">Your code on your machine</span>
                </div>
                <div className="cs-other-card__image">
                  <img
                    src={radicleDesktopHeaderImage}
                    alt="Radicle Desktop preview"
                  />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold">UX, UI, Front End</span>
                  <span className="text-sm text-[#5e5e5e]">2024</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className={`${row} h-12`} />
      </>
    )}
  </CaseStudyLayout>
);

export default GoodListenerCaseStudy;
