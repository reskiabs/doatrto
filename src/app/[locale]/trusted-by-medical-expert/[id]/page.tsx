"use client";

import TrustByMedicalExpert from "@/components/content/TrustedByMedicalExpert";
import PageHeader from "@/components/typography/PageHeader";
import { useTrustedMedical } from "@/hooks/useTrustedMedical";
import { ImageDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const TrustedByMedicalExpertDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const { detail: trustedMedical, loading, error } = useTrustedMedical(id);

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <PageHeader
          pageTitle="TRUSTED BY MEDICAL EXPERT"
          detailTitle={trustedMedical?.title || "Trusted Medical Expert"}
        />

        {loading ? (
          <div className="relative w-[1140px] h-[641px] rounded-[50px] mt-[50px] overflow-hidden bg-surface flex justify-center items-center">
            <ImageDown className="animate-bounce text-muted" size={150} />
          </div>
        ) : (
          <div className="relative w-[1140px] h-[641px] rounded-[50px] overflow-hidden mt-[50px]">
            {trustedMedical?.thumbnail && (
              <Image
                src={trustedMedical.thumbnail}
                alt={trustedMedical.title || "Trusted Medical Expert Image"}
                fill
                priority
                className="object-cover"
              />
            )}
          </div>
        )}
      </div>

      {!loading && trustedMedical && (
        <div className="mt-[100px] w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[1140px]">
            <h1 className="font-medium text-[40px] text-tertiary text-left">
              Speaker:{" "}
              <span className="font-extrabold">
                {trustedMedical.speaker || "—"}
              </span>
            </h1>
          </div>
          <div
            className="font-normal text-justify text-2xl max-w-[1140px] mt-[30px]"
            dangerouslySetInnerHTML={{
              __html: trustedMedical.description || "",
            }}
          />
        </div>
      )}

      <div>
        <TrustByMedicalExpert />
      </div>
    </div>
  );
};

export default TrustedByMedicalExpertDetailPage;
