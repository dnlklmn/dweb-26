import React from "react";
import NotesPostLayout, { row, cell } from "../../components/NotesPostLayout";

const meta = {
  title: "Why I design again",
  date: "2025 Dec 29",
};

const DoDesignPost: React.FC = () => (
  <NotesPostLayout meta={meta}>
    {/* Spacer */}
    <div className={`${row} h-12`} />

    {/* Intro */}
    <div className={row}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          AI agents can have working software ready by lunch, so why not just
          keep generating until you're happy with the outcome? The feedback loop
          feels immediate, progress is being made faster then ever. Or is it.
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          I think I might be confusing activity with progress.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Section: What design actually does */}

    <div className={`${row} h-12 `} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        What design actually does
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className=" leading-relaxed max-w-[65ch]">
          Design is a decision-making framework. It reduces the solution space
          and turns vague ambition into a well-defined problem.
        </p>
        <p className=" leading-relaxed max-w-[65ch]">
          Before anyone writes a line of code, design answers the questions I
          tried to skip: what are we building, and what aren't we? For whom, and
          what do they actually need? Why this approach over the alternatives?
          What are the constraints?
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Section: What I kept getting wrong */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}></div>
      <div
        className={`${cell} w-1/4 font-bold text-right p-2 pb-12 flex flex-col gap-2`}
      >
        But coherence isn't correctness
      </div>
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          A well-built output can still be solving the wrong problem. Evaluating
          whether it's right takes just as long as it ever did, I just pushed
          that work downstream, where it's harder to fix.
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          In multi-agent workflows, this compounds. One agent's output becomes
          another's input, and a bad assumption in problem framing cascades
          through every layer. Each piece looks reasonable in isolation, but the
          whole thing is pointed the wrong direction.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`} />
      <div className={`${cell} w-1/2 p-2 py-12 flex flex-col align-center`}>
        <p className="text-sm leading-relaxed  text-center">
          So I went back to how I worked before AI:
        </p>
        <p className="text-sm font-bold leading-relaxed  text-center">
          Think before committing development resources.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm font-bold leading-relaxed max-w-[65ch]">
          Frame the problem
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          A clear problem frame means each agent gets a well-scoped task rather
          than an invitation to wander.
        </p>
      </div>
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2 pb-12`}>
        <p className="text-sm font-bold leading-relaxed max-w-[65ch]">
          State acceptance criteria
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          The more precisely I define what done looks like, the more useful the
          output becomes.
        </p>
      </div>
      <div className="w-1/4 p-2 pb-12  flex flex-col gap-2">
        <p className="text-sm font-bold leading-relaxed max-w-[65ch]">
          Design the interface
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          When multiple agents collaborate boundaries need to be set. Which
          agent owns which decisions? Where does one's authority end?
        </p>
      </div>
      <div className="w-1/4 p-2 border-l border-[var(--color-border)] pb-12 flex flex-col gap-2">
        <p className="text-sm font-bold leading-relaxed max-w-[65ch]">
          Define constraints
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          What the system should not do matters as much as what it should.
          Agents are eager to please, constraints keep the work focused.
        </p>
      </div>
    </div>
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`} />
      <div className={`${cell} w-1/2 p-2 pt-12 flex flex-col  gap-4`}>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          None of this is new. It used to be called software architecture,
          product thinking, system design. Now it all collapses into the same
          discipline: deciding carefully before prompting widely.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`} />
      <div className={`${cell} w-1/2 p-2 pt-12 flex flex-col `}>
        <p className="text-sm font-bold leading-relaxed">
          Why this matters more now, not less
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    <div className={row}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          As execution gets commoditized, the value of what I bring shifts
          toward judgment and intent: knowing what's worth building, recognizing
          when a solution is genuinely good versus merely functional, being able
          to articulate clearly what I'm trying to achieve and why.
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          When I skip design, I produce more waste and make it harder to
          evaluate what I'm getting back. When I invest in it upfront, agents
          are aligned, outputs can be evaluated against clear criteria, and
          review burden drops because intent was explicit from the start.
        </p>
      </div>
      <div className="w-1/4 p-2">
        <p className="text-xl leading-relaxed max-w-[65ch]">
          AI didn't make design obsolete.
        </p>
        <p className="text-xl leading-relaxed max-w-[65ch]">
          It made it the highest-leverage thing I can spend my time on.
        </p>
      </div>
    </div>
  </NotesPostLayout>
);

export default DoDesignPost;
