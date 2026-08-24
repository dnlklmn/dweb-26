import React from "react";
import { Link } from "react-router-dom";
import CaseStudyLayout, { CaseStudyMeta } from "./CaseStudyLayout";
import coverImage from "../assets/one-family/cover.jpg";
import trackingImage from "../assets/one-family/tracking.png";
import scheduleImage from "../assets/one-family/schedule.png";
import multiDeviceImage from "../assets/one-family/multi-device.png";
import dataImage from "../assets/one-family/data.png";
import knowledgeBaseImage from "../assets/one-family/knowledge-base.png";
import solarWalletHeaderImage from "../assets/solar-wallet/cover.png";
import satoshiPayHeaderImage from "../assets/satoshi-pay/containers.jpg";

const meta: CaseStudyMeta = {
  title: "One Family",
  subtitle: "Baby tracking supercharged",
  tags: "UX, UI, Concept Design",
  year: "2020",
  company: "Personal Project",
  role: "Concept Design, UX Design, Prototyping",
  tech: "Figma",
};

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";
// Images fill their cell edge to edge: object-cover crops the overflow instead
// of letting it spill past the cell border (or leaving dead space inside it).
// The full uncropped image is always one click away in the lightbox.
const fillImg = "w-full h-full object-cover block";

const OneFamilyCaseStudy: React.FC = () => (
  <CaseStudyLayout meta={meta}>
    {(img) => (
      <>
        <div className={`${row} border-t h-12`} />

        {/* Intro, 1col | 2col | 1col */}
        <div className={row}>
          <div className={`${cell} w-1/4 relative overflow-hidden`}>
            {img(coverImage, "One Family cover", "absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover block")}
          </div>
          <div className={`${cell} w-1/2 min-h-48 flex flex-col justify-end p-2`}>
            <p className="text-xl font-normal leading-relaxed max-w-[75%]">
              A next-level baby tracker that uses collected data to build
              schedules, and offers affordable guidance when parents face
              difficulties managing their little ones' sleep.
            </p>
          </div>
          <div className="cs-intro-meta w-1/4 flex flex-col gap-6 p-2">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Year</span>
              <span className="text-sm">2020, Berlin</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Role</span>
              <span className="text-sm">Concept Design, UX Design, Prototyping</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">Tools</span>
              <span className="text-sm">Figma</span>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        {/* Section: Baby Tracking Supercharged */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Baby Tracking Supercharged</h2>
        </div>

        <div className={`${row} h-12`} />

        {/* Text | tracking image */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              One Family tracks feeds, naps, and routines, then uses that data
              to generate a personalised schedule, so parents spend less time
              guessing and more time resting.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2`}>
            {img(trackingImage, "Baby tracking interface", fillImg)}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Section: A Dynamic Schedule that Learns with You */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">
            A Dynamic Schedule that Learns with You
          </h2>
        </div>

        <div className={`${row} h-12`} />

        {/* Text | schedule image */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              Little humans' nights can be unpredictable and wear parents out.
            </p>
            <p className="text-sm leading-relaxed">
              Their sleep, however, is closely linked to your daytime schedule,
              their naps, feedings and routines.
            </p>
            <p className="text-sm font-bold leading-relaxed">
              Plan your day and save the nights.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2`}>
            {img(scheduleImage, "Dynamic schedule interface", fillImg)}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Section: Better Tracking Makes for Better Data */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">
            Better Tracking Makes for Better Data
          </h2>
        </div>

        <div className={`${row} h-12`} />

        {/* multi-device | data, side by side */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              Responsive design allows parents to track on any device at hand:
              phone in the nursery, tablet in the kitchen, laptop at the desk.
            </p>
            <p className="text-sm leading-relaxed">
              Better input means better insights. The more consistently parents
              track, the more accurate the schedule recommendations become.
            </p>
          </div>
          <div className={`${cell} w-1/4 p-2`}>
            {img(multiDeviceImage, "Tracking on multiple devices", fillImg)}
          </div>
          <div className={`${cell} w-1/4 p-2`}>
            {img(dataImage, "Data and insights view", fillImg)}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Section: Sleep Coach to the Rescue */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Sleep Coach to the Rescue</h2>
        </div>

        <div className={`${row} h-12`} />

        {/* Sleep coach text row */}
        <div className={row}>
          <div className={`${cell} w-1/2 flex items-start justify-start md:justify-end p-2`}>
            <h3 className="text-sm font-bold">Expert guidance, when you need it</h3>
          </div>
          <div className="w-1/2 flex flex-col gap-4 p-2 pb-12">
            <p className="text-sm leading-relaxed w-full md:w-3/4">
              Most upvoted topics will be discussed in group sessions with
              other parents of similar background, or schedule a 1:1 talk
              with an available expert.
            </p>
          </div>
        </div>

        {/* Section: Knowledge Base */}
        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold">Knowledge Base</h2>
        </div>

        <div className={`${row} h-12`} />

        {/* Knowledge base: text | image */}
        <div className={row}>
          <div className={`${cell} w-1/4 flex flex-col gap-4 p-2 pb-12`}>
            <p className="text-sm leading-relaxed">
              To explain basic concepts and offer popular solutions.
            </p>
            <p className="text-sm leading-relaxed">
              Made contextual for easy navigation, the right article surfaces
              at the right moment, not buried in a generic help centre.
            </p>
          </div>
          <div className={`${cell} w-1/2 p-2`}>
            {img(knowledgeBaseImage, "Contextual knowledge base", fillImg)}
          </div>
          <div className="w-1/4 p-2" />
        </div>

        {/* Spacer */}
        <div className={`${row} h-12`} />

        <div className={`${row} px-2 pt-12 pb-2`}>
          <h2 className="text-3xl font-bold whitespace-nowrap">Other work</h2>
        </div>

        <div className="cs-other-section">
          <div className={row}>
            <Link to="/solar-wallet" className="cs-other-nav__cell">
              <span className="cs-other-nav__label">← Prev</span>
            </Link>
            <div className={`${cell} w-1/4 p-2`} />
            <div className={`${cell} w-1/4 p-2`} />
            <Link
              to="/satoshi-pay"
              className="cs-other-nav__cell cs-other-nav__cell--next"
            >
              <span className="cs-other-nav__label">Next →</span>
            </Link>
          </div>

          <div className={row}>
            <Link
              to="/solar-wallet"
              className="cs-other-card cs-other-card--prev"
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
            <div className="cs-other-cards__spacer" />
            <div className="cs-other-cards__spacer" />
            <Link
              to="/satoshi-pay"
              className="cs-other-card cs-other-card--next"
            >
              <div className="cs-other-card__meta">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold">SatoshiPay Micropayments</span>
                  <span className="text-sm">Micropayments for the web</span>
                </div>
                <div className="cs-other-card__image">
                  <img src={satoshiPayHeaderImage} alt="SatoshiPay preview" />
                </div>
                <div className="flex justify-between items-end gap-2">
                  <span className="text-sm font-bold whitespace-nowrap">
                    UX, UI
                  </span>
                  <span className="text-sm">2019</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className={`${row} h-12`} />
      </>
    )}
  </CaseStudyLayout>
);

export default OneFamilyCaseStudy;
