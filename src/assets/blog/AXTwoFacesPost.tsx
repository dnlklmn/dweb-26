import React from "react";
import NotesPostLayout, { row, cell } from "../../components/NotesPostLayout";

const meta = {
  title: "AX has two faces",
  date: "2026 May 18",
};

const AXTwoFacesPost: React.FC = () => (
  <NotesPostLayout meta={meta}>
    {/* Spacer */}
    <div className={`${row} h-12`} />

    {/* Intro */}
    <div className={row}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pt-12 flex flex-col gap-2`}>
        <p className="text-xl w-3/4 leading-relaxed max-w-[65ch]">
          AX — Agent Experience.{" "}
          <a
            href="https://biilmann.blog/articles/introducing-ax/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Matt Biilmann
          </a>{" "}
          at{" "}
          <a
            href="https://www.netlify.com/agent-experience/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Netlify
          </a>{" "}
          coined it: make your product usable by AI agents, the way UX is
          about making it usable by people.
        </p>
        <p className="text-xl w-3/4 leading-relaxed max-w-[65ch]">
          Good idea. About to be everywhere. But the framing only covers half.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Two sides — side by side */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        Agents using your product
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          Agents will interact with your products, so you need to make sure
          they can. They need to find their way in, understand what your
          product does, and use it without getting stuck.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          This is the part of AX that gets talked about. Things like{" "}
          <a
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            MCP
          </a>{" "}
          servers, clean APIs, docs that read well to a model, errors that an
          LLM can actually recover from.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        Humans using your agentic features
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          Humans will interact with your agentic features, so you need to make
          sure they can too. People need to trust what your agent is doing,
          see what it's about to do before it happens, and stop it or steer it
          when something looks off.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          This part gets talked about a lot less, even though it's where most
          of the friction is right now.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Both are design work */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`} />
      <div className={`${cell} w-1/2 p-2 py-12 flex flex-col align-center`}>
        <p className="text-sm leading-relaxed text-center">
          Both of these are design work.
        </p>
        <p className="text-sm font-bold leading-relaxed text-center">
          Most teams are doing one and ignoring the other.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm font-bold leading-relaxed max-w-[65ch]">
          Ship an MCP server
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          Call the agent question handled. Forget that anyone has to trust the
          thing.
        </p>
      </div>
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="text-sm font-bold leading-relaxed max-w-[65ch]">
          Bolt on a chat window
        </p>
        <p className="text-sm leading-relaxed max-w-[65ch]">
          Call the human question handled. Forget that other agents can't get
          near it.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 py-12 flex flex-col align-center`}>
        <p className="text-sm font-bold leading-relaxed text-center">
          You really need both.
        </p>
        <p className="text-sm leading-relaxed text-center">
          Two audiences, two surfaces, one product. Neither one excuses
          neglecting the other.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Portfolio as experiment */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        A small experiment
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          When I{" "}
          <a
            href="/notes/ai-website"
            className="underline underline-offset-2"
          >
            rebuilt my portfolio
          </a>{" "}
          I tried to cover both sides. It reads cleanly for people, and it
          serves an MCP server so agents can query my case studies the same
          way you can browse them.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          The next few posts go deeper into each side. What I've learned
          making products that agents can use, and what I've learned making
          agentic features that humans can trust.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Closing */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pt-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch] text-xl">
          If you're working on either side, I'm open for work or projects.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>
  </NotesPostLayout>
);

export default AXTwoFacesPost;
