"use client";

import OpenEvidenceAutoSlider from "@/components/content/OpenEvidenceAutoSlider";
import DetailHeader from "@/components/typography/DetailHeader";
import { useOpenEvidenceDetail } from "@/hooks/useOpenEvidenceDetail";
import { useOpenEvidenceList } from "@/hooks/useOpenEvidenceList";
import { useParams } from "next/navigation";

const OpenEvidenceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { detail, loading } = useOpenEvidenceDetail(id);
  const { list } = useOpenEvidenceList();

  const slideData = list.map((item) => ({
    src: item.thumbnail,
  }));

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          titleKey="openEvidenceBasedSystem"
          descriptionKey="openEvidenceBasedSystem"
        />
        <div className="relative size-[372px] lg:w-[1140px] bg-surface lg:h-[641px] rounded-[15px] lg:rounded-[30px] overflow-hidden mt-[50px]">
          <div
            className="w-full aspect-video"
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
