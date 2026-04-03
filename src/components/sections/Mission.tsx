"use client";

import Container from "@/components/layout/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Mission() {
  return (
    <div className="w-full">
      <Container>
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={0}
            blurStrength={12}
            containerClassName="w-full text-left max-w-5xl mx-auto"
            textClassName="text-[clamp(1.85rem,5vw,2.5rem)] md:text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1.2] tracking-tight text-white/90"
            rotationEnd="bottom center"
            wordAnimationEnd="bottom 60%"
          >
            NINTH° is structured for leaders who want one accountable partner and a clear standard. You get founder led direction, senior oversight, and a curated bench of specialists assembled to the mandate. When the stakes are high, the work stays composed, and the outcomes speak for themselves.
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}
