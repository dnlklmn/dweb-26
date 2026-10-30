import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import recording from "../assets/beeline/beeline-recording.mp4";
import recordingPoster from "../assets/beeline/beeline-recording-poster.webp";
import app from "../assets/beeline/beeline-app.png";
import glHeaderImage from "../assets/good-listener/header.jpeg";
import autoHeaderImage from "../assets/auto/header-2.jpeg";
import BuildLoop from "../assets/beeline/BuildLoop";
import ProductionLoop from "../assets/beeline/ProductionLoop";
import Anchor from "../assets/beeline/Anchor";
import { SeedSource, SeedChecks, SeedCoverage } from "../assets/beeline/SeedSteps";
import { nowrapItems } from "../utils/text";

const meta: CaseStudyMeta = {
  title: "Beeline",
  subtitle: "From intent to proof",
  tags: nowrapItems("Methodology, Product Design, Vibe coding"),
  year: "2026",
  demoLink: "https://beeline.biene.club",
  demoLabel: "Try it →",
  company: "Biene Club",
  role: nowrapItems("Methodology, Product Design, Vibe coding"),
  tech: "Claude API, FastAPI, React, Braintrust",
};

// Border rule: row owns border-l border-r border-b.
// Each child cell owns border-r except the last child.
// All cells with content get p-2.
const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const BeelineCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img, openLightbox, openLightboxNode) => (
      <>
        {/* Spacer — border-t closes the header */}
        <div className={`${row} border-t h-12`} />

        {/* Intro — 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div
            className={`${cell} w-1/2 min-h-48 flex flex-col justify-end gap-4 p-2`}
          >
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              Beeline builds the eval for your agentic feature before it ships.
            </p>
          </div>
          <div className="cs-intro-meta w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Biene Club</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">{meta.role}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">
                Claude API, FastAPI, React, Braintrust
              </span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Video — cells 2-3 */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            <button
              type="button"
              onClick={() =>
                openLightboxNode(
                  <video
                    src={recording}
                    poster={recordingPoster}
                    controls
                    autoPlay
                    muted
                    playsInline
                    aria-label="Screen recording: Beeline building a feature"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                      maxHeight: "86vh",
                    }}
                  />,
                )
              }
              aria-label="Play screen recording of Beeline building a feature"
              className="relative block w-full bg-[#181818] overflow-hidden cursor-zoom-in"
            >
              <img
                src={recordingPoster}
                alt=""
                className="block w-full h-auto"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg width="44" height="44" viewBox="0 0 48 48">
                  <circle
                    cx="24"
                    cy="24"
                    r="23"
                    fill="rgba(0,0,0,0.55)"
                    stroke="rgba(255,255,255,0.85)"
                  />
                  <path d="M19 15l14 9-14 9z" fill="#fff" />
                </svg>
              </span>
            </button>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Challenge — cells 2-3 */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <h3 className="text-sm font-bold">
              Agentic features are hard to evaluate
            </h3>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Evaluating agentic features means you compare their outputs to a
              definition of good. This might be easy if you have production data to
              rely on but it gets harder the earlier you start.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              My work as a product designer centers largely around understanding the
              problem and settling what a good solution looks like, before I even
              start thinking of possible solutions.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Measuring Success
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Thesis beat */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            <p className="text-xl leading-relaxed w-full md:w-3/4">
              To get closer to your goal you still need an anchor that tells you how
              far off you are.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* The mechanism — subtitle + text | eval anatomy diagram */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <h3 className="text-sm font-bold">How Evals Work</h3>
            <p className="text-sm leading-relaxed">
              You make a dataset of good and bad outcomes, then feed inputs
              through the feature and see where they land.
            </p>
            <p className="text-sm leading-relaxed">
              The mechanism is simple. What’s hard is everything around it. How
              you get a good dataset in the first place, how you know you’ve
              tried enough to go to prod, and what to monitor once it’s live.
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2 flex items-center justify-center`}>
            <Anchor />
          </div>
          <div className="w-1/4 p-2" />
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">The Seed</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Seed — text | anatomy diagram | text */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              What does this team want the feature to achieve, and what should
              their users walk away with? Answering these questions is product
              work: asking, framing, arguing until the answer is specific.
            </p>
            <p className="text-sm leading-relaxed">
              Before AI, the answers went into a PRD, written with real care,
              opened maybe twice, then left to become an artifact some future
              hire would find and squint at.
            </p>
            <p className="text-sm leading-relaxed">
This is what drives Beeline: I use the prompt you define your feature
              with to guess the use cases it should work for — and those it
              shouldn’t — and come up with a set of criteria I call the seed.
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2 flex flex-col gap-4`}>
            <div className="flex-1 flex items-center justify-center">
              <SeedSource />
            </div>
            <p className="text-sm leading-relaxed text-center">
              Create the seed and generate a dataset.
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2 flex flex-col gap-4`}>
            <div className="flex-1 flex items-center justify-center">
              <SeedChecks />
            </div>
            <p className="text-sm leading-relaxed text-center">
              Evaluate outputs against the dataset.
            </p>
          </div>
          <div className="w-1/4 p-2 flex flex-col gap-4">
            <div className="flex-1 flex items-center justify-center">
              <SeedCoverage />
            </div>
            <p className="text-sm leading-relaxed text-center">
              Understand and monitor the results.
            </p>
          </div>
        </div>

        <div className={`${row} h-12`} />

        {/* The seed, stated plainly */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-xl leading-relaxed w-full md:w-3/4">
              The seed is your PRD made actionable, ready to plug in.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">The Loop</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* The loop, before ship */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 flex items-center justify-center`}>
            <div
              className="w-full px-8 py-6"
              style={{ cursor: "zoom-in" }}
              onClick={() => openLightboxNode(<BuildLoop />)}
            >
              <BuildLoop />
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Specify */}
        <div className={row}>
          <div
            className={`${cell} w-1/4 flex items-start justify-start md:justify-end p-2`}
          >
            <h3 className="text-sm font-bold">Specify</h3>
          </div>
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              The prompt is the spec. The description of the feature is the
              feature, so nothing drifts out of sync.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Score */}
        <div className={row}>
          <div
            className={`${cell} w-1/4 flex items-start justify-start md:justify-end p-2`}
          >
            <h3 className="text-sm font-bold">Score</h3>
          </div>
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Generic scorers catch output that is toxic or incoherent. That is
              a low bar.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              So every criterion in the seed becomes its own scorer. Plain code
              where the rule is crisp, a small judge where it is fuzzy. The
              first number is usually worse than I guessed.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Rewrite */}
        <div className={row}>
          <div
            className={`${cell} w-1/4 flex items-start justify-start md:justify-end p-2`}
          >
            <h3 className="text-sm font-bold">Rewrite</h3>
          </div>
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Read the scores, rewrite, run it again, keep the best version.
              Every scorer has to clear the bar, not the average.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">In Production</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Observer panel */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Beeline puts every feature it builds behind a live URL, and the
              scorers keep grading real calls there. Same seed, same scorers,
              real traffic.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Most AI features stall between demo and production because nobody
              can say whether they are good enough. When checking is this
              cheap, you ship sooner and faster.
            </p>
          </div>
          <div className="w-1/2 p-2 overflow-hidden">
            {/* Cap the screenshot at the viewport so the whole UI stays
                visible at once on wide displays, where a w-full image would
                otherwise grow taller than the window. w-auto + max-w-full
                keeps the aspect ratio rather than squashing it; the dark
                backdrop letterboxes whatever width is left over. */}
            <div className="bg-[#181818] overflow-hidden flex justify-center">
              {img(
                app,
                "A deployed feature and its scored production runs",
                "w-auto h-auto max-w-full max-h-[80vh] block",
              )}
            </div>
          </div>
        </div>

        <div className={`${row} h-12`} />

        {/* The same loop, after ship */}
        <div className={row}>
          <div
            className={`${cell} w-1/4 flex items-start justify-start md:justify-end p-2`}
          >
            <h3 className="text-sm font-bold">After ship</h3>
          </div>
          <div className={`${cell} w-1/2 p-2 flex items-center justify-center`}>
            <div
              className="w-full px-8 py-6"
              style={{ cursor: "zoom-in" }}
              onClick={() => openLightboxNode(<ProductionLoop />)}
            >
              <ProductionLoop />
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        <div className={`${row} h-12`} />

        {/* The two failures */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Two things only production told me. Alignment scorers that had
              never graded a single live call. They were there, they looked
              fine, they did nothing.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              And refusals scoring as passes, because a model that declines to
              answer still returns something clean. Good had a hole in it, and
              only real traffic found it.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Key insight */}
        <div className={row}>
          <div
            className={`${cell} w-1/4 flex items-start justify-start md:justify-end p-2`}
          >
            <h3 className="text-sm font-bold">Key Insight</h3>
          </div>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              The seed is never right on the first pass. Production is what
              edits it.
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2`} />
          <div className="w-1/4 p-2" />
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Evaluating the Evaluator
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              If an agent writes the scorers, something has to check the
              scorers. Meta-evals grade Beeline’s own build calls, including the
              rewrite the loop makes, and CI gates on an offline self-test so
              the machinery can’t rot quietly between deploys.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Trusting a grader I’d never tested would’ve been the same mistake
              I set out to fix.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Closing */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 pb-12`}>
            <p className="text-xl leading-relaxed w-full md:w-3/4">
              Beeline doesn’t change that work. It gives the definition
              somewhere to go: into scorers that run, on every version that
              ships.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer + Other work */}
        <div className={`${row} h-12`} />

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Other work</h2>
        </div>

        <div className="cs-other-section">
          <div className={row}>
            <Link to="/good-listener" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link to="/auto" className="cs-other-nav__cell cs-other-nav__cell--next">
              <span className="cs-other-nav__label">Next →</span>
            </Link>
          </div>

          <div className={row}>
            <Link to="/good-listener" className="cs-other-card cs-other-card--prev">
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">Good Listener</span>
                  <span className="text-sm">Local transcriptions for therapists</span>
                </div>
                <div className="cs-other-card__image">
                  <img src={glHeaderImage} alt="Good Listener preview" />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold">UX, UI, Front End</span>
                  <span className="text-sm text-[#5e5e5e]">2026</span>
                </div>
              </div>
            </Link>
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-cards__spacer" />
            <Link to="/auto" className="cs-other-card cs-other-card--next">
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">Auto</span>
                  <span className="text-sm">
                    Collaborative workflow builder for blockchain automations
                  </span>
                </div>
                <div className="cs-other-card__image">
                  <img src={autoHeaderImage} alt="Auto preview" />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold">UX, UI, Front End</span>
                  <span className="text-sm text-[#5e5e5e]">2025</span>
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

export default BeelineCaseStudy;
