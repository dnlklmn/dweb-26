import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import oldUiImage from "../assets/satoshi-pay/old-ui.png";
import mainFlowImage from "../assets/satoshi-pay/main-flow.png";
import yellowFlowchartsImage from "../assets/satoshi-pay/yellow-flowcharts.png";
import fasterGif from "../assets/satoshi-pay/faster.gif";
import newWalletsImage from "../assets/satoshi-pay/new-wallets.png";
import containersImage from "../assets/satoshi-pay/containers.jpg";
import oneFamilyHeaderImage from "../assets/one-family/cover.jpg";

const meta: CaseStudyMeta = {
  title: "SatoshiPay Micropayments",
  subtitle: "Micropayments for the web",
  tags: "UX, UI",
  year: "2019",
  company: "SatoshiPay",
  role: "User Research, UX Design, Prototyping",
  tech: "Figma",
};

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const SatoshiPayCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img) => (
      <>
        <div className={`${row} border-t h-12`} />

        {/* Intro — 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 relative overflow-hidden`}>
            {img(containersImage, "SatoshiPay cover", "absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover block")}
          </div>
          <div className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}>
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              SatoshiPay is a payment provider operating on the blockchain. Our
              goal was to verify that people are ready to purchase online
              content directly from the content provider, instead of
              supporting them by watching ads. Along the way we figured out
              it is hard to convince people to pay for digital content,
              however little you ask for. Let alone having to do the whole
              thing on the blockchain.
            </p>
          </div>
          <div className="cs-intro-meta w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Company</span>
              <span className="text-sm">SatoshiPay</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">User Research, UX Design, Prototyping</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tech</span>
              <span className="text-sm">Figma</span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Problem Statement row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Problem Statement</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              The micropayment service lacked a clean and user friendly
              interface. In preparation for our first big customers we had
              to revamp the look to provide a smooth payment experience.
            </p>
          </div>
        </div>

        {/* Old UI image */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            <div className="overflow-hidden">
              {img(oldUiImage, "Original SatoshiPay UI")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Goals row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Goals</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              1. Make purchasing a product as easy as possible
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              2. Build trust and secure funds
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              3. Make device independent
            </p>
          </div>
        </div>

        {/* Challenges row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Challenges</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              1. We exist within publishers' websites
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              2. A new and unfamiliar way of spending money
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              3. Cumbersome security process
            </p>
          </div>
        </div>

        {/* Section heading: Process */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Process</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Process images */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/4 p-2`}>
            <div className="overflow-hidden">
              {img(mainFlowImage, "Customer interviews and market research")}
            </div>
          </div>
          <div className={`${cell} w-1/4 p-2`}>
            <div className="overflow-hidden">
              {img(yellowFlowchartsImage, "Information architecture and customer journey")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Core consumer needs */}
        <div className={row}>
          <div className={`${cell} w-1/3 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">"I want it now"</p>
            <p className="text-sm leading-relaxed">
              Consumers won't spend a minute more than necessary. Friction
              kills the purchase before it happens.
            </p>
          </div>
          <div className={`${cell} w-1/3 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">"I want control"</p>
            <p className="text-sm leading-relaxed">
              Users want their money safe and expect the familiar conventions
              of financial services.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-3 p-2 pb-12">
            <p className="text-sm font-bold">"I want to know what I get"</p>
            <p className="text-sm leading-relaxed">
              Users want to understand the terms without spending time
              decoding fine print.
            </p>
          </div>
        </div>

        {/* Section heading: Solutions */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Solutions</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Streamlined purchasing */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0 overflow-y-auto`}>
            <p className="text-sm font-bold">Streamlined purchasing process</p>
            <p className="text-sm leading-relaxed">
              Allowing consumers to access their content first, and deal
              with everything else later. Multiple purchase options include
              a €1.00 trial version too.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(fasterGif, "Streamlined purchasing flow")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Account creation */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0 overflow-y-auto`}>
            <p className="text-sm font-bold">Account creation</p>
            <p className="text-sm leading-relaxed">
              Unlike most blockchain applications we decided to provide an
              email and password based account in order to prevent the loss
              of access to funds.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(newWalletsImage, "New wallet account creation")}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Adaptable containers */}
        <div className={`${row} h-96`}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 shrink-0 overflow-y-auto`}>
            <p className="text-sm font-bold">Adaptable containers</p>
            <p className="text-sm leading-relaxed">
              The redesigned containers accommodate the most often used
              content types: article paywall and video. These dynamic
              containers follow simple rules to stay consistent, but provide
              enough flexibility to blend in to the given website.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2 overflow-hidden`}>
            {img(containersImage, "Adaptable payment containers")}
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
            <Link to="/one-family" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <div className="cs-other-nav__cell cs-other-nav__cell--next opacity-0 pointer-events-none">
              <span className="cs-other-nav__label">Next →</span>
            </div>
          </div>

          {/* Cards row */}
          <div className={row}>
            <Link
              to="/one-family"
              className="cs-other-card cs-other-card--prev"
            >
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">One Family</span>
                  <span className="text-sm">Connecting families across borders</span>
                </div>
                <div className="cs-other-card__image">
                  <img src={oneFamilyHeaderImage} alt="One Family preview" />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold whitespace-nowrap">
                    Concept Design, UX, Prototyping
                  </span>
                  <span className="text-sm">2020</span>
                </div>
              </div>
            </Link>
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-card cs-other-card--next opacity-0 pointer-events-none">
              <div className="cs-other-card__meta" />
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className={`${row} h-12`} />
      </>
    )}
  </CaseStudyLayout>
);

export default SatoshiPayCaseStudy;
