"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? "mt-4 mx-4 md:mx-auto max-w-5xl rounded-full glass" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-4 bg-white flex items-center justify-center">
             {/* Simple Logo Mark Placeholder */}
             <div className="w-full h-[2px] bg-black" />
          </div>
          NINTH°
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Capabilities", "Method", "Intelligence", "Team", "Principals"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <div className="h-4 w-[1px] bg-white/20 mx-2" />
          
          <Link 
            href="/contact" 
            className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Consult
          </Link>
        </div>

        {/* Mobile Nav Toggle Placeholder */}
        <button className="md:hidden p-2 text-white/60">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="12" y1="6" x2="21" y2="6"></line>
            <line x1="12" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}
