import React from "react";

const MONO = 'ui-monospace, SFMono-Regular, Menlo, "Liberation Mono", monospace';

const BAR = "rgba(255,255,255,0.14)";
const MUTED = "rgba(255,255,255,0.55)";
const MASK = "var(--color-bg)";
const TEAL = "#00E5C7";
const TEAL_INK = "#00352E";
const ACCENT = "var(--color-accent)";
const ACCENT_INK = "#3d0018";

/**
 * The build loop: goals in, a seed out, dataset and scorers generated from it,
 * benchmarked, and the prompt rewritten until it passes.
 *
 * Two deliberate choices about the arrows:
 * - Improve returns to the *prompt*, never to the seed or the scorers. Moving
 *   what grades the work is the failure this whole method exists to prevent.
 * - Backfill runs the other way: what the model turns out to do feeds back into
 *   the goals and stories.
 */
const BuildLoop: React.FC = () => (
  <svg
    viewBox="0 0 1090 340"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "auto", display: "block" }}
    role="img"
    aria-label="The build loop: business goals and user stories into the agent, out to a seed, then dataset and scorers, then benchmark, with improve returning to the prompt"
    fontFamily={MONO}
  >
    <defs>
      <marker
        id="bldl-arrow"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFFFFF" />
      </marker>
    </defs>

    <g transform="translate(70, 5)">

    {/* Inputs */}
    <text x="0" y="131" fill="#FFFFFF" fontSize="19">
      Business Goals
    </text>
    <text x="0" y="159" fill="#FFFFFF" fontSize="19">
      User Stories
    </text>
    <path
      d="M 151 136 H 213"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#bldl-arrow)"
    />

    {/* The feature: model, prompt, tools */}
    <rect x="205" y="51" width="200" height="41" fill={BAR} />
    <text x="305" y="78" fill="#FFFFFF" textAnchor="middle" fontSize="19">
      Model
    </text>

    <rect
      x="207"
      y="102"
      width="196"
      height="126"
      fill="none"
      stroke={MUTED}
      strokeWidth="2"
    />
    <rect x="221" y="116" width="168" height="41" fill={TEAL} />
    <text x="305" y="143" fill={TEAL_INK} textAnchor="middle" fontSize="19">
      Prompt
    </text>
    <text x="305" y="199" fill={MUTED} textAnchor="middle" fontSize="19">
      Agent
    </text>

    <rect x="205" y="238" width="200" height="41" fill={BAR} />
    <text x="305" y="265" fill="#FFFFFF" textAnchor="middle" fontSize="19">
      Tools
    </text>

    {/* Out to the seed */}
    <path
      d="M 403 136 H 467"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#bldl-arrow)"
    />
    <rect x="483" y="116" width="76" height="41" fill={ACCENT} />
    <text x="521" y="143" fill={ACCENT_INK} textAnchor="middle" fontSize="19">
      Seed
    </text>

    <path
      d="M 559 136 H 642"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#bldl-arrow)"
    />
    <text x="662" y="131" fill="#FFFFFF" fontSize="19">
      Dataset
    </text>
    <text x="662" y="159" fill="#FFFFFF" fontSize="19">
      Scorers
    </text>

    <path
      d="M 745 136 H 812"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#bldl-arrow)"
    />
    <text x="828" y="143" fill="#FFFFFF" fontSize="19">
      Benchmark
    </text>

    {/* Backfill: what the model does feeds back into the goals */}
    <path
      d="M 315 79 V 14 H 48 V 79"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#bldl-arrow)"
    />
    <rect x="130" y="0" width="85" height="29" fill={MASK} />
    <text x="172" y="20" fill="#FFFFFF" textAnchor="middle" fontSize="19">
      Backfill
    </text>

    {/* Improve: back to the prompt, never to the seed or the scorers */}
    <path
      d="M 870 158 V 300 H 440 V 152 H 395"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#bldl-arrow)"
    />
    <rect x="602" y="286" width="85" height="29" fill={MASK} />
    <text x="644" y="306" fill="#FFFFFF" textAnchor="middle" fontSize="19">
      Improve
    </text>
    </g>
  </svg>
);

export default BuildLoop;
