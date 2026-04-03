"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

const industries = [
  { name: "E-commerce", image: "/images/Ecom.png" },
  { name: "Fintech", image: "/images/Fintech.png" },
  { name: "Real Estate", image: "/images/Real-estate.png" },
  { name: "Manufacturing", image: "/images/Manufacturing.png" },
  { name: "Healthcare", image: "/images/Healthcare.png" },
  { name: "Logistics", image: "/images/Logistics.jpg" },
];

export default function Industries() {
  return (
    <Section id="industries" className="py-12 md:py-20 lg:py-24 bg-black">
      <Container>
        <div className="flex flex-col gap-4 mb-6 lg:mb-10">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full bg-white"
              style={{ boxShadow: "0 0 20px #fff" }}
            />
            <span className="text-xs uppercase tracking-widest text-[#707079] font-medium">
              Industries
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-medium sm:leading-[125%] leading-none tracking-[-0.1px] text-white">
            <span className="block mb-2">
              Enterprise, consumer, regulated, fast moving, niche, or mass
              market. If it has users, workflows, and real stakes,
            </span>
            <span className="text-[#FFA16C]">we have built for it.</span>
          </h2>
        </div>
      </Container>

      {/* Horizontal Scroll Container */}
      <div
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-5 lg:px-[max(1.25rem,calc((100vw-80rem)/2))]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="relative shrink-0 rounded-2xl overflow-hidden"
          >
            <div className="relative h-full w-full overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow">
              <img
                src={industry.image}
                alt={industry.name}
                width={400}
                height={520}
                loading="lazy"
                className="h-80 sm:h-[min(43svh,520px)] w-auto object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controls */}
      <Container>
        <div className="flex items-center justify-between mt-8 px-5 lg:px-0">
          <div className="flex items-center gap-2 text-[#707079] hover:text-white transition-colors cursor-pointer group">
            <span className="text-md">Improved outcomes for millions</span>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              disabled
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 rotate-180"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
            <Button variant="outline" size="icon" aria-label="Scroll right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </Container>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </Section>
  );
}
