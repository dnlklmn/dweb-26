import React from "react";
import { Link, useParams } from "react-router-dom";
import { getNote } from "../assets/blog/blogPosts";
import "./CaseStudyPage.css";

const row = "flex border-l border-r border-b border-[var(--color-border)]";
const cell = "border-r border-[var(--color-border)]";

const NotesPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getNote(slug) : undefined;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (post) {
    return <post.component />;
  }

  return (
    <div className="cs-page">
      <div className="cs-back-row">
        <Link to="/notes" className="cs-back-row__cell cs-back-row__cell--link">
          <span className="cs-back-row__label" data-text="Notes">
            Notes
          </span>
        </Link>
        <div className="cs-back-row__cell cs-back-row__cell--aux" />
        <div className="cs-back-row__cell cs-back-row__cell--aux" />
        <div className="cs-back-row__cell cs-back-row__cell--aux" />
      </div>
      <div className={row}>
        <div className={`${cell} w-1/4 p-2`} />
        <div className={`${cell} w-1/2 min-h-48 flex items-end p-2`}>
          <p className="text-sm opacity-50">Post not found.</p>
        </div>
        <div className="w-1/4 p-2" />
      </div>
    </div>
  );
};

export default NotesPostPage;
