import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./CaseStudyPage.css";

export interface BlogPostMeta {
  title: string;
  date: string;
}

interface BlogPostLayoutProps {
  meta: BlogPostMeta;
  children: React.ReactNode;
}

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ meta, children }) => {
  const [showStickyTitles, setShowStickyTitles] = useState(false);
  const [animComplete, setAnimComplete] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className={`cs-page${animComplete ? " anim-complete" : ""}`}>
      {/* Sticky back row */}
      <div className="cs-back-row">
        <Link to="/" className="cs-back-row__cell cs-back-row__cell--link">
          <span className="cs-back-row__label" data-text="Blog">
            <span className="name-full">Daniel Kalman</span><span className="name-short">Daniel</span>
          </span>
        </Link>

        <Link to="/blog" className="cs-back-row__cell cs-back-row__cell--link">
          <span className="cs-back-row__aux-label">Blog</span>
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
              <span className="cs-back-row__aux-label truncate">
                {meta.title}
              </span>
            </button>
          )}
        </div>
        <div className="cs-back-row__cell cs-back-row__cell--aux" />
      </div>

      {/* Title row */}
      <div ref={headerRef} className={row}>
        <div className={`${cell} w-1/4 p-2`} />
        <div
          className={`${cell} w-1/2 min-h-48 flex flex-col gap-4 justify-end p-2`}
        >
          <p className="text-3xl font-bold leading-relaxed">{meta.title}</p>
        </div>
        <div className="w-1/4 flex flex-col justify-end p-2">
          <p className="text-sm">{meta.date}</p>
        </div>
      </div>

      {/* Post content */}
      {children}

      {/* Spacer */}
      <div className={`${row} h-12`} />

      {/* Footer links */}
      <div className={`${row} h-48`}>
        <Link to="/blog" className={`${cell} w-1/4 about-link-cell`}>
          <span className="about-link-cell__label">← All posts</span>
        </Link>
        <Link
          to="/"
          className={`${cell} w-1/4 about-link-cell`}
          onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
        >
          <span className="about-link-cell__label">Work →</span>
        </Link>
        <Link to="/ask" className={`${cell} w-1/4 about-link-cell`}>
          <span className="about-link-cell__label">Ask →</span>
        </Link>
        <div className="w-1/4" />
      </div>
    </div>
  );
};

export { row, cell };
export default BlogPostLayout;
