import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudyCard.css";

export interface CaseStudy {
  title: string;
  slug: string;
  description: string;
  role: string;
  year: string;
  image?: string;
  foregroundImage?: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  onNavigate?: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onNavigate }) => {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = containerRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when top of card is at bottom of viewport, 1 when bottom is at top
      const progress = 1 - rect.bottom / (vh + rect.height);
      // map progress [0..1] to translateY [-5%..5%] — change 10 to adjust amount
      const offset = (progress - 0.6) * 18;
      img.style.setProperty("--parallax-offset", `${offset}%`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <Link to={`/${study.slug}`} className="case-study" onClick={onNavigate}>
      <div className="case-study__image" ref={containerRef}>
        <div className="case-study__image-clip">
          {study.image && (
            <img
              ref={imgRef}
              src={study.image}
              alt={study.title}
              className="case-study__img"
            />
          )}
          {study.foregroundImage && (
            <img
              src={study.foregroundImage}
              alt=""
              className="case-study__foreground-img"
            />
          )}
        </div>
      </div>
      <div className="case-study__info">
        <div className="case-study__info-top" />
        <div className="case-study__info-bottom">
          <div className="case-study__meta">
            <span className="case-study__title">{study.title}</span>
            <span className="case-study__description">{study.description}</span>
          </div>
          <div className="case-study__tags">
            <span className="case-study__role whitespace-nowrap">
              {study.role}
            </span>{" "}
            <span className="case-study__year">{study.year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
