"use client";

import Certificate from "@/components/common/Certificate";
import GoingBeyond from "@/components/content/GoingBeyond";
import HeroSection from "@/components/content/HeroSection";
import { HonestReview } from "@/components/content/HonestReview";
import Media from "@/components/content/Media";
import News from "@/components/content/News";
import OpenEvidenceBasedSystem from "@/components/content/OpenEvidenceBasedSystem";
import Testimonials from "@/components/content/Testimonials";
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
      <OpenEvidenceBasedSystem />
      <Certificate />
      <Testimonials />
      <News />
    </main>
  );
}
