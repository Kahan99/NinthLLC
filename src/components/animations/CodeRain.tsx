"use client";

import React, { useEffect, useRef } from "react";

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const columns = Math.floor(width / 14);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$+-*/=%&<>![]{}";

    const draw = () => {
      // Very slight translucent black background to create trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = "14px monospace";

      for (let i = 0; i < drops.length; i++) {
        // Higher probability for white/bright characters
        const char = chars.charAt(Math.floor(Math.random() * chars.length));
        
        const x = i * 14;
        const y = drops[i] * 14;

        // Draw the main drop character
        if (Math.random() > 0.95) {
          ctx.fillStyle = "#FFFFFF"; // Brighter glow
          ctx.shadowBlur = 4;
          ctx.shadowColor = "#FFFFFF";
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, " + (Math.random() * 0.4 + 0.1) + ")";
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Reset if it goes past the bottom
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 mix-blend-lighten pointer-events-none"
    />
  );
}
