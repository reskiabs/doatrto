"use client";

import ImageGrid from "@/components/content/ImageGrid";
import DetailHeader from "@/components/typography/DetailHeader";
import { useInformationalPagesOptimized } from "@/hooks/optimized/useInformationalPagesOptimized";
import { memo } from "react";
import LoaderContent from "../common/LoaderContent";
import SomethingWentWrong from "../common/SomethingWentWrong";

interface InformationalDetailPageProps {
  pageId: number;
  headerTitle: string;
  headerDescription: string;
}

const InformationalDetailPage: React.FC<InformationalDetailPageProps> = memo(({
  pageId,
  headerTitle,
  headerDescription,
}) => {
  const { item, loading, error } = useInformationalPagesOptimized();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  const data = item.find((d) => d.id === pageId);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-[300px] text-gray-500">
        No data available.
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          titleKey={headerTitle}
          descriptionKey={headerDescription}
        />
        {data.images?.length > 0 && (
          <div className="mt-[20px] lg:mt-[50px] overflow-x-auto w-full">
            <ImageGrid images={data.images} />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-[50px] lg:mt-[100px] px-[15px] lg:px-0 w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1140px]">
          <h1 className="font-extrabold text-left text-[28px] lg:text-[40px] text-tertiary">
            {data.title}
          </h1>
        </div>
        <div
          className="font-normal text-justify text-sm lg:text-xl max-w-[1140px] mt-[20px] lg:mt-[30px]"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
});

InformationalDetailPage.displayName = 'InformationalDetailPage';

export default InformationalDetailPage;
