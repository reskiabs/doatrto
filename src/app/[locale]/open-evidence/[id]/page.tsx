"use client";

import PageHeader from "@/components/typography/PageHeader";
import { useOpenEvidenceDetail } from "@/hooks/useOpenEvidenceDetail";
import { useOpenEvidenceList } from "@/hooks/useOpenEvidenceList";
import Image from "next/image";
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
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <PageHeader
          pageTitle="OPEN EVIDENCE BASED SYSTEM"
          detailTitle={detail?.title || "Open Evidence Based System"}
        />
        <div className="relative w-[1140px] h-[641px] rounded-[50px] overflow-hidden mt-[50px]">
          <div
            className="w-full aspect-video rounded-[10px] overflow-hidden"
            dangerouslySetInnerHTML={{ __html: detail?.video || "" }}
          />
        </div>
      </div>
      <div className="mt-[100px] w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1140px]">
          <h1 className="font-extrabold text-[40px] text-tertiary text-left">
            Lorem ipsum dolor
          </h1>
          <div className="grid grid-cols-3 gap-[30px] mt-5">
            {slideData.map((item, index) => (
              <div
                key={index}
                className="relative w-[360px] h-[202px] rounded-[10px] overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt="Open Evidence Based System"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenEvidenceDetailPage;
