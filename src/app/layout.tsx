import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalFilters from "@/components/layout/GlobalFilters";
import Preloader from "@/components/layout/Preloader";
import { LoadingProvider } from "@/context/LoadingContext";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ninth.llc"),
  title: "NINTH° | Design & Development Studio",
  description: "NINTH° builds high-performance digital products. AI-native software engineering, product design, and strategic consulting for ambitious teams.",
  keywords: ["Software Engineering", "Product Design", "AI-native", "Strategic Consulting", "Design", "Development", "Studio", "Software", "Digital Systems"],
  openGraph: {
    title: "NINTH° | Design & Development Studio",
    description: "High-performance digital products. AI-native software engineering, product design, and strategic consulting for ambitious teams.",
    url: "https://ninth.llc",
    siteName: "NINTH°",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "NINTH° | Design & Development Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NINTH° | Design & Development Studio",
    description: "High-performance digital products. AI-native software engineering, product design, and strategic consulting for ambitious teams.",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSans.variable} ${instrumentSerif.variable} font-sans h-full dark`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased relative">
        <LoadingProvider>
          <Preloader />
          <GlobalFilters />
          <Navbar />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
