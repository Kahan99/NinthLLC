"use client";

export default function GlobalFilters() {
  return (
    <svg className="absolute w-0 h-0" aria-hidden="true" style={{ visibility: "hidden" }}>
      <defs>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <filter id="musicNoiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
      </defs>
    </svg>
  );
}
