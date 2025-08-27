"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import { useTrustedMedical } from "@/hooks/useTrustedMedical";
import ContentTitle from "../../typography/ContentTitle";
import { ContinuousCarousel } from "./ContinuousCarousel";

const TrustByMedicalExpert = () => {
  const { items, loading, error } = useTrustedMedical();

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
};

export default TrustByMedicalExpert;
