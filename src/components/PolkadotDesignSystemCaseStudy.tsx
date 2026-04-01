import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import coverImage from "../assets/polkadot-design-system/cover.png";
import buildingBlocksImage from "../assets/polkadot-design-system/building-blocks.png";
import tokensJsonImage from "../assets/polkadot-design-system/tokens-json.png";
import cssVariablesImage from "../assets/polkadot-design-system/css-variables.png";
import implementationCssImage from "../assets/polkadot-design-system/implementation-css.png";
import productLibraryImage from "../assets/polkadot-design-system/product-library.png";
import validatorPickerImage from "../assets/polkadot-design-system/validator-picker.png";
import assetMenuImage from "../assets/polkadot-design-system/asset-menu.png";
import openGovHeaderImage from "../assets/open-gov/dashboard-home.png";
import solarWalletHeaderImage from "../assets/solar-wallet/cover.png";

const meta: CaseStudyMeta = {
  title: "Polkadot Design System",
  subtitle: "A system to define the look and experience of web3",
  tags: "Design System, UI, Front End",
  year: "2023",
  demoLink: "https://github.com/dnlklmn/polkadot-theme",
  demoLabel: "GitHub →",
  company: "Parity Technologies",
  role: "Design System, Design, Front End",
  tech: "Figma, Token Studio, Style Dictionary, React",
};

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const PolkadotDesignSystemCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img) => (
      <>
        <div className={`${row} border-t h-12`} />

        {/* Intro, 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 relative overflow-hidden`}>
            {img(coverImage, "Polkadot Design System cover", "absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover block")}
          </div>
          <div className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}>
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              A shared design language and component system across Polkadot's
              ecosystem, spanning brand designers, product teams, and external
              builders. One system to improve consistency, collaboration, and
              speed across web3.
            </p>
          </div>
          <div className="cs-intro-meta w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Parity Technologies</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">Design System, Design, Front End</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">Figma, Token Studio, Style Dictionary, React</span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Who section */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Who</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* 3 audience types */}
        <div className={row}>
          <div className={`${cell} w-1/3 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">Brand designers / web developers</p>
            <p className="text-sm leading-relaxed">
              Building landing pages, marketing sites, and brand experiences that
              represent the Polkadot ecosystem visually.
            </p>
          </div>
          <div className={`${cell} w-1/3 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">Product designers / app developers</p>
            <p className="text-sm leading-relaxed">
              Designing and building dashboards, tools, and product interfaces
              used by the Polkadot community day-to-day.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-3 p-2 pb-12">
            <p className="text-sm font-bold">Ecosystem front-end builders</p>
            <p className="text-sm leading-relaxed">
              External developers creating apps on top of the Polkadot chain,
              who needed shared primitives and components to build faster and
              more consistently.
            </p>
          </div>
        </div>

        {/* Section heading: Building Blocks */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Building Blocks</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Building blocks: text | wide img */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              Provide easy-to-use, connected building blocks to enable anyone
              to build on top of Polkadot quickly and consistently.
            </p>
            <p className="text-sm leading-relaxed">
              The system is structured in layers: foundation tokens flow into
              semantic libraries, which feed into product-specific component
              sets. Each layer is usable independently or together.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2`}>
            {img(buildingBlocksImage, "Design system building blocks diagram")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Section heading: Aligning Design */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Aligning Design</h2>
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
              Polkadot's ecosystem spans brand designers building landing pages,
              product teams designing dashboards, and external builders creating
              apps on top of the chain, each working in isolation, inconsistently.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              The goal was to create a shared system that improves consistency
              across all these teams, improves collaboration between design and
              development, and speeds up the production cycle.
            </p>
          </div>
        </div>

        {/* Collect patterns row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Collect patterns</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              We collected and curated best practices from across web3 ecosystems,
              reviewing existing design systems, community projects, and tooling
              to understand what was already working and what gaps needed filling.
            </p>
          </div>
        </div>

        {/* Document decisions row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Document decisions, define principles</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              To make sure we could learn from each other and build shared
              understanding, we established regular touchpoints: weekly design
              team meetings, biweekly design system syncs, and open office hours
              for anyone in the organization to contribute or ask questions.
            </p>
          </div>
        </div>

        {/* 4 goals row */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">Improve consistency</p>
            <p className="text-sm leading-relaxed">
              Brand designers control the visual language and focus on creative
              power. Product designers focus on UX and structural decisions.
            </p>
            <ul className="text-sm leading-relaxed list-none space-y-1 mt-1">
              <li>+ Shared token vocabulary</li>
              <li>+ Unified component naming</li>
              <li>+ Cross-team design reviews</li>
            </ul>
          </div>
          <div className={`${cell} w-1/4 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">Improve collaboration</p>
            <p className="text-sm leading-relaxed">
              Share ownership and responsibilities. Turn hand-offs into touch points.
            </p>
            <ul className="text-sm leading-relaxed list-none space-y-1 mt-1">
              <li>+ Designers and developers co-own the token source</li>
              <li>+ Contributions welcome from all teams</li>
            </ul>
          </div>
          <div className={`${cell} w-1/4 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">Improve speed</p>
            <p className="text-sm leading-relaxed">
              Use available building blocks. Get feedback early in the production
              cycle before investing in high-fidelity work.
            </p>
            <ul className="text-sm leading-relaxed list-none space-y-1 mt-1">
              <li>+ Reuse across products</li>
              <li>+ Faster prototyping with shared components</li>
            </ul>
          </div>
          <div className="w-1/4 flex flex-col gap-3 p-2 pb-12">
            <p className="text-sm font-bold">Spread the word</p>
            <p className="text-sm leading-relaxed">
              Define web3 usability standards together. Share principles,
              decisions, and learnings across the ecosystem.
            </p>
            <ul className="text-sm leading-relaxed list-none space-y-1 mt-1">
              <li>+ Open source token repository</li>
              <li>+ Public documentation</li>
              <li>+ Ecosystem outreach</li>
            </ul>
          </div>
        </div>

        {/* Section heading: Bridge Design to Development */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Bridge Design to Development
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Bridge: text row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Shared references</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Style primitives are exported from Figma in JSON format using the
              Token Studio plugin, stored in a GitHub repository as the single
              source of truth. Style Dictionary then processes the JSON into CSS
              variables and a Tailwind config, which front-end teams plug into
              directly.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              When designers update a token in Figma, they export the JSON, commit
              it, and the whole pipeline regenerates. No manual handoff, no drift
              between design and code.
            </p>
          </div>
        </div>

        {/* Token system: text | img | img | img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0 overflow-y-auto`}>
            <p className="text-sm leading-relaxed">
              A set of style properties: colors, text styles, border radii,
              shadows, and assets like icons, fonts, and illustrations, available
              as design tokens for both designers and developers.
            </p>
            <p className="text-sm leading-relaxed">
              The JSON from Figma flows through Style Dictionary into CSS
              variables and a Tailwind config that teams plug into directly.
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(tokensJsonImage, "Design tokens JSON structure")}
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(cssVariablesImage, "CSS variables output")}
          </div>
          <div className="w-1/4 p-2 overflow-hidden">
            {img(implementationCssImage, "Implementation in CSS")}
          </div>
        </div>

        {/* Section heading: Semantic Libraries */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Semantic Libraries
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Semantic: text | wide img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0 overflow-y-auto`}>
            <p className="text-sm leading-relaxed">
              Component libraries tailored to each team's needs assign semantic
              roles to the common styles and assets settled in the foundation
              libraries.
            </p>
            <p className="text-sm leading-relaxed">
              We first opened contributions within the organization: designers
              proposing components they thought useful for others, developers
              picking up the designs and giving feedback.
            </p>
            <p className="text-sm leading-relaxed">
              The longer-term vision was to incentivize ecosystem contributions
              through the Polkadot Treasury. The company shut down its app
              building efforts before we could fully realize these plans.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(productLibraryImage, "Product team's component library")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Section heading: Contribution and Governance */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Contribution and Governance
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Contribution rows */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Internal contributions first</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              We started by opening contributions within the organization. Any
              designer could propose a new component by sharing a Figma file;
              developers would review and implement the agreed spec. This kept
              quality high while distributing ownership.
            </p>
          </div>
        </div>

        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Ecosystem incentivization</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              The longer-term plan was to incentivize external ecosystem
              contributions through the Polkadot Treasury, a decentralized
              funding mechanism. Teams building on Polkadot could propose
              components, get funded for the work, and have their contributions
              reviewed and merged into the shared system.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Parity shut down its app-building efforts before we could fully
              realize this vision.
            </p>
          </div>
        </div>

        {/* Section heading: Implementations */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Implementations</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Implementations intro */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Products built on the system</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Several products were built using the design system, validating its
              flexibility and surfacing new component needs that fed back into the
              library.
            </p>
          </div>
        </div>

        {/* Open Gov */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Open Gov Delegation Dashboard</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-4">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              A governance delegation tool that lets token holders delegate their
              voting power to trusted community members. Built entirely with the
              design system's token infrastructure and component library.
            </p>
            <div>
              <Link to="/open-gov-delegation-dashboard" className="text-sm font-bold underline">
                View case study →
              </Link>
            </div>
          </div>
        </div>
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            {img(openGovHeaderImage, "Open Gov Delegation Dashboard")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Validator Picker */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Validator Picker</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-4">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              A tool to help stakers choose validators based on on-chain data:
              commission rates, recent activity, identity, and more. The filter
              and table patterns developed here became reusable components in
              the library.
            </p>
          </div>
        </div>
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            {img(validatorPickerImage, "Validator Picker implementation")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Asset Menu */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Asset Menu Demo</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-4">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              A prototype showing how cross-chain asset management could work
              as a unified experience. Demonstrated the design system's ability
              to support complex interactive states while maintaining visual
              consistency.
            </p>
          </div>
        </div>
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            {img(assetMenuImage, "Asset Menu Demo implementation")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Other work</h2>
        </div>

        <div className="cs-other-section">
          {/* Prev / Next nav row */}
          <div className={row}>
            <Link to="/open-gov-delegation-dashboard" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link
              to="/solar-wallet"
              className="cs-other-nav__cell cs-other-nav__cell--next"
            >
              <span className="cs-other-nav__label">Next →</span>
            </Link>
          </div>

          {/* Cards row */}
          <div className={row}>
            <Link
              to="/open-gov-delegation-dashboard"
              className="cs-other-card cs-other-card--prev"
            >
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">
                    Open Gov Delegation Dashboard
                  </span>
                  <span className="text-sm">Making Polkadot governance accessible</span>
                </div>
                <div className="cs-other-card__image">
                  <img
                    src={openGovHeaderImage}
                    alt="Open Gov Delegation Dashboard preview"
                  />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold whitespace-nowrap">
                    UX, UI, Front End
                  </span>
                  <span className="text-sm">2023</span>
                </div>
              </div>
            </Link>
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-cards__spacer" />
            <Link
              to="/solar-wallet"
              className="cs-other-card cs-other-card--next"
            >
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">Solar Wallet</span>
                  <span className="text-sm">A Stellar wallet built for simplicity</span>
                </div>
                <div className="cs-other-card__image">
                  <img src={solarWalletHeaderImage} alt="Solar Wallet preview" />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold whitespace-nowrap">
                    UX, UI, Prototyping
                  </span>
                  <span className="text-sm">2019</span>
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

export default PolkadotDesignSystemCaseStudy;
