import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./CaseStudyPage.css";
import "./ContactPage.css";

const EMAILJS_SERVICE_ID = "service_tuxcmcd";
const EMAILJS_TEMPLATE_ID = "template_y5f69ab";
const EMAILJS_PUBLIC_KEY = "3foDHvTPjzXt6w2dY";

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [sendHovered, setSendHovered] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [showStickyTitles, setShowStickyTitles] = useState(false);
  const [animComplete, setAnimComplete] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

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

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const emailError = emailTouched
    ? !email.trim()
      ? "Required"
      : !isValidEmail(email)
        ? "Invalid email"
        : ""
    : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailTouched(true);
    if (
      !email.trim() ||
      !isValidEmail(email) ||
      !message.trim() ||
      status === "sending"
    )
      return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { email, message },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={`cs-page min-h-screen flex flex-col${animComplete ? " anim-complete" : ""}`}>
      {/* Sticky back row */}
      <div className="cs-back-row">
        <Link
          to="/"
          className="cs-back-row__cell cs-back-row__cell--link"
          onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
        >
          <span className="cs-back-row__label" data-text="Daniel Kalman">
            <span className="name-full">Daniel Kalman</span><span className="name-short">Daniel</span>
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
            Say hello, ask a question, or share something interesting.
          </p>
        </div>
        <div className="w-1/4 p-2 flex flex-col gap-2 justify-end">
          <a
            href="https://www.linkedin.com/in/dnlklmn/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-nav-link text-sm leading-relaxed"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span>LinkedIn →</span>
          </a>
          <a
            href="https://bsky.app/profile/dnlklmn.online"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-nav-link text-sm leading-relaxed"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span>Bluesky →</span>
          </a>
          <a
            href="https://github.com/dnlklmn"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-nav-link text-sm leading-relaxed"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span>GitHub →</span>
          </a>
        </div>
      </div>

      {/* Spacer */}
      <div className={`${row} h-12`} />

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className={row}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-end items-end p-2 shrink-0`}
          />
          <div
            className={`${cell} w-1/2 p-2 h-12 flex contact-textarea-cell${emailFocused ? " is-focused" : ""}`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => {
                setEmailFocused(false);
                setEmailTouched(true);
              }}
              placeholder="your@email.com"
              className="self-start w-full text-sm leading-relaxed outline-none "
              style={{
                color: "var(--color-text)",
                fontFamily: "inherit",
                background: "transparent",
                border: "none",
                padding: 0,
              }}
            />
          </div>
          <div className="w-1/4 flex items-end p-2">
            {emailError && (
              <p className="self-start text-sm leading-relaxed opacity-50">
                {emailError}
              </p>
            )}
          </div>
        </div>
        <div className={`${row} flex-1`}>
          <div
            className={`${cell} w-1/4 flex flex-col justify-end items-end p-2 shrink-0`}
          />
          <div
            className={`${cell} w-1/2 p-2 flex contact-textarea-cell${focused ? " is-focused" : ""}`}
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Your message…"
              className="w-full flex-1 resize-none text-sm leading-relaxed outline-none"
              style={{
                color: "var(--color-text)",
                fontFamily: "inherit",
                background: "transparent",
                border: "none",
                padding: 0,
              }}
            />
          </div>
          <button
            type="submit"
            className={`w-1/4 about-link-cell${emailError || !email.trim() ? " about-link-cell--disabled" : ""}`}
            disabled={status === "sending"}
            onMouseEnter={() => setSendHovered(true)}
            onMouseLeave={() => setSendHovered(false)}
          >
            <span className="about-link-cell__label">
              {(!email.trim() || !isValidEmail(email)) && sendHovered
                ? "No email provided"
                : status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Sent ✓"
                    : status === "error"
                      ? "Error — retry"
                      : "Send →"}
            </span>
          </button>
        </div>
      </form>

      {/* Spacer */}
      <div className={`${row} h-12`} />

      <div className={`${row} h-48`}>
        <div
          className={`${cell} w-3/4 flex flex-col justify-end items-end p-2 shrink-0`}
        />

        <div className="w-1/4 flex flex-col p-2 gap-1">
          <div className="flex justify-between items-end whitespace-nowrap w-full flex-1 gap-1">
            <Link
              className="contact-nav-link w-full h-full text-sm font-medium leading-[1.21]"
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
              onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
            >
              <span>Work</span>
            </Link>
            <div className="h-full flex flex-col justify-center">
              <div className="w-px h-2 bg-(--color-border)" />
            </div>
            <Link
              className="contact-nav-link w-full h-full text-sm font-medium leading-[1.21] flex justify-end"
              to="/about"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span>About</span>
            </Link>
          </div>
          <div className="flex justify-between whitespace-nowrap w-full flex-1 gap-1">
            <Link
              className="contact-nav-link w-full h-full text-sm font-medium leading-[1.21] flex items-end"
              to="/notes"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span>Notes</span>
            </Link>
            <div className="h-full flex flex-col justify-center">
              <div className="w-px h-2 bg-(--color-border)" />
            </div>
            <div className="w-full h-full text-sm font-medium leading-[1.21] flex justify-end items-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
