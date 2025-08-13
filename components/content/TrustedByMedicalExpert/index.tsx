"use client";

import { useTrustedMedical } from "@/hooks/useTrustedMedical";
import ContentTitle from "../../typography/ContentTitle";
import { ContinuousCarousel } from "./ContinuousCarousel";

const TrustByMedicalExpert = () => {
  const { items, loading, error } = useTrustedMedical();

  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="trustedByMedicalExpert" />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <ContinuousCarousel items={items} />
      )}
    </main>
  );
};

export default TrustByMedicalExpert;
