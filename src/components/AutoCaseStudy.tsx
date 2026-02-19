import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTransition } from "../context/TransitionContext";
import Lightbox from "./Lightbox";
import "./CaseStudyPage.css";
import "./CaseStudyTransition.css";

const images = {
  header: require("../assets/auto/header.png"),
  blocksGrid: require("../assets/auto/blocks-grid.png"),
  conditions: require("../assets/auto/conditions.png"),
  cryptoListeners: require("../assets/auto/crypto-listeners.png"),
  generateWorkflow: require("../assets/auto/generate-workflow.png"),
  gridAutomator: require("../assets/auto/grid-automator.png"),
  ifttentropy: require("../assets/auto/ifttentropy.png"),
  image8: require("../assets/auto/image 8.png"),
  mcpServer: require("../assets/auto/mcp-server.png"),
  nestedBlocks: require("../assets/auto/nested-blocks.png"),
  offTheChain: require("../assets/auto/off-the-chain.png"),
  realTimeCollab: require("../assets/auto/real-time-collab.png"),
  simplerBlocks: require("../assets/auto/simpler-blocks.png"),
  nodeTypes: require("../assets/auto/node-types.png"),
};

const AutoCaseStudy: React.FC = () => {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { transitionData, clearTransition } = useTransition();
  const overlayRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!transitionData) {
      // No transition data - show immediately
      setIsAnimating(false);
      setShowContent(true);
      return;
    }

    // Set CSS custom properties for animation start positions
    const overlay = overlayRef.current;
    if (overlay) {
      const { infoTop, meta, tags } = transitionData;
      overlay.style.setProperty("--start-top", `${infoTop.top}px`);
      overlay.style.setProperty("--start-left", `${infoTop.left}px`);
      overlay.style.setProperty("--start-width", `${infoTop.width}px`);
      overlay.style.setProperty("--start-height", `${infoTop.height}px`);
      overlay.style.setProperty("--meta-top", `${meta.top}px`);
      overlay.style.setProperty("--meta-left", `${meta.left}px`);
      overlay.style.setProperty("--meta-width", `${meta.width}px`);
      overlay.style.setProperty("--meta-height", `${meta.height}px`);
      overlay.style.setProperty("--tags-top", `${tags.top}px`);
      overlay.style.setProperty("--tags-left", `${tags.left}px`);
      overlay.style.setProperty("--tags-width", `${tags.width}px`);
      overlay.style.setProperty("--tags-height", `${tags.height}px`);
    }

    // Start animation after a frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(false);
      });
    });

    // Show content after header animation completes
    const timer = setTimeout(() => {
      setShowContent(true);
      clearTransition();
    }, 600);

    return () => clearTimeout(timer);
  }, [transitionData, clearTransition]);

  const img = (src: string, alt: string, className?: string) => (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ cursor: "zoom-in" }}
      onClick={() => setLightbox({ src, alt })}
    />
  );

  return (
    <div className="cs-page">
      {/* Header — 4 cells in a row */}
      <div className="cs-header">
        <div className="cs-header__cell">
          <Link
            to="/"
            className="cs-header__title"
            onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
          >
            Auto
          </Link>
          <span className="cs-header__subtitle">
            Collaborative workflow builder for blockchain automations
          </span>
        </div>
        <div className="cs-header__cell cs-header__cell--tags">
          <span className="cs-header__tags-text">UX, UI, Front End</span>
          <span className="cs-header__year">2025</span>
        </div>
        <div className="cs-header__cell cs-header__cell--spacer" />
        <div className="cs-header__cell cs-header__cell--demo">
          <a href="#demo" className="cs-header__link">
            Demo →
          </a>
        </div>
      </div>

      {/* Spacer */}
      <div className="cs-spacer cs-spacer--border-bottom cs-spacer--border-top" />

      {/* Intro — 3 columns */}
      <div className="cs-intro">
        <div className="cs-intro__left" />
        <div className="cs-intro__description">
          <p className="cs-intro__text">
            A visual workflow builder with real-time collaboration that bridges
            on-chain and off-chain automation. Use blockchain triggers to kick
            off workflows, or aggregate off-chain data to construct on-chain
            transactions.
          </p>
        </div>
        <div className="cs-intro__meta">
          <div className="cs-intro__meta-group">
            <span className="cs-intro__meta-label">Company</span>
            <span className="cs-intro__meta-value">Entropy Cryptography</span>
          </div>
          <div className="cs-intro__meta-group">
            <span className="cs-intro__meta-label">Role</span>
            <span className="cs-intro__meta-value">
              Ideation, Design, Prototype, User research, Front End
            </span>
          </div>
          <div className="cs-intro__meta-group">
            <span className="cs-intro__meta-label">Tech</span>
            <span className="cs-intro__meta-value">Figma, Svelte, Yjs</span>
          </div>
        </div>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom cs-spacer--border-top" />

      {/* Hero image — 3 columns */}
      <div className="cs-hero">
        <div className="cs-hero__left" />
        <div className="cs-hero__center">
          <div className="cs-hero__image-wrapper">
            {img(images.header, "Auto workflow builder interface")}
          </div>
        </div>
        <div className="cs-hero__right" />
      </div>

      <div className="cs-spacer cs-spacer--border-top" />

      {/* Challenge and Goals */}
      <div className="cs-text-section">
        <div className="cs-text-section__left" />
        <div className="cs-text-section__right">
          <div className="cs-text-block">
            <h3>Challenge and Goals</h3>
            <p>
              The goal was to create a crypto-native workflow automation tool
              that bridges on-chain and off-chain worlds. On-chain events should
              trigger off-chain workflows, and off-chain data should construct
              on-chain transactions.
            </p>
            <p>
              The challenge: could we build a better workflow builder
              altogether, or would making it crypto-native be our only
              advantage? Use cases vary widely, and workflow builders already
              exist.
            </p>
          </div>
          <div className="cs-text-block cs-spacer--border-top">
            <h3>Process and Responsibilities</h3>
            <p>
              I started exploring how workflows can be built, what are common
              structures for recurring crypto workflows, and where these 2 meet.
            </p>
            <p>
              Once I landed on a set of requirements, I started designing the
              interface with a limited set of nodes and connectors to check if
              the structure meets works, the primary goal being to reduce
              cognitive load.
            </p>
            <p>
              Once the initial user tests eliminated the usability issues I
              implemented a unique multiplayer experience using Yjs and WebRTC
              to enable real-time collaboration. I am currently running user
              tests on this prototype as the requirements for the production MVP
              form.
            </p>
          </div>
        </div>
      </div>

      {/* Early Experiments */}
      <div className="cs-section-heading">
        <h2>Early Experiments</h2>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom" />

      {/* First experiment row: text + 3 images */}
      <div className="cs-content-row">
        <div className="cs-content-row__text">
          <p>
            The initial research happened on 2 tracks: I wanted to explore
            what's the best way to build workflow maps, and in parallel, find
            out what a good workflow is that we'd like to help.
          </p>
          <p>
            I built multiple prototypes to explore different approaches to
            building workflow maps. Should we direct the flow or let the user go
            freeform? Should we build atomic nodes users can build anything from
            simple ones to solve for particular use cases? Is a condition a
            connector or a node?
          </p>
        </div>
        <div className="cs-content-row__images cs-content-row__images--1 cs-spacer--border-right">
          {img(images.ifttentropy, "IFTTT-style exploration")}
        </div>{" "}
        <div className="cs-content-row__images cs-content-row__images--1 cs-spacer--border-right">
          {img(images.blocksGrid, "Block grid exploration")}
        </div>{" "}
        <div className="cs-content-row__images cs-content-row__images--1">
          {img(images.nestedBlocks, "Nested blocks exploration")}
        </div>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom" />

      {/* Second experiment row: text + 2 images */}
      <div className="cs-content-row">
        <div className="cs-content-row__text">
          <p>
            I then forked n8n so I can experiment with a real workflow builder
            and find out what users should be aiming for.
          </p>
          <p>
            What is a good workflow, what are the workflows we'd like to let
            users build and what are some we don't need to accommodate?
          </p>
          <p>Do we need loops and recursion?</p>
          <p>
            What are the most commonond crypto workflows people struggle with
            and how could we prototype them quickly?
          </p>
        </div>
        <div className="cs-content-row__images cs-content-row__images--1 cs-spacer--border-right">
          {img(images.generateWorkflow, "Generate workflow")}
        </div>{" "}
        <div className="cs-content-row__images cs-content-row__images--1 cs-spacer--border-right">
          {img(images.cryptoListeners, "Crypto listeners")}
        </div>{" "}
        <div className="cs-content-row__images cs-content-row__images--1">
          {img(images.mcpServer, "MCP server")}
        </div>
      </div>

      {/* MVP Requirements */}
      <div className="cs-section-heading">
        <h2>MVP Requirements</h2>
      </div>
      <div className="cs-spacer cs-spacer--border-bottom" />

      {/* MVP content row: text + 2 images */}
      <div className="cs-content-row">
        <div className="cs-content-row__text">
          <p>
            The requirements for the MVP are based on where the 2 research paths
            met: simplified use cases we need to solve first, and a simplified
            workflow builder we can build them with.
          </p>
          <p>
            A limited set of blocks, each serving a distinct purpose reduce
            cognitive load. Good defaults educate users about ideal outcomes.
          </p>
        </div>
        <div className="cs-content-row__images cs-content-row__images--1 cs-content-row__images--wide cs-spacer--border-right">
          {img(images.simplerBlocks, "Simpler block design")}
        </div>
        <div className="cs-content-row__images cs-content-row__images--1">
          {img(images.nodeTypes, "Node types")}
        </div>
      </div>

      {/* Real-time Collaboration */}
      <div className="cs-section-heading">
        <h2>Real-time Collaboration</h2>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom" />

      {/* Collab intro with Try it out link */}
      <div className="cs-collab-intro">
        <div className="cs-collab-intro__spacer cs-spacer--border-right" />
        <div className="cs-collab-intro__content">
          <div className="cs-collab-intro__text">
            <p>
              Real-time collaboration sets our platform apart, allowing users to
              work together on projects in real-time. This feature is powered by
              Yjs, which enables real-time communication between users through
              WebRTC.
            </p>
            <p>
              CRDTs allow to share updates without a central server which is
              good for privacy and traceability but also makes prototyping very
              quick.
            </p>
          </div>
        </div>
        <div className="cs-collab-intro__spacer cs-spacer--border-left">
          <a href="#demo" className="cs-collab-intro__link">
            Try it out →
          </a>
        </div>
      </div>

      {/* Collab images row */}
      <div className="cs-content-row">
        <div className="cs-content-row__text"></div>
        <div className="cs-content-row__images cs-content-row__images--1 cs-content-row__images--wide cs-spacer--border-right">
          {img(images.realTimeCollab, "Real-time collaboration")}
        </div>
        <div className="cs-collab-intro__spacer"></div>
      </div>

      <div className="cs-spacer cs-spacer--border-bottom" />
      <div className="cs-section-heading">
        <h2>Other work</h2>
      </div>
      <div className="cs-spacer cs-spacer--border-bottom" />
      <div className="cs-content-row">
        <div className="cs-content-row__images cs-content-row__images--1 cs-spacer--border-right">
          {img(images.ifttentropy, "IFTTT-style exploration")}
        </div>{" "}
        <div className="cs-content-row__text"></div>
        <div className="cs-content-row__text"></div>
        <div className="cs-content-row__images cs-content-row__images--1">
          {img(images.nestedBlocks, "Nested blocks exploration")}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

export default AutoCaseStudy;
