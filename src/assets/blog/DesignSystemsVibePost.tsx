import React from "react";
import BlogPostLayout, { row, cell } from "../../components/BlogPostLayout";

const meta = {
  title: "A design system is documented decisions",
  date: "2026 Feb 18",
};

const DesignSystemsVibePost: React.FC = () => (
  <BlogPostLayout meta={meta}>
    {/* Spacer */}
    <div className={`${row} h-12`} />

    {/* Intro */}
    <div className={row}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          A design system isn't only a component library — it is a set of
          decisions, made explicit. When I structure design tokens, components,
          and rulesets, I'm solidifying the choices I've made regarding spacing,
          hierarchy, interaction patterns, error handling.
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          Each token is a decision. Each component is a bundle of decisions.
          Each rule is a constraint I chose deliberately.
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          This matters a lot more now that I vibe-code most of my work.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Section: The problem */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        The problem with vibe coding without documented decisions
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          When I prompt an agent from scratch, it makes its own decisions. Every
          time. Spacing, color, layout, component structure all get reinvented
          per prompt. The first screen looks fine. The second looks fine.
          Together they look like two different products.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          Worse: I couldn't tell what decisions were being made at all. The
          agent picked a button style, a spacing scale, a layout pattern — but
          none of it was recorded anywhere. If I wanted to change direction, I
          couldn't trace back to what I'd implicitly committed to. I was making
          decisions by accident and couldn't undo them on purpose.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Section: What changes */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        What changes with a design system in place
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          When my agents work within a design system, they're not making all
          sorts of decisions from scratch. The decisions are already documented
          in the tokens, components, and rules — which lets me control what to
          experiment with and what to pin down.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Two benefits */}
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="font-bold leading-relaxed">Always moving forward</p>
        <p className="leading-relaxed max-w-[65ch]">
          Every output builds on the same foundation. I'm not spending review
          cycles catching inconsistencies or wondering why this page feels
          different from that one. The system enforces coherence, so I can focus
          on whether the feature actually works.
        </p>
      </div>
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="font-bold leading-relaxed">
          Track decisions, measure impact
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          When a decision is explicit I can change it and see what happens
          across the whole product. If I change a rule I know what I expect, and
          can evaluate the impact. Implicit decisions can't be measured.
          Documented ones can.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Section: Decisions compound */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        Decisions compound
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          Each decision in a design system builds on the ones before it. A
          spacing scale informs component sizing. Component sizing informs layout
          rules. Layout rules inform page-level patterns.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          When these decisions are documented, they compound in my favor — each
          new decision has a solid foundation. When they're not, they compound
          against me. Every agent prompt starts from zero, and the
          inconsistencies stack up faster than I can catch them.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Section: Vibe coding with a system */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        Vibe coding with a system
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          I still vibe-code. Prompt an agent, look at what comes back, iterate.
          The speed is still there.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          The difference is that now the vibes have structure underneath them.
          I'm not guessing at whether things are consistent — the system handles
          that. I'm not losing track of what I've decided — it's in the tokens
          and rules. And when I want to change direction, I change the decision
          in one place and it propagates.
        </p>
        <p className="leading-relaxed max-w-[65ch] font-bold">
          I build the system first. Then I vibe as hard as I want.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>
  </BlogPostLayout>
);

export default DesignSystemsVibePost;
