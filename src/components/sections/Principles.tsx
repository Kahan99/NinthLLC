"use client";

import React, { useMemo, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface PrinciplesProps {
  scrollProgress: MotionValue<number>;
}

type RevealWordProps = {
  token: string;
  range: [number, number];
  progress: MotionValue<number>;
  accent?: boolean;
  blurFrom?: number;
};

const RevealWord = ({
  token,
  range,
  progress,
  accent = false,
  blurFrom = 14,
}: RevealWordProps) => {
  const opacity = useTransform(progress, range, [0.03, 1]);
  const blur = useTransform(progress, range, [blurFrom, 0]);
  const y = useTransform(progress, range, [10, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <span className="relative inline-block align-baseline">
      <motion.span
        style={{ opacity, filter, y }}
        className={accent ? "text-[#FFA16C]" : "text-white"}
      >
        {token}
      </motion.span>
      <span className="text-white/10" aria-hidden="true">
        &nbsp;
      </span>
    </span>
  );
};

type NarrativeLineProps = {
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  accentWords?: string[];
  blurFrom?: number;
};

const NarrativeLine = ({
  text,
  progress,
  range,
  className,
  accentWords = [],
  blurFrom = 14,
}: NarrativeLineProps) => {
  const tokens = useMemo(() => text.split(" "), [text]);
  const step = (range[1] - range[0]) / tokens.length;

  return (
    <p className={className}>
      {tokens.map((token, index) => {
        const tokenStart = range[0] + index * step;
        const tokenEnd = tokenStart + step;
        const normalized = token.replace(/[.,]/g, "");

        return (
          <RevealWord
            key={`${token}-${index}`}
            token={token}
            progress={progress}
            range={[tokenStart, tokenEnd]}
            accent={accentWords.includes(normalized)}
            blurFrom={blurFrom}
          />
        );
      })}
    </p>
  );
};

// Vertical Column Pattern Background shown in reference images
const ColumnBackground = ({ progress }: { progress: MotionValue<number> }) => {
  return (
    <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-40">
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Phase 1 Content: Capabilities
  const part1Label = "● CAPABILITIES";
  const part1Text = "Software is the foundation. Everything else exists to make it exceptional.";
  
  // Phase 2 Content: Standard (Refined from user image 2)
  const part2Label = "● OUR CORE PILLARS";
  const part2Line1 = "NINTH° is structured for leaders who want one accountable partner and a clear standard.";
  const part2Line2 = "You get founder led direction, senior oversight, and a curated bench of specialists assembled to the mandate.";
  const part2Line3 = "When the stakes are high, the work stays composed, and the outcomes speak for themselves.";

  // Part 1 Ranges: 0.12 - 0.45 of local scroll
  const part1Opacity = useTransform(scrollProgress, [0.12, 0.15, 0.4, 0.45], [0, 1, 1, 0]);
  const part1Blur = useTransform(scrollProgress, [0.4, 0.48], [0, 20]);
  const part1Filter = useMotionTemplate`blur(${part1Blur}px)`;

  // Part 2 Ranges: 0.5 - 1.0 of local scroll
  const part2Opacity = useTransform(scrollProgress, [0.48, 0.55, 0.95, 1.0], [0, 1, 1, 0]);
  const part2Blur = useTransform(scrollProgress, [0.48, 0.55], [20, 0]);
  const part2Filter = useMotionTemplate`blur(${part2Blur}px)`;

  return (
    <motion.section
      id="principles"
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <ColumnBackground progress={scrollProgress} />

      <div className="relative w-full h-full flex flex-col items-center justify-center py-14 px-6 md:px-0">
        
        {/* PART 1: CAPABILITIES */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center max-w-5xl mx-auto px-4"
          style={{ opacity: part1Opacity, filter: part1Filter }}
        >
          <span className="text-[#707079] text-xs font-semibold tracking-[0.2em] mb-8">{part1Label}</span>
          <NarrativeLine
            text={part1Text}
            progress={scrollProgress}
            range={[0.15, 0.38]}
            className="text-[28px] md:text-[40px] font-medium leading-[1.2] tracking-tight text-center"
            accentWords={["Software", "foundation"]}
          />
        </motion.div>

        {/* PART 2: THE STANDARD */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center max-w-6xl mx-auto px-4"
          style={{ opacity: part2Opacity, filter: part2Filter }}
        >
          <span className="text-[#707079] text-xs font-semibold tracking-[0.2em] mb-10">{part2Label}</span>
          
          <div className="flex flex-col gap-2">
            <NarrativeLine
              text={part2Line1}
              progress={scrollProgress}
              range={[0.55, 0.7]}
              className="text-[28px] md:text-[40px] font-medium leading-[1.2] tracking-tight text-center"
              accentWords={["NINTH°"]}
            />
            <NarrativeLine
              text={part2Line2}
              progress={scrollProgress}
              range={[0.65, 0.85]}
              className="text-[28px] md:text-[40px] font-medium leading-[1.2] tracking-tight text-center"
            />
            <NarrativeLine
              text={part2Line3}
              progress={scrollProgress}
              range={[0.8, 0.95]}
              className="text-[28px] md:text-[40px] font-medium leading-[1.2] tracking-tight text-center"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
