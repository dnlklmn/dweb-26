import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import header from "../assets/good-listener/app.png";
import radicleDesignSystemHeaderImage from "../assets/radicle-design-system/header.jpeg";
import radicleDesktopHeaderImage from "../assets/radicle-desktop/header-2.png";
import blueprint from "../assets/good-listener/blueprint.png";
import problemSpace from "../assets/good-listener/problem-framework.png";
import solutionSpace from "../assets/good-listener/solution-framework.png";
import n8n from "../assets/good-listener/n8n.png";
import dsmMcp from "../assets/good-listener/dsm-mcp.png";
import dsmCover from "../assets/good-listener/dsm-cover.png";
import listenerCLI from "../assets/good-listener/cli.png";
import pencil from "../assets/good-listener/pencil.png";
import appArchitecture from "../assets/good-listener/app-architecture.png";
import appScreens from "../assets/good-listener/app-screens.png";
import Pipeline from "../assets/good-listener/Pipeline";
import badOutput from "../assets/good-listener/bad-output.png";
import tracing from "../assets/good-listener/tracing.png";
import experiment from "../assets/good-listener/experiment.png";
import evals from "../assets/good-listener/evals.png";
import install from "../assets/good-listener/install.jpeg";

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
    {(img, openLightbox, openLightboxNode) => (
      <>
        <div className="px-2">
          <div className="h-px bg-(--color-border) post-anim-width" />
        </div>
        {/* Spacer — border-t closes the header */}
        <div className={`${row} border-t h-12`} />

        {/* Intro — 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div
            className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}
          >
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              A quiet, private companion that frees up therapists' time so they
              can focus on what really matters, their patients.
            </p>
          </div>
          <div className="self-stretch py-2">
            <div className="w-px h-full bg-(--color-border) post-anim" />
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
              {img(header, "Good Listener desktop app")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Challenge + Process — 2col empty | 2col text */}
        <div className={row}>
          <div className={`${cell} w-1/2 p-2`} />
          <div className="self-stretch pt-2 pb-12">
            <div className="w-px h-full bg-(--color-border) post-anim" />
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-col gap-4 p-2 pb-12">
              <h3 className="text-sm font-bold">Challenge and Goals</h3>
              <p className="text-sm leading-relaxed w-3/4">
                Psychology practices are buried in admin. Contracts, reminders,
                session notes, official forms — the manual labor that gets in
                the way of meaningful work is relentless.
              </p>
              <p className="text-sm leading-relaxed w-3/4">
                The goal was to find the highest-leverage entry point for AI in
                a traditional, privacy-sensitive practice — and build something
                a therapist could actually trust and use.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-2 pb-12 border-t border-[var(--color-border)]">
              <h3 className="text-sm font-bold">
                Process and Responsibilities
              </h3>
              <p className="text-sm leading-relaxed w-3/4">
                I started with a 1-hour interview with Sarah, a practicing
                psychologist. We mapped her full workflow — scheduling,
                sessions, documentation, billing — and identified where friction
                was highest.
              </p>
              <p className="text-sm leading-relaxed w-3/4">
                From the process map I built a pain points framework with
                Claude, categorising friction across cognitive, administrative,
                and relational dimensions. Documentation emerged as the most
                consistently painful category across every stage of the
                practice.
              </p>
              <p className="text-sm leading-relaxed w-3/4">
                I then built a series of demos to pressure-test different
                opportunities: a DSM-5 assistant with an MCP client, an n8n
                transcription workflow using Scriberr, and a CLI proof of
                concept bundling local models. The app was designed in Figma and
                wrapped in Tauri for a native macOS experience.
              </p>
            </div>
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Research</h2>
        </div>
        <div className="w-full px-2">
          <div className="h-px bg-(--color-border) post-anim-width" />
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
          <div className="self-stretch pt-2 pb-12">
            <div className="w-px h-full bg-(--color-border) post-anim" />
          </div>
          <div className="w-1/4 flex flex-col gap-4 p-2 pb-12">
            <h3 className="text-sm font-bold">Key Insight</h3>
            <p className="text-sm leading-relaxed">
              The "transcribe-anonymise-summarise-write report" pipeline repeats
              at every session touchpoint. It's repetitive, rule-governed, and
              eats the time Sarah most needs for her patients.
            </p>
            <p className="text-sm leading-relaxed">
              This made documentation assistance the clear opportunity: happens
              often, hurts a lot, and well-suited to AI.
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

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Early Experiments
          </h2>
        </div>
        <div className="w-full px-2">
          <div className="h-px bg-(--color-border) post-anim-width" />
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
            {img(
              dsmCover,
              "DSM-5: Diagnostic and Statistical Manual of Mental Disorders",
            )}
          </div>
          <div className="w-1/4 flex flex-1 p-2 border-l border-[var(--color-border)] items-center justify-center">
            {img(dsmMcp, "MCP server wrapper around DSM-5")}
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

        <div className={`${row} h-12`} />

        {/* Experiments — text | 3 placeholders */}
        <div className={`${row} h-96`}>
          <div className="w-1/4 flex flex-1 p-2 items-center justify-center"></div>
          <div className="self-stretch py-2">
            <div className="w-px h-full bg-(--color-border) post-anim" />
          </div>
          <div className="w-1/4 flex flex-col gap-4 p-2  border-l border-[var(--color-border)] shrink-0">
            <p className="text-sm leading-relaxed">
              A CLI tool was the quickest way to experiment. I started with
              small models (WhisperX, Pyannote) in the hopes of being able to
              package it all up in a nice little bundle. The results were flaky
              though, and even flakier as we started testing it in Dutch.
            </p>
            <p className="text-sm leading-relaxed">
              I realized I'll have to use LLMs so I added Ollama integration and
              started tracing my app on Langfuse to finally understand the
              what's happening under the hood.
            </p>
          </div>
          <div className="w-1/2 flex p-2 border-l border-[var(--color-border)] items-center justify-center">
            {img(
              listenerCLI,
              "A CLI tool to record, transcribe, and diarize conversation",
            )}
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            MVP Requirements
          </h2>
        </div>
        <div className="w-full px-2">
          <div className="h-px bg-(--color-border) post-anim-width" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* App description — 2col empty | 2col text */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`}></div>
          <div className="w-1/4 flex flex-col gap-4 p-2 pb-12 border-r border-[var(--color-border)]">
            <p className="text-sm leading-relaxed">
              After showing the prototypes and painting a vision where this
              could all lead, we decided on the initial requirements for the
              MVP:
              <br />- record, transcribe, and diarize
              <br />- run entirely locally
              <br />- easy to install
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2`}>
            {img(install, "Initial designs created using pencil.dev")}
          </div>
          <div className={`${cell} w-1/4 p-2`}></div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">The App</h2>
        </div>
        <div className="w-full px-2">
          <div className="h-px bg-(--color-border) post-anim-width" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* App description — 2col empty | 2col text */}
        <div className={row}>
          <div className={`${cell} w-1/2 p-2`} />
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12 border-r border-[var(--color-border)]">
            <h3 className="text-sm font-bold w-3/4">Design</h3>
            <p className="text-sm leading-relaxed w-3/4 ">
              3 main areas: record, list of sessions, session details. Let's see
              what AI design tools think.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="bg-[#181818] h-full overflow-hidden">
              {img(pencil, "Initial designs created using pencil.dev")}
            </div>
          </div>
          <div className="w-1/2 p-2" />
        </div>
        <div className={row}>
          <div className={`${cell} w-1/2 p-2`} />
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12 border-r border-[var(--color-border)]">
            <p className="text-sm leading-relaxed w-3/4">
              But this isn't great. These 3 areas aren't meant to be equal.
            </p>
            <p className="text-sm leading-relaxed w-3/4 ">
              I'd prefer a home page with all of my sessions and either open an
              already transcribed session, or record a new one that will then be
              transcribed and become a session in my list.
            </p>
            <p className="text-sm leading-relaxed w-3/4 ">
              I have opened Figma after months of neglecting it.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className=" h-full overflow-hidden">
              {img(appArchitecture, "Initial designs created using pencil.dev")}
            </div>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className=" h-full overflow-hidden">
              {img(appScreens, "Initial designs created using pencil.dev")}
            </div>
          </div>
        </div>
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`}></div>
          <div
            className={`${cell} w-1/4 p-2 `}
            style={{ cursor: "zoom-in" }}
            onClick={() => openLightboxNode(<Pipeline />)}
          >
            <Pipeline />
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <h3 className="text-sm font-bold w-3/4">Build</h3>
            <p className="text-sm leading-relaxed w-3/4">
              As we're still in validation phase, I decided to wrap the CLI in a
              Tauri app, and bundle the transcription and diarization models
              with it so users can quickly install it without having to get
              access tokens from HuggingFace or waiting for initial model
              downloads to finish on first start.
            </p>
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Evaluation</h2>
        </div>
        <div className="w-full px-2">
          <div className="h-px bg-(--color-border) post-anim-width" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* App description — 2col empty | 2col text */}
        <div className={row}>
          <div className={`${cell} w-1/2 p-2`} />
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12 border-r border-[var(--color-border)]">
            <p className="text-sm leading-relaxed w-3/4 ">
              The results were still flaky. If we offer this product for
              practitioners even to try out we need to make sure it produces
              good results.
            </p>
            <p className="text-sm leading-relaxed w-3/4 ">
              Or at least we understand why it doesn't.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="bg-[#181818] h-full overflow-hidden">
              {img(badOutput, "Initial designs created using pencil.dev")}
            </div>
          </div>
          <div className="w-1/2 p-2" />
        </div>
        <div className={row}>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12 border-r border-[var(--color-border)]">
            <p className="text-sm leading-relaxed w-3/4">
              To understand what was happening I integrated Langfuse and started
              digging into the data.
            </p>
            <p className="text-sm leading-relaxed w-3/4 ">
              Tracing shows me what exact steps are happening under the hood.
            </p>
            <p className="text-sm leading-relaxed w-3/4 ">
              Generating an initial dataset gives me a sense of good outcomes I
              can evaluate against.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className=" h-full overflow-hidden">
              {img(tracing, "Initial designs created using pencil.dev")}
            </div>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className=" h-full overflow-hidden">
              {img(experiment, "Initial designs created using pencil.dev")}
            </div>
          </div>
          <div className="w-1/2 p-2 overflow-hidden">
            <div className=" h-full overflow-hidden">
              {img(evals, "Initial designs created using pencil.dev")}
            </div>
          </div>
        </div>

        <div className={`${row} h-12`} />

        {/* App image */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2  p-2 overflow-hidden`}>
            <p className="text-xl leading-relaxed w-3/4 ">
              Evals gives me a metric I can check against while I make
              improvements.
            </p>
            <p className="text-xl leading-relaxed w-3/4 ">
              Be it quality improvements or decreasing costs, I'll be able to
              tell whether I'm moving forward.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer + Other work */}
        <div className={`${row} h-12`} />

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Other work</h2>
        </div>
        <div className="w-full px-2">
          <div className="h-px bg-(--color-border) post-anim-width" />
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
