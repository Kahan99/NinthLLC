"use client";

import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`py-24 lg:py-48 relative ${className}`}>
      {children}
    </section>
  );
}
