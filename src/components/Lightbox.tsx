import React, { useEffect, useCallback } from "react";
import "./Lightbox.css";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div className="lightbox" onClick={onClose}>
      {src.endsWith(".svg") ? (
        <object
          className="lightbox__img"
          data={src}
          type="image/svg+xml"
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img
          className="lightbox__img"
          src={src}
          alt={alt}
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
};

export default Lightbox;
