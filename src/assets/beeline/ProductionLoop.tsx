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
 * The same loop after launch. Real user input, real output, sampled and scored
 * by the same scorers that gated the release — and improve returns to the
 * prompt, exactly as it does at build time.
 */
const ProductionLoop: React.FC = () => (
  <svg
    viewBox="0 0 1090 340"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "auto", display: "block" }}
    role="img"
    aria-label="The production loop: user input into the agent, production output, sampling, scorers, alerts, with improve returning to the prompt"
    fontFamily={MONO}
  >
    <defs>
      <marker
        id="prdl-arrow"
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

    <g transform="translate(0, 20)">

    <text x="0" y="90" fill="#FFFFFF" fontSize="19">
      user input
    </text>
    <path
      d="M 112 83 H 167"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#prdl-arrow)"
    />

    {/* The same feature, now live */}
    <rect x="157" y="0" width="200" height="41" fill={BAR} />
    <text x="257" y="27" fill="#FFFFFF" textAnchor="middle" fontSize="19">
      Model
    </text>

    <rect
      x="159"
      y="51"
      width="196"
      height="126"
      fill="none"
      stroke={MUTED}
      strokeWidth="2"
    />
    <rect x="173" y="65" width="168" height="41" fill={TEAL} />
    <text x="257" y="92" fill={TEAL_INK} textAnchor="middle" fontSize="19">
      Prompt
    </text>
    <text x="257" y="148" fill={MUTED} textAnchor="middle" fontSize="19">
      Agent
    </text>

    <rect x="157" y="187" width="200" height="41" fill={BAR} />
    <text x="257" y="214" fill="#FFFFFF" textAnchor="middle" fontSize="19">
      Tools
    </text>

    <path
      d="M 355 83 H 406"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#prdl-arrow)"
    />
    <text x="423" y="90" fill="#FFFFFF" fontSize="19">
      production output
    </text>

    <path
      d="M 602 83 H 657"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#prdl-arrow)"
    />
    <text x="674" y="90" fill="#FFFFFF" fontSize="19">
      sampling
    </text>

    <path
      d="M 766 83 H 821"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#prdl-arrow)"
    />
    <rect x="837" y="65" width="76" height="41" fill={ACCENT} />
    <text x="875" y="92" fill={ACCENT_INK} textAnchor="middle" fontSize="19">
      scorers
    </text>

    <path
      d="M 929 83 H 984"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#prdl-arrow)"
    />
    <text x="1000" y="90" fill="#FFFFFF" fontSize="19">
      alerts
    </text>

    {/* Improve: back to the prompt, same rule as at build time */}
    <path
      d="M 1028 100 V 270 H 390 V 98 H 347"
      stroke="#FFFFFF"
      strokeWidth="1"
      fill="none"
      markerEnd="url(#prdl-arrow)"
    />
    <rect x="666" y="256" width="85" height="29" fill={MASK} />
    <text x="708" y="276" fill="#FFFFFF" textAnchor="middle" fontSize="19">
      improve
    </text>
    </g>
  </svg>
);

export default ProductionLoop;
