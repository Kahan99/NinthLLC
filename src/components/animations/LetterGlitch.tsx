"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface LetterGlitchProps {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
  fontSize?: number;
}

const LetterGlitch: React.FC<LetterGlitchProps> = ({
  glitchColors = ["#2b4539", "#61dca3", "#61b3dc"],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  fontSize = 14,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const lastUpdateRef = useRef<number>(0);

  // Setup grid and initial state
  const setupGrid = useCallback((width: number, height: number) => {
    const cols = Math.ceil(width / fontSize);
    const rows = Math.ceil(height / fontSize);
    const grid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        char: characters[Math.floor(Math.random() * characters.length)],
        color: glitchColors[Math.floor(Math.random() * glitchColors.length)],
        opacity: Math.random() * 0.5 + 0.1,
        targetOpacity: Math.random() * 0.5 + 0.1,
      }))
    );
    return grid;
  }, [characters, fontSize, glitchColors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let grid = setupGrid(width, height);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      grid = setupGrid(width, height);
    };

    window.addEventListener("resize", handleResize);

    const draw = (timestamp: number) => {
      if (timestamp - lastUpdateRef.current > glitchSpeed) {
        // Update a random subset of the grid
        const updateCount = Math.floor(grid.length * grid[0].length * 0.05);
        for (let i = 0; i < updateCount; i++) {
          const r = Math.floor(Math.random() * grid.length);
          const c = Math.floor(Math.random() * grid[0].length);
          grid[r][c].char = characters[Math.floor(Math.random() * characters.length)];
          grid[r][c].color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
          grid[r][c].targetOpacity = Math.random() * 0.8 + 0.2;
        }
        lastUpdateRef.current = timestamp;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (smooth) {
            cell.opacity += (cell.targetOpacity - cell.opacity) * 0.1;
          } else {
            cell.opacity = cell.targetOpacity;
          }

          ctx.fillStyle = cell.color;
          ctx.globalAlpha = cell.opacity;
          ctx.fillText(
            cell.char,
            colIndex * fontSize + fontSize / 2,
            rowIndex * fontSize + fontSize / 2
          );
        });
      });

      // Vignette effects
      if (centerVignette || outerVignette) {
        const gradient = ctx.createRadialGradient(
          width / 2, height / 2, 0,
          width / 2, height / 2, Math.sqrt(width**2 + height**2) / 2
        );

        if (centerVignette && outerVignette) {
          gradient.addColorStop(0, "rgba(0,0,0,0.8)");
          gradient.addColorStop(0.5, "rgba(0,0,0,0)");
          gradient.addColorStop(1, "rgba(0,0,0,0.8)");
        } else if (centerVignette) {
          gradient.addColorStop(0, "rgba(0,0,0,0.8)");
          gradient.addColorStop(1, "rgba(0,0,0,0)");
        } else if (outerVignette) {
          gradient.addColorStop(0, "rgba(0,0,0,0)");
          gradient.addColorStop(1, "rgba(0,0,0,0.8)");
        }

        ctx.globalAlpha = 1;
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [characters, fontSize, glitchColors, glitchSpeed, smooth, centerVignette, outerVignette, setupGrid]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block"
      style={{ background: "transparent" }}
    />
  );
};

export default LetterGlitch;
