import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lightbox from "./Lightbox";
import "./CaseStudyPage.css";
import "./ContactPage.css";
import headerImage from "../assets/radicle-design-system/header.jpeg";
import radicleDesktopHeaderImage from "../assets/radicle-desktop/header-2.png";
import autoHeaderImage from "../assets/auto/header-2.jpeg";
import ColorRange from "./ColorRange";
import FontStyles from "../assets/radicle-design-system/font-styles";
import SemanticIllustration from "../assets/radicle-design-system/SemanticIllustration";
import UIKit from "../assets/radicle-design-system/uikit.png";
import ComponentAPI from "../assets/radicle-design-system/component-api.png";
import TokensInFigma from "../assets/radicle-design-system/tokens-in-figma.png";
import CSSVariables from "../assets/radicle-design-system/css-variables.png";
import Icons from "../assets/radicle-design-system/icons.png";
import SeedIcon from "../assets/radicle-design-system/seed-icon.png";
import EntropyLogo from "../assets/about/EntropyLogo";
import RadicleLogo from "../assets/about/RadicleLogo";
import ParityLogo from "../assets/about/ParityLogo";
import quartersLogo from "../assets/about/quarters.png";
import SatoshiPayLogo from "../assets/about/SatoshiPayLogo";
import LinkuriousLogo from "../assets/about/LinkuriousLogo";
import DotLoopLogo from "../assets/about/DotLoopLogo";
import PreziLogo from "../assets/about/PreziLogo";
import goodListener from "../assets/good-listener/header.jpeg";
import auto from "../assets/auto/header-2.jpeg";
import radicleDesktop from "../assets/radicle-desktop/header-2.png";

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

