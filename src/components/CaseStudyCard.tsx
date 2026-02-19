import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTransition } from "../context/TransitionContext";
import "./CaseStudyCard.css";

export interface CaseStudy {
  title: string;
  slug: string;
  description: string;
  role: string;
  year: string;
  image?: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  onNavigate?: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onNavigate }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const infoTopRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { setTransitionData } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Capture positions
    if (cardRef.current && infoTopRef.current && metaRef.current && tagsRef.current) {
      setTransitionData({
        slug: study.slug,
        card: cardRef.current.getBoundingClientRect(),
        infoTop: infoTopRef.current.getBoundingClientRect(),
        meta: metaRef.current.getBoundingClientRect(),
        tags: tagsRef.current.getBoundingClientRect(),
      });
    }

    onNavigate?.();
    navigate(`/${study.slug}`);
  };

  return (
    <Link
      ref={cardRef}
      to={`/${study.slug}`}
      className="case-study"
      onClick={handleClick}
    >
      <div className="case-study__image">
        {study.image && (
          <img src={study.image} alt={study.title} className="case-study__img" />
        )}
      </div>
      <div className="case-study__info">
        <div ref={infoTopRef} className="case-study__info-top" />
        <div className="case-study__info-bottom">
          <div ref={metaRef} className="case-study__meta">
            <span className="case-study__title">{study.title}</span>
            <span className="case-study__description">{study.description}</span>
          </div>
          <div ref={tagsRef} className="case-study__tags">
            <span className="case-study__role">{study.role}</span>
            <span className="case-study__year">{study.year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
