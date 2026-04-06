"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useLoading } from "@/context/LoadingContext";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { setLoaded } = useLoading();

  useEffect(() => {
    if (!containerRef.current) return;

    // ── GSAP TIMELINE ──
    const tl = gsap.timeline({
      onComplete: () => {
        setLoaded(true);
        // Wait slightly for the bars to fully disappear visually before removing from DOM
        gsap.delayedCall(0.5, () => setIsVisible(false));
      }
    });

    // Animate width from 100% to 0% with center stagger
    tl.to(barsRef.current, {
      width: "0%",
      duration: 1.4,
      stagger: {
        amount: 0.8,
        from: "center",
        ease: "power2.inOut"
      },
      ease: "power4.inOut",
      delay: 0.5 // Initial hold
    });

    return () => {
      tl.kill();
    };
  }, [setLoaded]);

  if (!isVisible) return null;

  return (
    <div 
      id="preloader"
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-transparent pointer-events-none flex flex-col"
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          ref={(el) => { barsRef.current[i] = el; }}
          className="relative flex-1 w-full bg-black"
          style={{ willChange: "width" }}
        />
      ))}
    </div>
  );
}
