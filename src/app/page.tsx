import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "NINTH° | Design & Development Studio",
  description: "NINTH° builds software products and digital systems end to end, from first principles to production.",
  openGraph: {
    title: "NINTH° | Design & Development Studio",
    description: "NINTH° builds software products and digital systems end to end.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
