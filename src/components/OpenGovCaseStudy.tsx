import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import dashboardHomeImage from "../assets/open-gov/dashboard-home.png";
import delegatesImage from "../assets/open-gov/delegates.png";
import delegationOnePageImage from "../assets/open-gov/delegation-one-page.png";
import flowDetailedImage from "../assets/open-gov/flow-overview-detailed.png";
import flowSimpleImage from "../assets/open-gov/flow-overview-simple.png";
import threeInOneImage from "../assets/open-gov/3in1.png";
import proposalsImage from "../assets/open-gov/proposals.png";
import radicleDesignSystemHeaderImage from "../assets/radicle-design-system/header.jpeg";
import polkadotDsHeaderImage from "../assets/polkadot-design-system/cover.png";

const meta: CaseStudyMeta = {
  title: "Open Gov Delegation Dashboard",
  subtitle: "Making Polkadot governance accessible",
  tags: "UX, UI, Front End",
  year: "2023",
  demoLink: "https://delegation.polkadot.network/",
  demoLabel: "Live →",
  company: "Parity Technologies",
  role: "UX Design, Front End",
  tech: "Figma, React, Polkadot Design System",
};

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const OpenGovCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img) => (
      <>
        <div className={`${row} border-t h-12`} />

        {/* Intro — 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 relative overflow-hidden`}>
            {img(delegationOnePageImage, "Open Gov Delegation Dashboard", "absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover block")}
          </div>
          <div className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}>
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              A multi-iteration design exploration for making Polkadot Open
              Governance accessible, from a swipe-based mobile voting interface
              to a full governance portal, ultimately landing on a delegation-first
              experience.
            </p>
          </div>
          <div className="cs-intro-meta w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Parity Technologies</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">UX Design, Front End</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">Figma, React, Polkadot Design System</span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Hero image */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            <div className="overflow-hidden">
              {img(dashboardHomeImage, "Governance portal home")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Challenge row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Challenge and Goals</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Polkadot's Open Governance system gives token holders the power to
              vote on network decisions, but participation was low. The process
              was complex, intimidating, and time-consuming for most people.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              The goal was to find the right entry point, a way to bring more
              people into governance without overwhelming them, and without
              compromising the depth that experienced participants need.
            </p>
          </div>
        </div>

        {/* Process row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Process and Responsibilities</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              I explored three distinct directions through iterative prototyping
              and user testing: a swipe-based voting interface inspired by a
              community forum post, a full governance portal with news, stats,
              and proposals, and finally a delegation-first approach that
              narrowed the focus to helping users delegate their voting power.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              I contributed to building the live web app at{" "}
              <a
                href="https://delegation.polkadot.network/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                delegation.polkadot.network
              </a>
              , implementing the Polkadot Design System I created alongside
              various front end refinements from responsiveness to animations.
            </p>
          </div>
        </div>

        {/* Section heading: Swiping Interface */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Swiping Interface
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Swiping Interface: text | img | img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0 overflow-y-auto`}>
            <p className="text-sm leading-relaxed">
              Inspired by a public forum post, the swiping interface was meant
              to make voting on Polkadot Open Governance proposals easier and
              more accessible, building on a familiar gesture.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div>
                <p className="text-sm font-bold mb-1">Works well</p>
                <ul className="text-sm leading-relaxed list-none space-y-1">
                  <li>+ Simple to use</li>
                  <li>+ Focused on one referenda at a time</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold mb-1">Limitations</p>
                <ul className="text-sm leading-relaxed list-none space-y-1">
                  <li>− Swiping is strange on desktop</li>
                  <li>− Difficult to filter</li>
                  <li>− Might favor quick uninformed decisions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(flowSimpleImage, "Flow overview — simplified")}
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(flowDetailedImage, "Flow overview — detailed")}
          </div>
          <div className="w-1/4 p-2 overflow-hidden">
            {img(threeInOneImage, "Swiping interface mockups")}
          </div>
        </div>

        {/* Section heading: Governance Portal */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Governance Portal
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Governance Portal: text | img | img | img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0 overflow-y-auto`}>
            <p className="text-sm leading-relaxed">
              In a second iteration the goal was to be more explicit, and offer
              a view with referenda one is interested in voting on. A full
              portal to display news, stats, proposals, and delegates.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div>
                <p className="text-sm font-bold mb-1">Works well</p>
                <ul className="text-sm leading-relaxed list-none space-y-1">
                  <li>+ Everything in one place</li>
                  <li>+ Informative</li>
                  <li>+ Helpful for those already fluent</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold mb-1">Limitations</p>
                <ul className="text-sm leading-relaxed list-none space-y-1">
                  <li>− Too much information</li>
                  <li>− Doesn't help users get started</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(dashboardHomeImage, "Governance portal home")}
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(proposalsImage, "Proposals view")}
          </div>
          <div className="w-1/4 p-2 overflow-hidden">
            {img(delegatesImage, "Delegates list")}
          </div>
        </div>

        {/* Section heading: Delegation First */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Delegation First
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Delegation First: text | wide img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0 overflow-y-auto`}>
            <p className="text-sm leading-relaxed">
              After more testing and further aligning with the goals of the
              network, we narrowed our focus to delegation. More tokens behind a
              decision carry more weight. Delegating your tokens to a trusted
              expert makes every decision quicker and more informed.
            </p>
            <p className="text-sm leading-relaxed">
              The delegation-first structure allows token holders to find the
              people they trust, either delegating their entire voting power or
              specifying which governance tracks they want to handle themselves.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(delegationOnePageImage, "Delegation one-page interface")}
          </div>
          <div className="w-1/4 flex flex-col gap-4 p-2 overflow-y-auto">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold">Pick a delegate you trust</p>
              <p className="text-sm leading-relaxed">
                Delegate your entire voting power to someone you trust. Good
                for less technical users and DAOs that want to pool influence.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold">Specify tracks to keep or delegate</p>
              <p className="text-sm leading-relaxed">
                Narrow your focus: let a delegate vote for a particular track
                while you retain control over others.
              </p>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Other work</h2>
        </div>

        <div className="cs-other-section">
          {/* Prev / Next nav row */}
          <div className={row}>
            <Link to="/radicle-design-system" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link
              to="/polkadot-design-system"
              className="cs-other-nav__cell cs-other-nav__cell--next"
            >
              <span className="cs-other-nav__label">Next →</span>
            </Link>
          </div>

          {/* Cards row */}
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
                  <span className="text-sm font-bold whitespace-nowrap">
                    Design System, UI, Front End
                  </span>
                  <span className="text-sm">2024</span>
                </div>
              </div>
            </Link>
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-cards__spacer" />
            <Link
              to="/polkadot-design-system"
              className="cs-other-card cs-other-card--next"
            >
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">
                    Polkadot Design System
                  </span>
                  <span className="text-sm">One system, many products</span>
                </div>
                <div className="cs-other-card__image">
                  <img
                    src={polkadotDsHeaderImage}
                    alt="Polkadot Design System preview"
                  />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold whitespace-nowrap">
                    Design System, UI
                  </span>
                  <span className="text-sm">2023</span>
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

export default OpenGovCaseStudy;
