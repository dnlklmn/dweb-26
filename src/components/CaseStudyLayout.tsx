import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lightbox from "./Lightbox";
import "./CaseStudyPage.css";

export interface CaseStudyMeta {
  title: string;
  subtitle: string;
  tags: string;
  year: string;
  demoLink?: string;
  demoLabel?: string;
  company?: string;
  role?: string;
  tech?: string;
}

export type ImgHelper = (src: string, alt: string, className?: string) => React.ReactElement;
export type OpenLightbox = (src: string, alt: string) => void;
export type OpenLightboxNode = (node: React.ReactNode) => void;

interface CaseStudyLayoutProps {
  meta: CaseStudyMeta;
  children: (img: ImgHelper, openLightbox: OpenLightbox, openLightboxNode: OpenLightboxNode) => React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ meta, children }) => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [lightboxNode, setLightboxNode] = useState<React.ReactNode | null>(null);
  const [showStickyTitles, setShowStickyTitles] = useState(false);
  const [animComplete, setAnimComplete] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setAnimComplete(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!lightboxNode) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxNode(null); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightboxNode]);

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

  const img: ImgHelper = (src, alt, className) => (
    <img
      src={src}
      alt={alt}
      className={className ?? "w-full h-full object-cover block"}
      style={{ cursor: "zoom-in" }}
      onClick={() => setLightbox({ src, alt })}
    />
  );

  return (
    <>
      <div className={`cs-page${animComplete ? " anim-complete" : ""}${detailsOpen ? " cs-page--details-open" : ""}`}>
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
              <Link
                to="/#selected-work"
                className="cs-back-row__aux-action"
                onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
              >
                <span className="cs-back-row__aux-label">Work</span>
              </Link>
            )}
          </div>
          <div
            className={`cs-back-row__cell cs-back-row__cell--aux${showStickyTitles ? " cs-back-row__cell--aux-active" : ""}`}
          >
            {showStickyTitles && (
              <button
                type="button"
                className="cs-back-row__aux-action"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="cs-back-row__aux-label">{meta.title}</span>
              </button>
            )}
          </div>
          <div className="cs-back-row__cell cs-back-row__cell--aux" />
        </div>
        {/* Header */}
        <div className="cs-header" ref={headerRef}>
          <div className="cs-header__cell">
            <Link
              to="/"
              className="cs-header__title"
              onClick={() => sessionStorage.setItem("landing-skip-anim", "1")}
            >
              {meta.title}
            </Link>
            <span className="cs-header__subtitle">{meta.subtitle}</span>
          </div>
          {/* Details toggle — only visible on mobile via CSS */}
          <button
            type="button"
            className="cs-header__details-toggle"
            onClick={() => setDetailsOpen(o => !o)}
            aria-expanded={detailsOpen}
          >
            <span className="cs-header__details-label">Details</span>
            <span className="cs-header__details-icon" aria-hidden="true">
              {detailsOpen ? "−" : "+"}
            </span>
          </button>
          <div className="cs-header__cell cs-header__cell--tags">
            <span className="cs-header__tags-text">{meta.tags}</span>
            <span className="cs-header__year">{meta.year}</span>
          </div>
          {/* Company/role/tech — mobile-only, inside the collapsible details */}
          {(meta.company || meta.role || meta.tech) && (
            <div className="cs-header__meta-details">
              {meta.company && (
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold">Company</span>
                  <span className="text-sm">{meta.company}</span>
                </div>
              )}
              {meta.role && (
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold">Role</span>
                  <span className="text-sm">{meta.role}</span>
                </div>
              )}
              {meta.tech && (
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold">Tech</span>
                  <span className="text-sm">{meta.tech}</span>
                </div>
              )}
            </div>
          )}
          <div className="cs-header__cell cs-header__cell--spacer" />
          <a
            href={meta.demoLink}
            target="_blank"
            rel="noreferrer"
            className={`cs-header__cell cs-header__cell--demo${!meta.demoLink ? " cs-header__cell--demo--no-link" : ""}`}
          >
            <span className="cs-header__link">
              {meta.demoLabel ?? "Demo →"}
            </span>
          </a>
        </div>

        <div className="cs-content cs-content--visible">{children(img, (src, alt) => setLightbox({ src, alt }), (node) => setLightboxNode(node))}</div>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
      {lightboxNode && (
        <div className="lightbox" onClick={() => setLightboxNode(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "90vw", maxHeight: "90vh", overflow: "auto", cursor: "default" }}>
            {lightboxNode}
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyLayout;
