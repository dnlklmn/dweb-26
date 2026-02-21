import React from "react";
import { useParams, Link } from "react-router-dom";
import AutoCaseStudy from "./AutoCaseStudy";
import RadicleDesktopCaseStudy from "./RadicleDesktopCaseStudy";

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (slug === "auto") {
    return <AutoCaseStudy />;
  }
  if (slug === "radicle-desktop") {
    return <RadicleDesktopCaseStudy />;
  }

  return (
    <div style={{ padding: "var(--page-padding)" }}>
      <Link to="/" style={{ color: "inherit", fontSize: 14 }}>
        ← Back
      </Link>
      <h1
        style={{
          marginTop: 48,
          fontSize: 64,
          fontWeight: 900,
          textTransform: "uppercase",
        }}
      >
        {slug?.replace(/-/g, " ")}
      </h1>
    </div>
  );
};

export default CaseStudyPage;