const About: React.FC = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );
  const [showStickyTitles, setShowStickyTitles] = useState(false);
  const [animComplete, setAnimComplete] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setAnimComplete(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyTitles(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-48px 0px 0px 0px" },
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const img = (src: string, alt: string, className?: string) => (
    <img
      src={src}
      alt={alt}
      className={className ?? "w-full h-full object-cover block"}
      style={{ cursor: "zoom-in" }}
      onClick={() => setLightbox({ src, alt })}
    />
  );

  const heightMultiplier = 24;

  return (
    <>
      <div className={`cs-page${animComplete ? " anim-complete" : ""}`}>
        {/* Sticky back row */}
        <div className="cs-back-row">
          <Link
            to="/"
            className="cs-back-row__cell cs-back-row__cell--link"
            onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
          >
            <span className="cs-back-row__label" data-text="Daniel Kalman">
              <span className="name-full">Daniel Kalman</span><span className="name-short">Daniel</span>
            </span>
          </Link>

          <div
            className={`cs-back-row__cell cs-back-row__cell--aux${showStickyTitles ? " cs-back-row__cell--aux-active" : ""}`}
          >
            {showStickyTitles && (
              <button
                type="button"
                className="cs-back-row__aux-action"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="cs-back-row__aux-label">About</span>
              </button>
            )}
          </div>
          <div className="cs-back-row__cell cs-back-row__cell--aux" />
          <div className="cs-back-row__cell cs-back-row__cell--aux" />
        </div>
        <div ref={headerRef} className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div
            className={`${cell} w-1/2 min-h-48 flex flex-col gap-4 justify-end p-2`}
          >
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              Designer who codes. Strong design foundations matter more than
              ever when working with AI.
            </p>
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              I build prototypes to validate ideas fast and build design systems
              to keep things from falling apart. AI makes me move faster than I
              should.
            </p>
          </div>
          <div className="w-1/4 flex flex-col gap-2 justify-end p-2">
            <a
              href="https://www.linkedin.com/in/dnlklmn/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-nav-link text-sm leading-relaxed"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span>LinkedIn →</span>
            </a>
            <a
              href="https://github.com/dnlklmn"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-nav-link text-sm leading-relaxed"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span>GitHub →</span>
            </a>
            <a
              href="https://bsky.app/profile/dnlklmn.online"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-nav-link text-sm leading-relaxed"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span>Bluesky →</span>
            </a>
          </div>
        </div>

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Content row: text | img | img | img */}
        <div className={row} style={{ height: 9 * heightMultiplier }}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">Present</p>
            <p className="text-sm leading-relaxed">June 2025</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  Entropy - Blockchain workflow automation platform
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  I am responsible for everything design. Research and ideation,
                  building and testing prototypes and planning execution of the
                  front end.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                Berlin, Germany
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2 overflow-hidden`}>
            <EntropyLogo className="w-3/4 h-auto" />
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row} style={{ height: 25 * heightMultiplier }}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">June 2025</p>
            <p className="text-sm leading-relaxed">May 2023</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  Radicle - Sovereign code collaboration
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  I was responsible for the UX of the web and desktop apps, and
                  the design system. I also helped refine the front end,
                  implement the design system and work on the visual design of
                  the apps once the designs were done.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                Berlin, Germany
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2 overflow-hidden`}>
            <RadicleLogo className="w-3/4 h-auto" />
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row} style={{ height: 27 * heightMultiplier }}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">Jan 2024</p>
            <p className="text-sm leading-relaxed">Oct 2021</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  Parity Technologies - Products for Polkadot
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  As a product designer at Parity, I helped create the Polkadot
                  design system, and worked on decentralized apps like the
                  Delegation Dashboard and Multisig Commander.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                Berlin, Germany
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2 overflow-hidden`}>
            <ParityLogo className="w-3/4 h-auto" />
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row} style={{ height: 7 * heightMultiplier }}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">May 2021</p>
            <p className="text-sm leading-relaxed">November 2020</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  Quarters - Co-living management platform
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  I joined Quarters as a (failed) attempt to return to web2. I
                  quickly realized my heart lies with decenrtralization and
                  distributed systems.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                Berlin, Germany
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2 overflow-hidden`}>
            <img src={quartersLogo} alt="Quarters" className="w-3/4 h-auto" />
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row} style={{ height: 32 * heightMultiplier }}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">Nov 2020</p>
            <p className="text-sm leading-relaxed">Mar 2018</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  SatoshiPay - Cryptocurrency payments and content monetization
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  As the first product designer I designed and build prototypes
                  for monetizing content using cryptocurrency, and an app to
                  facilitate cross-border payments.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                Berlin, Germany
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2 overflow-hidden`}>
            <SatoshiPayLogo className="w-3/4 h-auto" />
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row} style={{ height: 6 * heightMultiplier }}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">July 2017</p>
            <p className="text-sm leading-relaxed">January 2017</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  Linkurious - Graph visualization and analysis
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  As a UX consultant I helped Linkurious improve the usability
                  of their graph visualization tool.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                Paris, France
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2 overflow-hidden`}>
            <LinkuriousLogo className="w-3/4 h-auto" />
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row} style={{ height: 30 * heightMultiplier }}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">July 2017</p>
            <p className="text-sm leading-relaxed">January 2015</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  TOTL - Automatic journaling app
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  Joining this experimental project helped refine my skills in
                  data visualization and rapid prototyping. I also learned a lot
                  about the importance of user research and testing.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                San Francisco, CA
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2 overflow-hidden`}></div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">Apr 2015</p>
            <p className="text-sm leading-relaxed">Jan 2015</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  Dotloop - Paperless real estate transaction management
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  I helped integrate a camera into the Dotloop app to make it
                  easier for real estate agents to document the acquisition of
                  properties. The company was acquired by Zillow shortly
                  thereafter.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                San Francisco, CA
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2`}>
            <DotLoopLogo className="w-3/4 h-auto" />
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={row} style={{ height: 41 * heightMultiplier }}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">Dec 2014</p>
            <p className="text-sm leading-relaxed">Jul 2011</p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold leading-relaxed w-3/4">
                  Prezi - Zooming presentation software
                </p>
                <p className="text-sm leading-relaxed w-3/4">
                  My first job with the time UX designer, I learned about the
                  importance of user research, A/B testing, and how rapid
                  prototyping helps with these efforts. I designed the
                  capability to reuse content from previous presentations.
                </p>
              </div>
              <p className="text-sm leading-relaxed opacity-50">
                Budapest, Hungary
              </p>
            </div>
          </div>
          <div className={`w-1/4 p-2 overflow-hidden`}>
            <PreziLogo className="w-3/4 h-auto" />
          </div>
        </div>

        <div className={`${row} h-12`} />

        <div className={`${row} h-48`}>
          <div
            className={`${cell} w-3/4 flex flex-col justify-end items-end p-2 shrink-0`}
          />
          <div className="w-1/4 flex flex-col p-2 gap-1">
            <div className="flex justify-between items-end whitespace-nowrap w-full flex-1 gap-1">
              <Link
                className="contact-nav-link w-full h-full text-sm font-medium leading-[1.21]"
                to="/"
                style={{ color: "inherit", textDecoration: "none" }}
                onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
              >
                <span>Work</span>
              </Link>
              <div className="h-full flex flex-col justify-center">
                <div className="w-px h-2 bg-(--color-border)" />
              </div>
              <div className="w-full h-full text-sm font-medium leading-[1.21] flex justify-end"></div>
            </div>
            <div className="flex justify-between whitespace-nowrap w-full flex-1 gap-1">
              <Link
                className="contact-nav-link w-full h-full text-sm font-medium leading-[1.21] flex items-end"
                to="/blog"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <span>Blog</span>
              </Link>
              <div className="h-full flex flex-col justify-center">
                <div className="w-px h-2 bg-(--color-border)" />
              </div>
              <Link
                className="contact-nav-link w-full h-full text-sm font-medium leading-[1.21] flex justify-end items-end"
                to="/contact"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Spacer */}
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

export default About;
