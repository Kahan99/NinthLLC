"use client";

import React from "react";
import {
  motion,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface PrinciplesProps {
  scrollProgress: MotionValue<number>;
}

const ColumnBackground = ({ progress }: { progress: MotionValue<number> }) => {
  return (
    <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-30">
      <div 
        className="w-full h-full max-w-[1200px] flex justify-between px-4 md:px-0"
        style={{
          background: "repeating-linear-gradient(to right, transparent 0, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default function Principles({ scrollProgress }: PrinciplesProps) {
  // Global opacity for the whole section
  // Keep it visible as the monitor frames up
  const sectionOpacity = useTransform(scrollProgress, [0.12, 0.18, 0.85, 0.95], [0, 1, 1, 0]);

  return (
    <motion.section
      id="principles"
      style={{ opacity: sectionOpacity }}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <ColumnBackground progress={scrollProgress} />

      {/* 
          The narrative text has been removed from the monitor window overlay as requested.
          The monitor now serves as a purely visual transition/framing element for the 
          cinematic zoom-out sequence.
      */}
      <div className="relative w-full h-full" />

    </motion.section>
  );
}
