"use client";

import Certificate from "@/components/common/Certificate";
import Banner from "@/components/content/Banner";
import GoingBeyond from "@/components/content/GoingBeyond";
import { HonestReview } from "@/components/content/HonestReview";
import Media from "@/components/content/Media";
import OpenEvidenceBasedSystem from "@/components/content/OpenEvidenceBasedSystem";
import TheDifferences from "@/components/content/TheDifferences";
import TrustByMedicalExpert from "@/components/content/TrustedByMedicalExpert";
import { preloadHomeData } from "@/lib/preload";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamic imports for non-critical components
const News = dynamic(() => import("@/components/content/News"), {
  ssr: false,
  loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100 rounded" />
});

const Testimonials = dynamic(() => import("@/components/content/Testimonials"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] animate-pulse bg-gray-100 rounded" />
});

export default function Home() {
  // Preload data for better UX
  useEffect(() => {
    preloadHomeData();
  }, []);

  return (
    <main>
      <Banner />
      <TrustByMedicalExpert />
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
