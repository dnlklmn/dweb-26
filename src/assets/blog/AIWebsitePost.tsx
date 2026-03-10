import React from "react";
import NotesPostLayout, { row, cell } from "../../components/NotesPostLayout";

const meta = {
  title: "A website for the AI age",
  date: "2026 Mar 10",
};

const AIWebsitePost: React.FC = () => (
  <NotesPostLayout meta={meta}>
    {/* Spacer */}
    <div className={`${row} h-12`} />

    {/* Intro */}
    <div className={row}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pt-12 flex flex-col gap-2`}>
        <p className="text-xl w-3/4 leading-relaxed max-w-[65ch]">
          A website that only works for humans is increasingly invisible to how
          people and their agents actually explore the web.
        </p>
        <p className="text-xl w-3/4 leading-relaxed max-w-[65ch]">
          I decided I'm gonna make my new portfolio work as well for AI agents
          as it does for people.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Section: Making it readable */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>Readable</div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          The first step was making sure all meaningful content exists as plain
          text, structured so that a language model can read it as fluently as a
          person skimming it.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          This forced a useful discipline: if something was only communicable
          visually, I had to ask whether it was actually communicating anything
          important.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Section: MCP server */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>Usable</div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          Wrapping all the content in an MCP server lets LLMs use it as a tool.
          Instead of a human visiting a page, an agent calls a tool. The
          response comes back structured, not rendered.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          My MCP server exposes the portfolio as a set of queryable tools: case
          studies with their full process descriptions, writing with the actual
          arguments, a bio, and contact information. Any agent that can use
          tools can now query this portfolio directly without scraping or
          hallucinating.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          The server runs locally. Point your AI agent at it and it becomes part
          of the agent's world.
        </p>
      </div>
      <div className="w-1/4 p-2 pb-12 flex flex-col gap-2">
        <p className="leading-relaxed opacity-50 mb-1">
          claude_desktop_config.json
        </p>
        <pre className="text-xs leading-relaxed font-mono whitespace-pre opacity-70">{`{
  "mcpServers": {
    "dnlklmn-portfolio": {
      "type": "http",
      "url": "https://danielkalman.design/api/mcp"
    }
  }
}`}</pre>
      </div>
    </div>

    {/* Section: The LLM guide */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}>
        Adding the LLM guide
      </div>
      <div className={`${cell} w-1/2 p-2 pb-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch]">
          Now the MCP server handles agents but for visitors who want a faster
          path, I added a chat interface using Claude.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          The system prompt is a briefing document: who Daniel is, what each
          project involved, how each piece of writing argues its point. Claude
          uses this to understand who's visiting and what they're after, then
          recommends the most relevant work.
        </p>
        <p className="leading-relaxed max-w-[65ch]">
          Conversations are traced through Langfuse so I can see which turn the
          recommendation was made, whether contact was offered, how long the
          exchange ran. This lets me improve my prompt until I find my dream
          job.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>

    {/* Three ways — side by side */}
    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pt-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch] text-xl">
          Three ways to consume it
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 font-bold p-2 text-right`}></div>
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="font-bold leading-relaxed">Read it</p>
        <p className="leading-relaxed max-w-[65ch]">
          Navigate the case studies yourself. The work is documented in detail
          so you can follow the process and form your own opinion.
        </p>
      </div>
      <div className={`${cell} w-1/4 p-2 pb-12 flex flex-col gap-2`}>
        <p className="font-bold leading-relaxed">Have an agent read it</p>
        <p className="leading-relaxed max-w-[65ch]">
          Point your AI agent at the MCP server to get structured access to the
          full portfolio without any guesswork.
        </p>
      </div>
      <div className="w-1/4 p-2 pb-12 flex flex-col gap-2">
        <p className="font-bold leading-relaxed">Ask</p>
        <p className="leading-relaxed max-w-[65ch]">
          Use the chat, ask general questions or something specific and Claude
          will point you exactly where you need to look.
        </p>
      </div>
    </div>

    <div className={`${row} h-12`} />
    <div className={`${row} text-sm`}>
      <div className={`${cell} w-1/4 p-2`} />
      <div className={`${cell} w-1/2 p-2 pt-12 flex flex-col gap-2`}>
        <p className="leading-relaxed max-w-[65ch] text-xl">
          This portfolio is a product I designed for you and your agents.
        </p>
      </div>
      <div className="w-1/4 p-2" />
    </div>
  </NotesPostLayout>
);

export default AIWebsitePost;
