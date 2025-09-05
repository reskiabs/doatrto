"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import OpenEvidenceAutoSlider from "@/components/content/OpenEvidenceAutoSlider";
import DetailHeader from "@/components/typography/DetailHeader";
import { useOpenEvidenceDetailOptimized } from "@/hooks/optimized/useOpenEvidenceDetailOptimized";
import { useOpenEvidenceListOptimized } from "@/hooks/optimized/useOpenEvidenceListOptimized";
import { useParams } from "next/navigation";

const OpenEvidenceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { detail, loading, error } = useOpenEvidenceDetailOptimized(id);
  const { list } = useOpenEvidenceListOptimized();

  const slideData = list.map((item) => ({
    src: item.thumbnail,
  }));

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          titleKey="openEvidenceBasedSystem"
          descriptionKey="openEvidenceBasedSystem"
        />
        <div className="relative w-full  max-w-[360px] lg:max-w-[1140px] aspect-video bg-surface rounded-[15px] lg:rounded-[25px] overflow-hidden mt-[50px]">
          <div
            className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:absolute [&>iframe]:top-0 [&>iframe]:left-0"
            dangerouslySetInnerHTML={{ __html: detail?.video || "" }}
          />
        </div>
      </div>

      {!loading && detail && (
        <div className="mt-[20px] lg:mt-[100px] px-[15px] lg:px-0 flex flex-col justify-center items-center">
          <div className="w-full max-w-[1140px]">
            <h1 className="font-extrabold text-[28px] lg:text-[40px] text-tertiary text-center lg:text-left">
              {detail.title}
            </h1>
          </div>
          <div
            className="font-normal text-sm lg:text-xl text-justify max-w-[1140px] mt-[20px] lg:mt-[30px]"
            dangerouslySetInnerHTML={{ __html: detail.description }}
          />
        </div>
      )}

      <div className="mt-[50px] lg:mt-[100px] w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center max-w-[1140px]">
          <h1 className="font-extrabold text-[28px] lg:text-[40px] text-tertiary text-center lg:text-left">
            Lorem ipsum dolor
          </h1>
          <OpenEvidenceAutoSlider slideData={slideData} />
        </div>
      </div>
    </div>
  );
};

export default OpenEvidenceDetailPage;
