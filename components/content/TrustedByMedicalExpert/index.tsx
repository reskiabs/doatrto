"use client";

import ContentTitle from "../../typography/ContentTitle";
import { ContinuousCarousel } from "./ContinuousCarousel";

const TrustByMedicalExpert = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-8">
        <ContentTitle title="Trusted by Medical Expert" />
      </div>
      <ContinuousCarousel />
    </main>
  );
};

export default TrustByMedicalExpert;
