import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import coverImage from "../assets/solar-wallet/cover.png";
import desktopImage from "../assets/solar-wallet/desktop.png";
import processImage from "../assets/solar-wallet/process.png";
import accountCreationGif from "../assets/solar-wallet/account-creation.gif";
import multiSigGif from "../assets/solar-wallet/multi-sig.gif";
import sendGif from "../assets/solar-wallet/send.gif";
import polkadotDsHeaderImage from "../assets/polkadot-design-system/cover.png";
import oneFamilyHeaderImage from "../assets/one-family/cover.jpg";

const meta: CaseStudyMeta = {
  title: "Solar Wallet",
  subtitle: "A Stellar wallet built for simplicity",
  tags: "UX, UI, Prototyping",
  year: "2019",
  demoLink: "http://solarwallet.io/",
  demoLabel: "Live →",
  company: "SatoshiPay",
  role: "User Research, UX Design, Prototyping",
  tech: "Figma",
};

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const SolarWalletCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img) => (
      <>
        <div className={`${row} border-t h-12`} />

        {/* Intro, 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 relative overflow-hidden`}>
            {img(coverImage, "Solar Wallet cover", "absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover block")}
          </div>
          <div className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}>
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              A Stellar wallet designed for simplicity, focused on helping
              businesses and individuals store, send, and secure digital assets
              without the usual friction of crypto UX.
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

        {/* Hero image */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2 flex justify-center`}>
            <div className="w-1/2">
              {img(desktopImage, "Solar Wallet desktop interface")}
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
              Stellar wallets were difficult to use, almost impossible for
              beginners. The goal was to design a wallet focused on simplicity
              for both individuals and businesses storing and withdrawing digital
              assets.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Three core goals shaped the work: finding a quick way to get
              started, making sending and withdrawing easy, and showcasing
              multi-signature authentication for enterprise users.
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
              Research spanned surveys, user journey mapping, card sorting, and
              Twitter polls to understand how people actually used wallets
              and where they got stuck.
            </p>
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Three pain points drove the design: withdrawals were difficult due
              to KYC complexity, onboarding was fragmented as users wanted to
              stay in-app, and there was no enterprise-grade multi-signature
              security. Each became a focused design problem.
            </p>
          </div>
        </div>

        {/* Section heading: Process */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Process</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Process image row */}
        <div className={row}>
          <div className={`${cell} w-1/4 p-2`} />
          <div className={`${cell} w-1/2 p-2`}>
            <div className="overflow-hidden">
              {img(processImage, "Research and design process overview")}
            </div>
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Pain points row */}
        <div className={row}>
          <div className={`${cell} w-1/3 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">Difficult to withdraw</p>
            <p className="text-sm leading-relaxed">
              KYC and compliance processes made withdrawals long and confusing
              for most users.
            </p>
          </div>
          <div className={`${cell} w-1/3 flex flex-col gap-3 p-2 pb-12`}>
            <p className="text-sm font-bold">Complicated start</p>
            <p className="text-sm leading-relaxed">
              Users wanted to stay in-app during onboarding rather than being
              redirected through multiple external steps.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-3 p-2 pb-12">
            <p className="text-sm font-bold">Lacking enterprise-grade security</p>
            <p className="text-sm leading-relaxed">
              Business users needed multi-signature support, a feature missing
              from every competing wallet at the time.
            </p>
          </div>
        </div>

        {/* Section heading: Easy Setup */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Easy Setup</h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Easy Setup: text | wide gif */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              Quickly set up new accounts, or join existing multi-signature
              accounts.
            </p>
            <p className="text-sm leading-relaxed">
              The entire onboarding flow was designed to stay within the app,
              eliminating the drop-off that happened when users were sent
              elsewhere to complete setup.
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2`}>
            {img(accountCreationGif, "Account creation flow")}
          </div>
          <div className="w-1/2 p-2" />
        </div>

        {/* Section heading: Next Level Security */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Next Level Security
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Multi-sig: text | wide gif */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              Cutting-edge multi-signature support across devices.
            </p>
            <p className="text-sm leading-relaxed">
              Businesses needed a way to require multiple approvals before a
              transaction could go through. Solar was one of the first Stellar
              wallets to offer this, designed so even non-technical users
              could understand it.
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2`}>
            {img(multiSigGif, "Multi-signature authentication flow")}
          </div>
          <div className="w-1/2 p-2" />
        </div>

        {/* Section heading: Send and Withdraw */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">
            Send and Withdraw
          </h2>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Send: text | wide gif */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              Research showed that users either withdraw their funds or send
              them to other wallets, but rarely both. Unifying send and
              withdraw was a big step in showing how simple it can be.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div>
                <p className="text-sm font-bold mb-1">Extra features</p>
                <ul className="text-sm leading-relaxed list-none space-y-1">
                  <li>+ Realtime notifications on remote transactions</li>
                  <li>+ Fiat-backed assets like EURT or USD</li>
                  <li>+ Non-custodial</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${cell} w-1/4 p-2`}>
            {img(sendGif, "Send and withdraw flow")}
          </div>
          <div className="w-1/2 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Other work</h2>
        </div>

        <div className="cs-other-section">
          {/* Prev / Next nav row */}
          <div className={row}>
            <Link to="/polkadot-design-system" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link
              to="/one-family"
              className="cs-other-nav__cell cs-other-nav__cell--next"
            >
              <span className="cs-other-nav__label">Next →</span>
            </Link>
          </div>

          {/* Cards row */}
          <div className={row}>
            <Link
              to="/polkadot-design-system"
              className="cs-other-card cs-other-card--prev"
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
                    Design System, UI, Front End
                  </span>
                  <span className="text-sm">2023</span>
                </div>
              </div>
            </Link>
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-cards__spacer" />
            <Link
              to="/one-family"
              className="cs-other-card cs-other-card--next"
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
          </div>
        </div>

        {/* Bottom spacer */}
        <div className={`${row} h-12`} />
      </>
    )}
  </CaseStudyLayout>
);

export default SolarWalletCaseStudy;
