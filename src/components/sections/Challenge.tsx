"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const textToAnimate = "Most teams do not struggle with ideas. They struggle with fragmented execution, unclear ownership, and work that fails under real pressure. NINTH° exists for the opposite, decisive direction, quiet confidence, and delivery that holds its shape.";

// Split the text into an array of words and space tokens to match the reference DOM exactly
const tokens = textToAnimate.split(/(\s+)/);

export default function Challenge() {
  return (
    <Section className="py-12 md:py-20 lg:py-24">
      <Container>
        <div className="relative flex flex-col items-center self-stretch rounded-3xl max-w-6xl mx-4 md:mx-auto bg-black/95 border-none pt-6 pb-6 px-5 md:pt-9 md:pb-9 md:px-8 xl:pt-11 xl:pb-10 xl:px-10 gap-4 xl:gap-6 shadow-[0_40px_100px_rgba(0,0,0,0.4)] [background-image:radial-gradient(circle_at_50%_0,#ffffff0d,transparent_60%)] xl:[background-image:radial-gradient(circle_at_50%_0,#ffffff0d,transparent_70%)]">
          <div className="flex flex-col justify-center items-center gap-2 xl:gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/positioning.svg"
                loading="lazy"
                alt=""
                aria-hidden="true"
                className="icon-callout"
              />
            </motion.div>
            <span className="text-[#f2f2f266] text-left tracking-[1.5px] mt-[1px] font-['Neue_Montreal',sans-serif] text-[11px] font-medium leading-[19px]">
              THE CHALLENGE
            </span>
          </div>
          
          <motion.p
            className="whitespace-pre-wrap text-center text-lg md:text-2xl xl:text-[28px] font-medium leading-[140%] tracking-[0.2px]"
            aria-label={textToAnimate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.04,
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
                    transition: { duration: 0.8, ease: "easeOut" }
                  },
                }}
              >
                {token}
              </motion.span>
            ))}
          </motion.p>
          
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFA16C99] to-transparent [background-image:linear-gradient(to_right,transparent_5%,#FFA16C99_50%,transparent_95%)]"></div>
        </div>
      </Container>
    </Section>
  );
}
