"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface TextAnimateProps {
  children: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
  animation?: "blurIn" | "fadeIn" | "slideUp";
  by?: "character" | "word" | "line";
  className?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
}

export default function TextAnimate({
  children,
  as: Component = "div",
  animation = "blurIn",
  by = "word",
  className = "",
  duration = 0.8,
  delay = 0,
  once = false,
}: TextAnimateProps) {
  // Split text into segments
  const segments = by === "word" ? children.split(" ") : children.split("");

  const variants = {
    blurIn: {
      hidden: { filter: "blur(10px)", opacity: 0 },
      visible: { filter: "blur(0px)", opacity: 1 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
  };

  const variant = variants[animation];

  const content: ReactNode = (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{
        staggerChildren: duration / segments.length,
        delayChildren: delay,
      }}
      style={{ display: "contents" }}
    >
      {segments.map((segment, idx) => (
        <motion.span
          key={idx}
          variants={variant}
          transition={{ duration: duration / segments.length }}
          className="inline-block mr-[0.25em] whitespace-pre"
        >
          {by === "word" ? segment + " " : segment}
        </motion.span>
      ))}
    </motion.div>
  );

  if (Component === "p") {
    return <p className={className}>{content}</p>;
  } else if (Component === "h1") {
    return <h1 className={className}>{content}</h1>;
  } else if (Component === "h2") {
    return <h2 className={className}>{content}</h2>;
  } else if (Component === "h3") {
    return <h3 className={className}>{content}</h3>;
  } else if (Component === "h4") {
    return <h4 className={className}>{content}</h4>;
  } else if (Component === "h5") {
    return <h5 className={className}>{content}</h5>;
  } else if (Component === "h6") {
    return <h6 className={className}>{content}</h6>;
  } else if (Component === "span") {
    return <span className={className}>{content}</span>;
  }

  return <div className={className}>{content}</div>;
}
