import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import header from "../assets/beeline/beeline-blog.png";
import app from "../assets/beeline/beeline-app.png";
import glHeaderImage from "../assets/good-listener/header.jpeg";
import autoHeaderImage from "../assets/auto/header-2.jpeg";
import BuildLoop from "../assets/beeline/BuildLoop";
import ProductionLoop from "../assets/beeline/ProductionLoop";
import Anchor from "../assets/beeline/Anchor";
import { SeedSource, SeedChecks, SeedCoverage } from "../assets/beeline/SeedSteps";

const meta: CaseStudyMeta = {
  title: "Beeline",
  subtitle: "From intent to proof",
  tags: "Methodology, Product Design, Vibe coding",
  year: "2026",
  demoLink: "https://beeline.biene.club",
  demoLabel: "Try it →",
  company: "Biene Club",
  role: "Methodology, Product Design, Vibe coding",
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
              Beeline turns a one-sentence description into a tested, deployed
              feature: it derives what “good” means, generates the scorers from
              it, and rewrites until every one of them passes.
            </p>
          </div>
          <div className="cs-intro-meta w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Biene Club</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">
                Methodology, Product Design, Vibe coding
              </span>
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

        {/* Hero image */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            <div className="bg-[#181818] overflow-hidden">
              {img(header, "A bee flying a straight line to a flower")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Challenge row */}
        <div className={row}>
          <div
            className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}
          >
            <h3 className="text-sm font-bold">Challenge and Goals</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Most people try a few inputs, read what comes back, and decide it
              looks about right. That holds until there’s more output than
              anyone can read, which is immediately.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              I knew I had to help clients run evals, before they ship and after
              they’re in production.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              But what would they evaluate against? First I’d have to help them
              define what a good outcome is, and turn that into an artifact we
              can use.
            </p>
          </div>
        </div>

        {/* Process row */}
        <div className={row}>
          <div
            className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}
          >
            <h3 className="text-sm font-bold">Process and Responsibilities</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Figuring out what people would call a good outcome is the job I’ve
              always had. Research, framing, acceptance criteria, it’s the same
              question asked in different rooms.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              So I pointed those methods at evaluation. The work that produces a
              good product decision is the work that produces a definition of
              good precise enough to run evals against.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              I framed the method, designed the app around it, wrote the
              orchestrator and the frontend, put it in production, and watched
              what it got wrong.
            </p>
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Building Got Cheap
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* The reversal */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Agentic engineering changed how software gets built and almost
              nothing about what building software is. I still frame a problem,
              propose options, pick one, and iterate until it’s good enough.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Generating is nearly free now, so the work moved to the steps on
              either side of it: knowing what I’m aiming at, and telling whether
              I hit it.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Here’s how I think about building with AI now.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        <div className={`${row} h-12`} />

        {/* Build, Prove, Adapt */}
        <div className={row}>
          <div
            className={`${cell} w-1/4 flex items-start justify-start md:justify-end p-2`}
          >
            <h3 className="text-sm font-bold">Build Right</h3>
          </div>
          <div className={`${cell} w-1/4 flex flex-col gap-3 p-2 pb-12`}>
            <span className="text-sm font-bold">Build</span>
            <p className="text-sm leading-relaxed">
              Frame the problem with the team, and pin down what a good outcome
              looks like.
            </p>
          </div>
          <div className={`${cell} w-1/4 flex flex-col gap-3 p-2 pb-12`}>
            <span className="text-sm font-bold">Prove</span>
            <p className="text-sm leading-relaxed">
              Turn that definition into scorers that run, and gate the release
              on them.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-3 p-2 pb-12">
            <span className="text-sm font-bold">Adapt</span>
            <p className="text-sm leading-relaxed">
              As more of the product runs on AI, adapt who owns quality and how
              it’s measured.
            </p>
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            How Evals Work
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* The mechanism — text | eval anatomy diagram */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
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


        <div className={`${row} h-12`} />

        {/* Thesis beat */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 pb-12`}>
            <p className="text-xl leading-relaxed w-full md:w-3/4">
              To get closer to your goal you need an anchor that tells you how
              far off you are.
            </p>
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
            <div className="bg-[#181818] overflow-hidden">
              {img(app, "A deployed feature and its scored production runs")}
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
