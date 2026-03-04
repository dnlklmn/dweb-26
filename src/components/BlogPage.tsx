import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../assets/blog/blogPosts";
import "./CaseStudyPage.css";
import "./BlogPage.css";
import "./ContactPage.css";

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const BlogPage: React.FC = () => {
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
              <span className="cs-back-row__aux-label">Blog</span>
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
            On design, AI, and building software.
          </p>
        </div>
        <div className="w-1/4 p-2" />
      </div>

      {/* Section title */}
      <div className={`${row} px-2 pt-12 pb-2`}>
        <h2 className="text-3xl font-bold">Posts</h2>
      </div>

      {/* Spacer */}
      <div className={`${row} h-12`} />

      {/* Post list */}
      {blogPosts.map((post) => (
        <Link
          key={post.slug}
          to={`/blog/${post.slug}`}
          className={`${row} group cursor-pointer no-underline`}
          style={{ color: "inherit" }}
        >
          <div
            className={`${cell} w-1/4 flex flex-col justify-between items-end p-2 shrink-0`}
          >
            <p className="text-sm leading-relaxed">{post.date}</p>
          </div>
          <div className={`${cell} w-1/2 p-2 flex flex-col gap-1 pb-12`}>
            <p className="text-sm font-bold leading-relaxed">{post.title}</p>
            <p className="text-sm leading-relaxed max-w-[80%]">
              {post.description}
            </p>
          </div>
          <div className="blog-post-card__reveal" />
        </Link>
      ))}

      {/* Spacer */}
      <div className={`${row} flex-1`} />

      {/* Footer links */}
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
            <div className="w-full h-full text-sm font-medium leading-[1.21] flex items-end"></div>
            <div className="h-full flex flex-col justify-center">
              <div className="w-px h-2 bg-(--color-border)" />
            </div>
            <Link
              className="contact-nav-link w-full h-full text-sm font-medium leading-[1.21] flex justify-end items-end"
              to="/ask"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span>Ask</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
