import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { marked } from "marked";
import "./CaseStudyPage.css";
import "./ContactPage.css";
import "./AskPage.css";

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const OPENER = "Hey — what brings you to Daniel's portfolio today?";
const MAX_TURNS = 3;

type Role = "user" | "assistant";
interface Message {
  role: Role;
  content: string;
}

const AskPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: OPENER },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  const [animComplete, setAnimComplete] = useState(false);
  const [showStickyTitles, setShowStickyTitles] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setAnimComplete(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyTitles(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-48px 0px 0px 0px" },
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading || turnCount >= MAX_TURNS) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setTurnCount((prev) => prev + 1);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong. Try again or [contact Daniel directly](/contact).",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const done = turnCount >= MAX_TURNS && !loading;

  return (
    <div
      className={`cs-page min-h-screen flex flex-col${animComplete ? " anim-complete" : ""}`}
    >
      {/* Sticky back row */}
      <div className="cs-back-row">
        <Link
          to="/"
          className="cs-back-row__cell cs-back-row__cell--link"
          onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
        >
          <span className="cs-back-row__label" data-text="Daniel Kalman">
            <span className="name-full">Daniel Kalman</span>
            <span className="name-short">Daniel</span>
          </span>
        </Link>
        <div
          className={`cs-back-row__cell cs-back-row__cell--aux${showStickyTitles ? " cs-back-row__cell--aux-active" : ""}`}
        >
          {showStickyTitles && (
            <button
              type="button"
              className="cs-back-row__aux-action"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="cs-back-row__aux-label">Contact</span>
            </button>
          )}
        </div>
        <div className="cs-back-row__cell cs-back-row__cell--aux" />
        <div className="cs-back-row__cell cs-back-row__cell--aux" />
      </div>

      {/* Header */}
      <div ref={headerRef} className={row}>
        <div className={`${cell} w-1/4 p-2`} />
        <div
          className={`${cell} w-1/2 min-h-48 flex flex-col gap-4 justify-end p-2`}
        >
          <p className="text-xl font-normal leading-relaxed max-w-[75%]">
            Not sure where to start? Tell me what you're looking for.
          </p>
        </div>
        <div className="w-1/4 p-2" />
      </div>

      {/* Messages */}
      <div className="flex flex-col">
        {messages.map((msg, i) => (
          <div key={i} className={row}>
            <div className={`${cell} w-1/4 shrink-0`} />
            <div
              className={`${cell} w-1/2 p-2 ask-message${msg.role === "user" ? " ask-message--user" : ""}`}
              dangerouslySetInnerHTML={{
                __html: marked.parse(msg.content) as string,
              }}
            />
            <div className="w-1/4 shrink-0" />
          </div>
        ))}

        {loading && (
          <div className={row}>
            <div className={`${cell} w-1/4 shrink-0`} />
            <div className={`${cell} w-1/2 p-2`}>
              <span className="ask-loading">···</span>
            </div>
            <div className="w-1/4 shrink-0" />
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Spacer */}
      <div className={`${row} flex-1 min-h-12`} />

      {/* Input */}
      <form onSubmit={handleSubmit}>
        <div className={row}>
          <div className={`${cell} w-1/4 shrink-0`} />
          <div
            className={`${cell} w-1/2 p-2 flex items-center contact-textarea-cell${input ? " is-focused" : ""}`}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                done
                  ? "Reach out at /contact to continue the conversation."
                  : "Your reply…"
              }
              disabled={loading || done}
              className="ask-input"
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={loading || done || !input.trim()}
            className="w-1/4 about-link-cell"
          >
            <span className="about-link-cell__label">
              {loading ? "…" : done ? "Done" : "Send →"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AskPage;
