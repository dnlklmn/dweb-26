import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import headerImage from "../assets/radicle-design-system/header.jpeg";
import radicleDesktopHeaderImage from "../assets/radicle-desktop/header.png";
import autoHeaderImage from "../assets/auto/header.png";
import ColorRange from "./ColorRange";
import FontStyles from "../assets/radicle-design-system/font-styles";
import SemanticIllustration from "../assets/radicle-design-system/SemanticIllustration";
import UIKit from "../assets/radicle-design-system/uikit.png";
import ComponentAPI from "../assets/radicle-design-system/component-api.png";
import TokensInFigma from "../assets/radicle-design-system/tokens-in-figma.png";
import CSSVariables from "../assets/radicle-design-system/css-variables.png";
import Icons from "../assets/radicle-design-system/icons.png";
import SeedIcon from "../assets/radicle-design-system/seed-icon.png";

const meta: CaseStudyMeta = {
  title: "Radicle Design System",
  subtitle: "Consistency By Design",
  tags: "Design System, UI, Front End",
  year: "2024",
  demoLink:
    "https://app.radicle.xyz/nodes/rosa.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury/",
  demoLabel: "Radicle design tokens →",
};

export const pinks = [
  { color: "#FFEEFF", name: "pink 50" },
  { color: "#FFE5FF", name: "pink 100" },
  { color: "#FF8FFF", name: "pink 200" },
  { color: "#FF70FF", name: "pink 300" },
  { color: "#FF4DFF", name: "pink 400" },
  { color: "#FF1AFF", name: "pink 500" },
  { color: "#E500E5", name: "pink 600" },
  { color: "#AD00AD", name: "pink 700" },
  { color: "#6B006B", name: "pink 800" },
  { color: "#3D003D", name: "pink 900" },
  { color: "#1A001A", name: "pink 950" },
];

