"use client";

import Certificate from "@/components/common/Certificate";
import Banner from "@/components/content/Banner";
import GoingBeyond from "@/components/content/GoingBeyond";
import { HonestReview } from "@/components/content/HonestReview";
import Media from "@/components/content/Media";
import News from "@/components/content/News";
import OpenEvidenceBasedSystem from "@/components/content/OpenEvidenceBasedSystem";
import Testimonials from "@/components/content/Testimonials";
import TheDifferences from "@/components/content/TheDifferences";
import TrustByMedicalExpert from "@/components/content/TrustedByMedicalExpert";

export default function Home() {
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
