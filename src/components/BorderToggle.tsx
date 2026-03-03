import React, { useState, useEffect } from "react";

const STORAGE_KEY = "borders-visible";

const BorderToggle: React.FC = () => {
  const [visible, setVisible] = useState(
    () => localStorage.getItem(STORAGE_KEY) !== "0",
  );

  useEffect(() => {
    document.body.classList.toggle("borders-visible", visible);
    localStorage.setItem(STORAGE_KEY, visible ? "1" : "0");
  }, [visible]);

  return (
    <button
      type="button"
      onClick={() => setVisible((v) => !v)}
      className="fixed bottom-4 right-4 z-50 bg-transparent border border-[var(--color-border)] text-[var(--color-text)] text-[11px] font-[inherit] px-2 py-1 cursor-pointer opacity-50"
      title="Toggle border visibility"
    >
      {visible ? "Borders on" : "Borders off"}
    </button>
  );
};

export default BorderToggle;
