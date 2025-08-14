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
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="trustedByMedicalExpert" />
      </div>
      <ContinuousCarousel items={items} />
    </main>
  );
};

export default TrustByMedicalExpert;
