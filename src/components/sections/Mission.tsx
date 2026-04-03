"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const textToAnimate =
  "NINTH° is structured for leaders who want one accountable partner and a clear standard. You get founder-led direction, senior oversight, and a curated bench of specialists assembled to the mandate. When the stakes are high, the work stays composed, and the outcomes speak for themselves.";

const tokens = textToAnimate.split(/(\s+)/);

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative w-full bg-black py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <div className="relative flex flex-col items-center self-stretch rounded-3xl max-w-5xl mx-auto bg-white/[0.02] border border-white/5 pt-12 pb-14 px-6 md:px-14 gap-6 shadow-[0_40px_100px_rgba(0,0,0,0.6)] [background-image:radial-gradient(circle_at_50%_0,#ffffff0d,transparent_70%)]">
          {/* Accent top border */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFA16C66] to-transparent" />

          {/* Label */}
          <div className="flex flex-col items-center gap-2">
            <motion.img
              src="/images/positioning.svg"
              loading="lazy"
              alt=""
              aria-hidden="true"
              className="h-8 w-8 opacity-60"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <span className="text-[#f2f2f266] tracking-[1.5px] font-medium text-[11px] uppercase">
              The Studio
            </span>
          </div>

          {/* Animated Text Body */}
          <motion.p
            className="whitespace-pre-wrap text-center text-xl md:text-2xl xl:text-[28px] font-medium leading-[1.5] tracking-[0.2px] text-white"
            aria-label={textToAnimate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.025,
                },
              },
            }}
          >
            <span className="sr-only">{textToAnimate}</span>
            {tokens.map((token, index) => (
              <motion.span
                key={index}
                className="inline-block whitespace-pre"
                aria-hidden="true"
                variants={{
                  hidden: { opacity: 0, filter: "blur(8px)" },
                  visible: {
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.7, ease: "easeOut" },
                  },
                }}
              >
                {token}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
