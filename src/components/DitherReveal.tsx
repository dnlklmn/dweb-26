import React from "react";
import "./DitherReveal.css";

type DitherRevealProps = {
  imageSrc: string;
  className?: string;
  cellSize?: number;
  revealRadius?: number;
  pointSize?: number;
};

type Dot = {
  x: number;
  y: number;
  tone: number;
  phase: number;
  gridX: number;
  gridY: number;
};

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
const fract = (value: number) => value - Math.floor(value);
const hash2 = (x: number, y: number) =>
  fract(Math.sin(x * 127.1 + y * 311.7) * 43758.5453123);
const BAYER_8X8 = [
  [0, 48, 12, 60, 3, 51, 15, 63],
  [32, 16, 44, 28, 35, 19, 47, 31],
  [8, 56, 4, 52, 11, 59, 7, 55],
  [40, 24, 36, 20, 43, 27, 39, 23],
  [2, 50, 14, 62, 1, 49, 13, 61],
  [34, 18, 46, 30, 33, 17, 45, 29],
  [10, 58, 6, 54, 9, 57, 5, 53],
  [42, 26, 38, 22, 41, 25, 37, 21],
];

const DitherReveal: React.FC<DitherRevealProps> = ({
  imageSrc,
  className = "",
  cellSize = 4,
  revealRadius = 190,
  pointSize = 1.3,
}) => {
  const hostRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const dotsRef = React.useRef<Dot[]>([]);
  const mouseRef = React.useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const frameRef = React.useRef<number | null>(null);
  const imageRef = React.useRef<HTMLImageElement | null>(null);

  React.useEffect(() => {
    const host = hostRef.current;
    if (!host) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let disposed = false;
    const sampleCanvas = document.createElement("canvas");
    const sampleCtx = sampleCanvas.getContext("2d");
    if (!sampleCtx) {
      return;
    }

    const image = new Image();
    image.src = imageSrc;
    imageRef.current = image;

    const buildDots = () => {
      const rect = host.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));

      canvas.width = width;
      canvas.height = height;

      if (
        !image.complete ||
        image.naturalWidth === 0 ||
        image.naturalHeight === 0
      ) {
        dotsRef.current = [];
        return;
      }

      const cols = Math.max(1, Math.floor(width / cellSize));
      const rows = Math.max(1, Math.floor(height / cellSize));

      sampleCanvas.width = cols;
      sampleCanvas.height = rows;

      const imageAspect = image.naturalWidth / image.naturalHeight;
      const targetAspect = cols / rows;

      let drawWidth = cols;
      let drawHeight = rows;
      let drawX = 0;
      let drawY = 0;

      if (imageAspect > targetAspect) {
        drawHeight = rows;
        drawWidth = drawHeight * imageAspect;
        drawX = (cols - drawWidth) * 0.5;
      } else {
        drawWidth = cols;
        drawHeight = drawWidth / imageAspect;
        drawY = (rows - drawHeight) * 0.5;
      }

      sampleCtx.clearRect(0, 0, cols, rows);
      sampleCtx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
      const pixels = sampleCtx.getImageData(0, 0, cols, rows).data;

      const nextDots: Dot[] = [];
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const idx = (row * cols + col) * 4;
          const r = pixels[idx] / 255;
          const g = pixels[idx + 1] / 255;
          const b = pixels[idx + 2] / 255;
          const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          const tone = clamp01(1 - luminance);

          const bayer = (BAYER_8X8[row % 8][col % 8] + 0.5) / 64;
          if (tone > bayer * 0.92) {
            nextDots.push({
              x: col * cellSize + cellSize * 0.5,
              y: row * cellSize + cellSize * 0.5,
              tone,
              phase: Math.random() * Math.PI * 2,
              gridX: col,
              gridY: row,
            });
          }
        }
      }

      dotsRef.current = nextDots;
    };

    const draw = (time: number) => {
      if (disposed) {
        return;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mouseX, y: mouseY, active } = mouseRef.current;
      const t = time * 0.001;
      for (const dot of dotsRef.current) {
        const pulse = 0.84 + Math.sin(time * 0.0026 + dot.phase) * 0.16;
        const anchorX = dot.x;
        const anchorY = dot.y;

        const distance = Math.hypot(mouseX - anchorX, mouseY - anchorY);
        const seed = hash2(dot.gridX, dot.gridY);
        const angle = Math.atan2(anchorY - mouseY, anchorX - mouseX);

        const n1 =
          Math.sin(anchorX * 0.026 + t * 1.7 + seed * 6.28) *
          Math.cos(anchorY * 0.021 - t * 1.3 + seed * 4.7);
        const n2 = Math.sin(angle * 4.5 + t * 2.1 + seed * 7.4);
        const irregular = clamp01(0.5 + n1 * 0.28 + n2 * 0.22);

        const effectiveRadius = revealRadius * (0.65 + irregular * 0.9);
        const edge = clamp01(1 - distance / effectiveRadius);
        const smoothEdge = edge * edge * (3 - 2 * edge);
        const patchiness = clamp01((irregular - 0.1) / 0.9);

        const hoverReveal = active ? smoothEdge * patchiness : 0;
        const reveal = Math.max(0.02, hoverReveal);
        if (reveal <= 0.01) {
          continue;
        }

        const alpha = dot.tone * reveal * pulse;
        const driftAmp = cellSize * 0.34;
        const flowX =
          Math.sin(anchorY * 0.045 + t * 1.55 + seed * 6.28) +
          Math.cos(anchorX * 0.032 - t * 1.18 + seed * 3.1);
        const flowY =
          Math.cos(anchorX * 0.041 + t * 1.37 + seed * 2.6) -
          Math.sin(anchorY * 0.037 - t * 1.47 + seed * 5.9);
        const px =
          anchorX +
          flowX * driftAmp * 0.34 +
          Math.sin(t * 2.2 + dot.phase) * driftAmp * 0.18;
        const py =
          anchorY +
          flowY * driftAmp * 0.34 +
          Math.cos(t * 1.9 + dot.phase * 1.2) * driftAmp * 0.18;
        context.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(4)})`;
        context.beginPath();
        context.arc(px, py, pointSize, 0, Math.PI * 2);
        context.fill();
      }

      frameRef.current = window.requestAnimationFrame(draw);
    };

    const interactionTarget = host.parentElement ?? host;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    const resizeObserver = new ResizeObserver(() => buildDots());

    image.onload = () => {
      buildDots();
    };
    buildDots();

    resizeObserver.observe(host);
    interactionTarget.addEventListener("pointermove", handlePointerMove);
    interactionTarget.addEventListener("pointerleave", handlePointerLeave);
    frameRef.current = window.requestAnimationFrame(draw);

    return () => {
      disposed = true;
      resizeObserver.disconnect();
      interactionTarget.removeEventListener("pointermove", handlePointerMove);
      interactionTarget.removeEventListener("pointerleave", handlePointerLeave);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [cellSize, imageSrc, pointSize, revealRadius]);

  return (
    <div
      className={`dither-reveal ${className}`.trim()}
      ref={hostRef}
      aria-hidden
    >
      <canvas className="dither-reveal__canvas" ref={canvasRef} />
    </div>
  );
};

export default DitherReveal;
