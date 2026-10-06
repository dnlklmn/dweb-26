import React from "react";
import NotesPostLayout, { row, cell } from "../../components/NotesPostLayout";

const meta = {
  title: "Possible was never the point",
  date: "2026 Sep 4",
};

const BecauseICanPost: React.FC = () => (
  <NotesPostLayout meta={meta}>
    {/* Spacer */}
    <div className={`${row} h-12`} />

    {/* Intro */}
    <div className={row}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pt-12 flex flex-col gap-2`}>
        <p className="text-xl w-3/4 leading-relaxed max-w-[65ch]">
          "I built it because I can" is the oldest bug in software. It didn't
          arrive with AI. It's been shipping features nobody asked for since
          long before any of us had a model in the loop.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* The old fight */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        The fight we were already having
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          Designers have been having this argument with developers for as long
          as I've been doing this. Build what's needed, not what's possible.
          Start from the problem, not from the thing that happens to be
          buildable this sprint.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          It was never that developers were wrong-headed. Possibility is
          seductive. It's concrete, it's measurable, it's satisfying, and it's
          right there in front of you. "What do they actually need" is none of
          those things.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* What changed */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        What actually changed
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          Possible got cheap. That's the whole change. The thing that took a
          quarter takes an afternoon, and the sentence "we can't build that"
          has mostly stopped being true.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          So the old bug didn't get fixed. It got amplified. When possible was
          expensive, cost did some of the filtering for us by accident —
          effort was a crude proxy for whether something was worth doing at
          all. That proxy is gone.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Centered statement */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`} />
      <div className={`${cell} w-1/2 p-2 py-12 flex flex-col align-center`}>
        <p className="text-sm leading-relaxed text-center">
          Cheap execution removed the last accidental filter.
        </p>
        <p className="text-sm font-bold leading-relaxed text-center">
          Nothing now stands between "we could" and "we shipped it" except a
          decision.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* So what */}
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm font-bold leading-relaxed max-w-[65ch]">
          The easy part got easier
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          Execution was never the bottleneck on whether a product was any
          good. Making it faster doesn't make the product better, it just
          makes the wrong thing arrive sooner.
        </p>
      </div>
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm font-bold leading-relaxed max-w-[65ch]">
          The hard part didn't move
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          Knowing who this is for, what they need, and what we're deliberately
          not doing costs exactly what it always did. No model has taken a
          minute off it.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Deciding is the work */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        Deciding is the work
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          Teams are still describing this as a speed story — how much they
          ship, how fast, how many agents in parallel. It's the same
          conversation as before, with the numbers turned up.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          The interesting question was never how much you can build. It's what
          you choose to build, and what you refuse to. That question got more
          valuable, not less, the moment everything became buildable.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Closing */}
    <div className={`${row} h-12`} />
    <div className={row}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pt-12 pb-12 flex flex-col gap-2`}>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          I use AI for most of the building now. It didn't change what I
          decide, it changed how quickly I find out whether I decided well.
          How I actually work that way — the second half of this — is the next
          post.
        </p>
      </div>
      <div className="w-1/4 p-2">
        <p className="text-xl leading-relaxed max-w-[65ch]">
          What's possible got easier.
        </p>
        <p className="text-xl leading-relaxed max-w-[65ch]">
          So what. Deciding what to do is still the whole job.
        </p>
      </div>
    </div>
  </NotesPostLayout>
);

export default BecauseICanPost;
