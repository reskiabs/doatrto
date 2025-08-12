"use client";

import TrustByMedicalExpert from "@/components/content/TrustedByMedicalExpert";
import DetailHeader from "@/components/typography/DetailHeader";
import { useMobileScrollOffset } from "@/hooks/useMobileScrollOffset";
import { useTrustedMedical } from "@/hooks/useTrustedMedical";
import { ImageDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const TrustedByMedicalExpertDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const { detail: trustedMedical, loading } = useTrustedMedical(id);
  const scrollRef = useMobileScrollOffset(0.27, [trustedMedical]);

  const hasImages =
    !loading &&
    Array.isArray(trustedMedical?.images) &&
    trustedMedical.images.length > 0;

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          title="Trusted by Medical Experts"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        {loading ? (
          <div className="relative size-[372px] lg:w-[1140px] lg:h-[641px] rounded-[15px] lg:rounded-[50px] mt-[50px] overflow-hidden bg-surface flex justify-center items-center">
            <ImageDown className="animate-bounce text-muted" size={150} />
          </div>
        ) : (
          <div className="relative size-[372px] bg-surface lg:w-[1140px] lg:h-[641px] rounded-[15px] lg:rounded-[30px] overflow-hidden mt-[50px]">
            <div
              className="w-full aspect-video"
              dangerouslySetInnerHTML={{ __html: trustedMedical?.video || "" }}
            />
          </div>
        )}
      </div>

      {!loading && trustedMedical && (
        <div className="mt-[20px] lg:mt-[100px] px-[15px] lg:px-0 w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[1140px]">
            <h1 className="font-extrabold text-[28px] lg:text-[40px] text-tertiary text-left">
              {trustedMedical.title || "—"}
            </h1>
            <h1 className="font-medium text-[28px] lg:text-[40px] text-tertiary text-left">
              Speaker: {trustedMedical.speaker}
            </h1>
          </div>
          <div
            className="text-sm lg:text-xl leading-relaxed text-justify max-w-[1140px] mt-[20px] lg:mt-[30px]"
            dangerouslySetInnerHTML={{
              __html: trustedMedical.description || "",
            }}
          />

          <div className="lg:max-w-[1140px] overflow-x-auto max-w-full mx-auto">
            {hasImages && (
              <div
                ref={scrollRef}
                className="my-[50px] w-full lg:my-[100px] scrollbar-hide"
              >
                <div className="grid grid-cols-3 gap-[10px] px-[15px] lg:px-0 lg:gap-[30px] min-w-max snap-x snap-mandatory">
                  {trustedMedical?.images?.slice(0, 3).map((image, index) => (
                    <div
                      key={index}
                      className="relative size-[250px] lg:size-[360px] rounded-[15px] lg:rounded-[25px] overflow-hidden bg-gray-100 snap-start"
                    >
                      <Image
                        src={image}
                        alt={`Image ${index + 1}`}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div>
        <TrustByMedicalExpert />
      </div>
    </div>
  );
};

export default TrustedByMedicalExpertDetailPage;
