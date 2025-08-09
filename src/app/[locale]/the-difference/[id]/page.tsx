"use client";

import DetailHeader from "@/components/typography/DetailHeader";
import { useMobileScrollOffset } from "@/hooks/useMobileScrollOffset";
import { useTheDifferences } from "@/hooks/useTheDifferences";
import { ImageDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const TheDifferenceDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const { items, loading } = useTheDifferences();
  const detail = items.find((item) => item.id.toString() === id);
  const scrollRef = useMobileScrollOffset(0.22, [detail]);

  const hasImages = Array.isArray(detail?.images) && detail.images.length > 0;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          title="The Differences"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        {/* Thumbnail */}
        {loading ? (
          <div className="relative size-[372px] lg:w-[1140px] lg:h-[641px] rounded-[15px] lg:rounded-[50px] mt-[50px] overflow-hidden bg-surface flex justify-center items-center">
            <ImageDown className="animate-bounce text-muted" size={150} />
          </div>
        ) : (
          <div className="relative size-[372px] lg:w-[1140px] lg:h-[641px] rounded-[15px] lg:rounded-[50px] overflow-hidden mt-[50px]">
            {detail?.thumbnail && (
              <Image
                src={detail.thumbnail}
                alt={detail.title || "The Difference Thumbnail"}
                fill
                priority
                className="object-cover"
              />
            )}
          </div>
        )}
      </div>

      {/* Deskripsi */}
      {!loading && detail && (
        <div className="mt-[20px] lg:mt-[100px] px-[15px] lg:px-0 flex flex-col justify-center items-center">
          <div className="w-full max-w-[1140px]">
            <h1 className="font-extrabold text-[28px] lg:text-[40px] text-tertiary text-center lg:text-left">
              Description
            </h1>
          </div>
          <div
            className="font-normal text-sm lg:text-xl text-center lg:text-justify max-w-[1140px] mt-[20px] lg:mt-[30px]"
            dangerouslySetInnerHTML={{ __html: detail.description }}
          />
        </div>
      )}

      {/* Galeri Gambar */}
      {hasImages && (
        <div
          ref={scrollRef}
          className="my-[50px] lg:my-[100px] px-2.5 lg:px-0 overflow-x-auto scrollbar-hide"
        >
          <div className="grid grid-cols-3 gap-[10px] lg:gap-[30px] min-w-max snap-x snap-mandatory">
            {detail?.images.slice(0, 3).map((image: string, index: number) => (
              <div
                key={index}
                className="relative size-[250px] lg:size-[360px] rounded-[15px] lg:rounded-[25px] overflow-hidden bg-gray-300 snap-start"
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
  );
};

export default TheDifferenceDetailPage;
