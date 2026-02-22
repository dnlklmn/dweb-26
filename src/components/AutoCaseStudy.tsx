import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import headerImage from "../assets/auto/header.png";
import blocksGridImage from "../assets/auto/blocks-grid.png";
import cryptoListenersImage from "../assets/auto/crypto-listeners.png";
import generateWorkflowImage from "../assets/auto/generate-workflow.png";
import ifttentropyImage from "../assets/auto/ifttentropy.png";
import mcpServerImage from "../assets/auto/mcp-server.png";
import nestedBlocksImage from "../assets/auto/nested-blocks.png";
import realTimeCollabImage from "../assets/auto/real-time-collab.png";
import simplerBlocksImage from "../assets/auto/simpler-blocks.png";
import nodeTypesImage from "../assets/auto/node-types.png";
import radicleDesignSystemHeaderImage from "../assets/radicle-design-system/header.jpeg";
import radicleDesktopHeaderImage from "../assets/radicle-desktop/header.png";

const meta: CaseStudyMeta = {
  title: "Auto",
  subtitle: "Collaborative workflow builder for blockchain automations",
  tags: "UX, UI, Front End",
  year: "2025",
  demoLink: "https://auto-workflow-builder.netlify.app/",
  demoLabel: "Demo →",
};

// Border rule: row owns border-l border-r border-b.
// Each child cell owns border-r except the last child.
// All cells with content get p-2.
const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const AutoCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img) => (
      <>
        {/* Spacer — border-t closes the header */}
        <div className={`${row} border-t h-12`} />

        {/* Intro — 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}>
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              A visual workflow builder with real-time collaboration that bridges
              on-chain and off-chain automation. Use blockchain triggers to kick
              off workflows, or aggregate off-chain data to construct on-chain
              transactions.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Entropy Cryptography</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">Ideation, Design, Prototype, User research, Front End</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">Figma, Svelte, Yjs</span>
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
              {img(headerImage, "Auto workflow builder interface")}
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
                The goal was to create a crypto-native workflow automation tool
                that bridges on-chain and off-chain worlds. On-chain events should
                trigger off-chain workflows, and off-chain data should construct
                on-chain transactions.
              </p>
              <p className="text-sm leading-relaxed">
                The challenge: could we build a better workflow builder altogether,
                or would making it crypto-native be our only advantage? Use cases
                vary widely, and workflow builders already exist.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-2 pb-12 border-t border-[var(--color-border)]">
              <h3 className="text-sm font-bold">Process and Responsibilities</h3>
              <p className="text-sm leading-relaxed">
                I started exploring how workflows can be built, what are common
                structures for recurring crypto workflows, and where these 2 meet.
              </p>
              <p className="text-sm leading-relaxed">
                Once I landed on a set of requirements, I started designing the
                interface with a limited set of nodes and connectors to check if
                the structure works, the primary goal being to reduce cognitive load.
              </p>
              <p className="text-sm leading-relaxed">
                Once the initial user tests eliminated the usability issues I
                implemented a unique multiplayer experience using Yjs and WebRTC
                to enable real-time collaboration. I am currently running user
                tests on this prototype as the requirements for the production MVP
                form.
              </p>
            </div>
          </div>
        </div>

        {/* Section heading: Early Experiments */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-xl font-bold">Early Experiments</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: text | img | img | img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              The initial research happened on 2 tracks: I wanted to explore
              what's the best way to build workflow maps, and in parallel, find
              out what a good workflow is that we'd like to help.
            </p>
            <p className="text-sm leading-relaxed">
              I built multiple prototypes to explore different approaches. Should
              we direct the flow or let the user go freeform? Should we build
              atomic nodes or solve for particular use cases? Is a condition a
              connector or a node?
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(ifttentropyImage, "IFTTT-style exploration")}
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(blocksGridImage, "Block grid exploration")}
          </div>
          <div className="w-1/4 p-2 overflow-hidden">
            {img(nestedBlocksImage, "Nested blocks exploration")}
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: text | img | img | img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              I then forked n8n so I can experiment with a real workflow builder
              and find out what users should be aiming for.
            </p>
            <p className="text-sm leading-relaxed">
              What is a good workflow, what are the workflows we'd like to let
              users build and what are some we don't need to accommodate?
            </p>
            <p className="text-sm leading-relaxed">Do we need loops and recursion?</p>
            <p className="text-sm leading-relaxed">
              What are the most common crypto workflows people struggle with
              and how could we prototype them quickly?
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(generateWorkflowImage, "Generate workflow")}
          </div>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}>
            {img(cryptoListenersImage, "Crypto listeners")}
          </div>
          <div className="w-1/4 p-2 overflow-hidden">
            {img(mcpServerImage, "MCP server")}
          </div>
        </div>

        {/* Section heading: MVP Requirements */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-xl font-bold">MVP Requirements</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: text | wide img | img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              The requirements for the MVP are based on where the 2 research
              paths met: simplified use cases we need to solve first, and a
              simplified workflow builder we can build them with.
            </p>
            <p className="text-sm leading-relaxed">
              A limited set of blocks, each serving a distinct purpose reduce
              cognitive load. Good defaults educate users about ideal outcomes.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(simplerBlocksImage, "Simpler block design")}
          </div>
          <div className="w-1/4 p-2 overflow-hidden">
            {img(nodeTypesImage, "Node types")}
          </div>
        </div>

        {/* Section heading: Real-time Collaboration */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-xl font-bold">Real-time Collaboration</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* CTA row: empty | text | cta */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2 shrink-0`} />
          <div className={`${cell} w-1/2 shrink-0 p-2 pb-12`}>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed">
                Real-time collaboration sets our platform apart, allowing users to
                work together on projects in real-time. This feature is powered by
                Yjs, which enables real-time communication between users through
                WebRTC.
              </p>
              <p className="text-sm leading-relaxed">
                CRDTs allow to share updates without a central server which is
                good for privacy and traceability but also makes prototyping very
                quick.
              </p>
            </div>
          </div>
          <a
            href="https://auto-workflow-builder.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="cs-collab-intro__cta"
            aria-label="Try Auto workflow builder in a new tab"
          >
            <span className="cs-collab-intro__link">Try it out →</span>
          </a>
        </div>

        {/* Collab image row */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(realTimeCollabImage, "Real-time collaboration")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer + Section heading: Other work */}
        <div className={`${row} h-12`} />
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-xl font-bold">Other work</h2>
        </div>

        <div className="cs-other-section">
          {/* Prev / Next nav row */}
          <div className={row}>
            <Link to="/radicle-design-system" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link to="/radicle-desktop" className="cs-other-nav__cell cs-other-nav__cell--next">
              <span className="cs-other-nav__label">Next →</span>
            </Link>
          </div>

          {/* Cards row */}
          <div className={row}>
            <Link to="/radicle-design-system" className="cs-other-card cs-other-card--prev">
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">Radicle Design System</span>
                  <span className="text-sm">Consistency by design</span>
                </div>
                <div className="cs-other-card__image">
                  <img src={radicleDesignSystemHeaderImage} alt="Radicle Design System preview" />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold">Design System, UI, Front End</span>
                  <span className="text-sm text-[#5e5e5e]">2024</span>
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

export default AutoCaseStudy;