export const blues = [
  { color: "#FAFAFF", name: "blue 50" },
  { color: "#EBEBFF", name: "blue 100" },
  { color: "#9497FF", name: "blue 200" },
  { color: "#7070FF", name: "blue 300" },
  { color: "#5555FF", name: "blue 400" },
  { color: "#4545EF", name: "blue 500" },
  { color: "#3B3CBB", name: "blue 600" },
  { color: "#303287", name: "blue 700" },
  { color: "#232563", name: "blue 800" },
  { color: "#16173D", name: "blue 900" },
  { color: "#070814", name: "blue 950" },
];

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
          <div
            className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}
          >
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              I joined Radicle to improve consistency and create a unified
              design system. Design consistency is crucial in any project, but
              it can be particularly challenging in open source projects due to
              the diverse and distributed nature of contributors.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">Radicle</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">
                Design Audit, Design System, Design Tokens
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">
                Figma, Tokens Studio, Style Dictionary
              </span>
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
            <div className="flex flex-col gap-4 p-2 pb-12 w-3/4">
              <h3 className="text-sm font-bold">Challenge and Goals</h3>
              <p className="text-sm leading-relaxed">
                Radicle Explorer is an open-source web application that anyone
                can deploy on their own. To ensure its success and usability, it
                is crucial that the design is consistent, easy to extend, and
                low maintenance.
              </p>
              <p className="text-sm leading-relaxed">
                Contributors should be able to navigate the application
                effortlessly, match colors and text styles with specific use
                cases.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-2 pb-12 border-t border-[var(--color-border)] ">
              <h3 className="text-sm font-bold">
                Process and Responsibilities
              </h3>
              <p className="text-sm leading-relaxed w-3/4">
                After carefully auditing the current UI and its patterns, I
                developed a color system, a typographic scale, and components in
                Figma.
              </p>
              <p className="text-sm leading-relaxed w-3/4">
                Once all stakeholders agreed I created the pipeline to export
                and transform tokens into stylesheets and implemented these in
                the Svelte front end.
              </p>
            </div>
          </div>
        </div>

        {/* Section heading: Foundations */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Stable Base Scales</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: text | wide img | empty */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              Selecting a harmonious set of base colors limits the palette to a
              manageable number while providing enough flexibility to address
              new and unforeseen use cases.
            </p>
            <p className="text-sm leading-relaxed">
              Contributors can be confident that any two colors will work well
              together. Neighboring colors can highlight accents and suggest
              interactions, while colors further apart indicate hierarchy and
              relationships.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="h-full flex flex-col gap-4 justify-center text-center">
              <ColorRange range={blues} />
              <ColorRange range={pinks} />
            </div>
          </div>
          <div className="flex flex-col justify-center w-1/4 p-2">
            <FontStyles />
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Semantic Definitions</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: text | img | img | img */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2 overflow-hidden`}></div>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0`}>
            <p className="text-sm leading-relaxed">
              Abstracting design decisions into meaningful, reusable tokens
              improves collaboration between designers and developers by
              providing a common language. This streamlines the workflow and
              makes design systems more efficient.
            </p>
            <p className="text-sm leading-relaxed">
              Semantic tokens should address known use cases, while global
              tokens are available for new scenarios. With a shared
              understanding of the naming conventions for semantic tokens,
              developers can easily select the appropriate styles without
              needing further consultation with designers.
            </p>
          </div>
          <div className="w-1/2 p-6 py-12 overflow-hidden flex flex-col justify-end">
            <SemanticIllustration />
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Components</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* CTA row: empty | text | cta */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2 shrink-0`} />
          <div className={`${cell} w-1/2 shrink-0 p-2 pb-12`}>
            <div className="flex flex-col gap-3 w-3/4">
              <p className="text-sm leading-relaxed">
                The UI kit consists only of the components currently used in the
                app. No unused button variants or typography styles allowed.
              </p>
              <p className="text-sm leading-relaxed">
                The behavior of components in Figma matches those in production.
                It is often quicker to experiment with Figma’s properties to
                design the API than having to do it all in code.
              </p>
            </div>
          </div>
        </div>

        {/* Image row */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(UIKit, "UI Kit in Figma")}
          </div>
          <div className="w-1/4 p-2">
            {img(ComponentAPI, "Component props")}
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Seamless Implementation</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* CTA row: empty | text | cta */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2 shrink-0`} />
          <div className={`${cell} w-1/2 shrink-0 p-2 pb-12`}>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed w-3/4">
                Colors and font styles are managed in Figma, where they are
                incorporated into the UI kit and optimized for both dark and
                light modes.
              </p>
              <p className="text-sm leading-relaxed w-3/4">
                These tokenized design elements are then exported and converted
                into specific style sheets, which can be utilized in production
                components. The tokens are stored in a shared repo on Radicle
                that serves as a single source of truth.
              </p>
            </div>
          </div>
        </div>

        {/* Image row */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`}>
            {img(CSSVariables, "CSS Variables and how to use them")}
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(TokensInFigma, "Design Tokens in Figma")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Delightful Details</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* CTA row: empty | text | cta */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2 shrink-0`} />
          <div className={`${cell} w-1/2 shrink-0 p-2 pb-12`}>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed w-3/4">
                At Radicle we're building developer tools. It's crucial to
                prioritize readability and a clear, easy-to-understand hierarchy
                while keeping decorative elements to a minimum.
              </p>
              <p className="text-sm leading-relaxed w-3/4">
                However, a design system should also have character. Radicle's
                style pays homage to the barefoot developers, drawing
                inspiration from the aesthetics of 90s programming games and
                interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Image row */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 p-2`}></div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(Icons, "Design Tokens in Figma")}
          </div>
          <div className="w-1/4 p-2">
            {img(SeedIcon, "Design Tokens in Figma")}
          </div>
        </div>

        {/* Spacer + Section heading: Other work */}
        <div className={`${row} h-12`} />
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Other work</h2>
        </div>

        <div className="cs-other-section">
          <div className={row}>
            <Link to="/auto" className="cs-other-nav__cell">
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
            <Link to="/auto" className="cs-other-card cs-other-card--prev">
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

export default RadicleDesignSystemCaseStudy;
