"use client";

import GoingBeyond from "@/components/content/GoingBeyond";
import HeroSection from "@/components/content/HeroSection";
import { HonestReview } from "@/components/content/HonestReview";
import Media from "@/components/content/Media";
import TrustMedicalExpert from "@/components/content/TrustMedicalExpert";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustMedicalExpert />
      <GoingBeyond />
      <Media />
      <HonestReview />
    </main>
  );
}
