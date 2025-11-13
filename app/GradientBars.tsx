import React, { useState, useEffect } from "react";

const GradientBars: React.FC = () => {
  const [numBars] = useState(15);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  // Inject keyframes dynamically (you can move this to CSS too)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes pulseBar {
        0% { transform: scaleY(0.4); }
        50% { transform: scaleY(1); }
        100% { transform: scaleY(0.6); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      // removeChild returns the removed node; ensure cleanup returns void
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: "100%",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: "1 0 calc(100% / 15)",
                maxWidth: "calc(100% / 15)",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(212, 175, 55, 1), rgba(255, 215, 0, 0.6), transparent)",
                transformOrigin: "bottom",
                animation: "pulseBar 2s ease-in-out infinite",
                animationDelay: `${index * 0.15}s`,
                boxShadow: "0 0 15px rgba(212, 175, 55, 0.5)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GradientBars;
