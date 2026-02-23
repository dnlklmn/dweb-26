import { useState, useEffect } from "react";
import React from "react";

interface Color {
  color: string;
  name: string;
}

export default function ColorRange({ range }: { range: Color[] }) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      setCopiedColor(color);
    });
  };

  useEffect(() => {
    if (copiedColor) {
      const timer = setTimeout(() => {
        setCopiedColor(null);
      }, 2000); // Reset the copied state after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [copiedColor]);

  return (
    <div className="w-full flex px-8">
      {range.map((colorObj, index) => (
        <div key={index} className="group w-full h-24">
          <div
            id="color-box"
            className="w-full h-20 group-hover hover:scale-[2] transition-all duration-75 cursor-pointer"
            style={{ backgroundColor: colorObj.color }}
            onClick={() => handleCopy(colorObj.color)}
          >
            <div className="capitalize flex text-[6px] font-Franklin text-white items-center justify-center h-full leading-snug opacity-0 hover:opacity-100">
              {copiedColor === colorObj.color ? (
                "Copied!"
              ) : (
                <>
                  {colorObj.name}
                  <br />
                  {colorObj.color}
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
