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
}

interface CaseStudyCardProps {
  study: CaseStudy;
  onNavigate?: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onNavigate }) => (
  <Link
    to={`/${study.slug}`}
    className="case-study"
    onClick={onNavigate}
  >
    <div className="case-study__image">
      {study.image && (
        <img src={study.image} alt={study.title} className="case-study__img" />
      )}
    </div>
    <div className="case-study__info">
      <div className="case-study__info-top" />
      <div className="case-study__info-bottom">
        <div className="case-study__meta">
          <span className="case-study__title">{study.title}</span>
          <span className="case-study__description">{study.description}</span>
        </div>
        <div className="case-study__tags">
          <span className="case-study__role">{study.role}</span>
          <span className="case-study__year">{study.year}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default CaseStudyCard;
