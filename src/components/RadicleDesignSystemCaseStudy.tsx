import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import headerImage from "../assets/radicle-design-system/header.jpeg";
import radicleDesktopHeaderImage from "../assets/radicle-desktop/header.png";
import autoHeaderImage from "../assets/auto/header.png";

const meta: CaseStudyMeta = {
  title: "Radicle Design System",
  subtitle: "Consistency By Design",
  tags: "Design System, UI, Front End",
  year: "2024",
  demoLink: "https://app.radicle.xyz/nodes/rosa.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury/",
  demoLabel: "Radicle design tokens →",
};

// Border rule: row owns border-l border-r border-b.
// Each child cell owns border-r except the last child.
// All cells with content get p-2.
const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const RadicleDesignSystemCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img) => (
      <>
        {/* Spacer */}
        <div className={`${row} border-t h-12`} />

        {/* Intro — 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}>
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              I joined Radicle to improve consistency and create a unified design
              system. Design consistency is crucial in any project, but it can be
              particularly challenging in open source projects due to the diverse
              and distributed nature of contributors.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Radicle</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">Design Audit, Design System, Design Tokens</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">Figma, Tokens Studio, Style Dictionary</span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Hero image — 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            <div className="bg-[#181818] h-[366px] overflow-hidden">
              {img(headerImage, "Radicle Design System")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
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
                The goal was to create a unified design language for the Radicle
                ecosystem: web app, desktop app, and documentation — all maintained
                by distributed contributors with varying Figma experience.
              </p>
              <p className="text-sm leading-relaxed">
                The challenge was bridging design and code: tokens needed to be
                defined once and flow into both Figma components and the CSS
                codebase without drift.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-2 pb-12 border-t border-[var(--color-border)]">
              <h3 className="text-sm font-bold">Process and Responsibilities</h3>
              <p className="text-sm leading-relaxed">
                I started with a design audit across all Radicle surfaces, mapping
                inconsistencies in color, spacing, typography, and component usage.
              </p>
              <p className="text-sm leading-relaxed">
                From there I defined a token structure in Tokens Studio — semantic
                tokens layered over primitives — then used Style Dictionary to
                generate CSS and Figma variables from the same source.
              </p>
            </div>
          </div>
        </div>

        {/* Section heading: Foundations */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-xl font-bold">Foundations</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: text | wide img | empty */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              The token system starts with a set of primitives: a full color
              palette, a spacing scale, and type styles. On top of these sit
              semantic tokens that describe intent — color-bg, color-border,
              color-text — rather than raw values.
            </p>
            <p className="text-sm leading-relaxed">
              This makes it easy to add themes or update the palette without
              touching individual components.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(headerImage, "Design tokens")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Section heading: Components */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-xl font-bold">Components</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* CTA row: empty | text | cta */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2 shrink-0`} />
          <div className={`${cell} w-1/2 shrink-0 p-2 pb-12`}>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed">
                Components were built in Figma with auto-layout and token
                references throughout — no hardcoded values. Each component maps
                directly to its Svelte counterpart so designers and developers
                share the same mental model.
              </p>
              <p className="text-sm leading-relaxed">
                The library is open for contribution: any Radicle team member can
                propose additions by following the documented patterns.
              </p>
            </div>
          </div>
          <a
            href="https://app.radicle.xyz/nodes/rosa.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury/"
            target="_blank"
            rel="noreferrer"
            className="cs-collab-intro__cta"
            aria-label="View Radicle design tokens"
          >
            <span className="cs-collab-intro__link">Design tokens →</span>
          </a>
        </div>

        {/* Image row */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(headerImage, "Component library")}
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
            <Link to="/auto" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link to="/radicle-desktop" className="cs-other-nav__cell cs-other-nav__cell--next">
              <span className="cs-other-nav__label">Next →</span>
            </Link>
          </div>

          <div className={row}>
            <Link to="/auto" className="cs-other-card cs-other-card--prev">
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">Auto</span>
                  <span className="text-sm">Collaborative workflow builder for blockchain automations</span>
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
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-cards__spacer" />
            <Link to="/radicle-desktop" className="cs-other-card cs-other-card--next">
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">Radicle Desktop</span>
                  <span className="text-sm">Your code on your machine</span>
                </div>
                <div className="cs-other-card__image">
                  <img src={radicleDesktopHeaderImage} alt="Radicle Desktop preview" />
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

export default RadicleDesignSystemCaseStudy;
