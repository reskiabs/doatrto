"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import { useTrustedMedicalOptimized } from "@/hooks/optimized/useTrustedMedicalOptimized";
import { memo } from "react";
import ContentTitle from "../../typography/ContentTitle";
import { ContinuousCarousel } from "./ContinuousCarousel";

const TrustByMedicalExpert = memo(() => {
  const { items, loading, error } = useTrustedMedicalOptimized();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <main className="mt-[30px] md:mt-[60px] lg:mt-[80px]">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="appreciatedByMedicalExpert" />
      </div>
      <ContinuousCarousel items={items} />
    </main>
  );
});

TrustByMedicalExpert.displayName = 'TrustByMedicalExpert';

export default TrustByMedicalExpert;
