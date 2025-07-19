"use client";

import GoingBeyond from "@/components/content/GoingBeyond";
import HeroSection from "@/components/content/HeroSection";
import { HonestReview } from "@/components/content/HonestReview";
import Media from "@/components/content/Media";
import TheDifferences from "@/components/content/TheDifferences";
import TrustMedicalExpert from "@/components/content/TrustedMedicalExpert";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustMedicalExpert />
      <GoingBeyond />
      <Media />
      <HonestReview />
      <TheDifferences />
    </main>
  );
}
