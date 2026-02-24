import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import patchPreview from "../assets/radicle-desktop/patch-preview.png";
import patchReview from "../assets/radicle-desktop/patch-review.png";
import wireframes from "../assets/radicle-desktop/wireframes.png";
import wireframes2 from "../assets/radicle-desktop/wireframes-2.png";
import empathyMap from "../assets/radicle-desktop/empathy-map.png";
import peerSelector from "../assets/radicle-desktop/peer-selector.png";
import cliAndApp from "../assets/radicle-desktop/cli-and-app.png";
import radicleDesignSystemHeaderImage from "../assets/radicle-design-system/header-2.png";
import autoHeaderImage from "../assets/auto/header-2.jpeg";

const meta: CaseStudyMeta = {
  title: "Radicle Desktop",
  subtitle: "Your Code on Your Machine",
  tags: "UX, UI, Front End",
  year: "2024",
  demoLink:
    "https://app.radicle.xyz/nodes/rosa.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury/",
  demoLabel: "Get the app →",
};

// Border rule: row owns border-l border-r border-b.
// Each child cell owns border-r except the last child.
// All cells with content get p-2.
const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const RadicleDesktopCaseStudy: React.FC = () => (
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
              The Radicle desktop app lets you manage issues and patches, review
              code, and stay on top of notifications. Write and review offline,
              then sync with your peers when you're back online.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Radicle</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">Design, Prototype, User research</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">Figma, Svelte</span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Hero — 2col | 2col */}
        <div className={row}>
          <div className={`${cell} w-1/2 p-2`}>
            <div className="bg-[#181818] h-[366px] overflow-hidden">
              {img(patchPreview, "Patch preview")}
            </div>
          </div>
          <div className="w-1/2 p-2">
            <div className="bg-[#181818] h-[366px] overflow-hidden">
              {img(patchReview, "Patch review")}
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Challenge + Process text — 2col empty | 2col text */}
        <div className={row}>
          <div className={`${cell} w-1/2 p-2`} />
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-col gap-4 p-2 pb-12">
              <h3 className="text-sm font-bold">Challenge and Goals</h3>
              <p className="text-sm leading-relaxed">
                The Radicle desktop app is a long-term project spanning multiple
                features: patches, code review, notifications, and more. The
                goal is to make peer-to-peer code collaboration feel as familiar
                as centralized tools, without hiding what makes Radicle
                different.
              </p>
              <p className="text-sm leading-relaxed">
                The core challenge is that Radicle's underlying model
                (peer-to-peer, local-first, traceable) doesn't map neatly onto
                the mental models users bring from GitHub. Every design decision
                needs to bridge that gap honestly.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-2 pb-12 border-t border-[var(--color-border)]">
              <h3 className="text-sm font-bold">
                Process and Responsibilities
              </h3>
              <p className="text-sm leading-relaxed">
                For each feature I followed the same loop: understand the user
                need and the relevant protocol behaviour, formulate a
                hypothesis, then sketch wireframes, try out simple prototypes,
                and at last provide detailed designs to implement.
              </p>
              <p className="text-sm leading-relaxed">
                Ideas were validated with both users and the engineering team
                before moving to high-fidelity mockups and handoff.
              </p>
            </div>
          </div>
        </div>

        {/* Section heading: Foundations */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Foundations</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: text | wide img | img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              I started by learning about the Radicle protocol, different code
              review workflows, and what a desktop app needs to surface in a
              peer-to-peer setup.
            </p>
            <p className="text-sm leading-relaxed">
              I explored several structural options, weighing ease of navigation
              against staying true to how Radicle actually works, avoiding
              abstractions that would confuse users moving between the app and
              the CLI.
            </p>
            <p className="text-sm leading-relaxed">
              Alongside this, I talked to users and noted patterns in how they
              think about their current tools, and about switching to Radicle.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(wireframes2, "Wireframes")}
          </div>
          <div className="w-1/4 p-2 overflow-hidden">
            {img(empathyMap, "Empathy map")}
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: empty | text | wide img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              Patches in Radicle are more complex than typical pull requests:
              they have revisions, and each peer in the network may be at a
              different revision, or may not have fetched the latest updates.
            </p>
            <p className="text-sm leading-relaxed">
              Designing the patch page meant making this visible without
              overwhelming users. Whose version am I looking at, what's changed
              since I last fetched, and from whom?
            </p>
          </div>
          <div className="w-1/2 p-2 overflow-hidden">
            {img(wireframes, "Patch wireframes")}
          </div>
        </div>

        {/* Section heading: Local First */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Local First</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: wide img | text | empty */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(peerSelector, "Peer selector")}
          </div>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              Because the desktop app only sees what your node sees it is
              crucial that we rely on seed nodes accessible through the web app
              for peer discovery.
            </p>
            <p className="text-sm leading-relaxed">
              In local-first and peer-to-peer architectures, you're never
              entirely sure if you're viewing the latest version. Users won't
              receive updates from unknown peers, even if they've both
              contributed to the same repository.
            </p>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Section heading: True to Code */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">True to Code</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* CTA row: empty | text | cta */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2 shrink-0`} />
          <div className={`${cell} w-1/2 shrink-0 p-2 pb-12`}>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed">
                The app mirrors the underlying protocol and CLI tools closely.
                This makes it easier for users to move between the desktop app
                and command line without switching mental models.
              </p>
              <p className="text-sm leading-relaxed">
                Everything in Radicle is immutable and signed, so the UI
                reflects that: you can always see what's changed, by whom, and
                trace it back to its source.
              </p>
            </div>
          </div>
          <a
            href="https://app.radicle.xyz/nodes/rosa.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury/"
            target="_blank"
            rel="noreferrer"
            className="cs-collab-intro__cta"
            aria-label="Get the Radicle desktop app"
          >
            <span className="cs-collab-intro__link">Get the app →</span>
          </a>
        </div>

        {/* CLI and app image row */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(cliAndApp, "CLI and app parity")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer + Section heading: Other work */}
        <div className={`${row} h-12`} />
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-xl font-bold">Other work</h2>
        </div>

        <div className="cs-other-section">
          <div className={row}>
            <Link to="/radicle-design-system" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link
              to="/auto"
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

export default RadicleDesktopCaseStudy;
