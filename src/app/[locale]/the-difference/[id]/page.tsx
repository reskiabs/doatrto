"use client";

import PageHeader from "@/components/typography/PageHeader";
import { useTheDifferences } from "@/hooks/useTheDifferences";
import { ImageDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const TheDifferenceDetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const { items, loading } = useTheDifferences();
  const detail = items.find((item) => item.id.toString() === id);

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <PageHeader
          pageTitle="THE DIFFERENCE"
          detailTitle={detail?.title || "The Difference Detail"}
        />

        {/* Thumbnail */}
        {loading ? (
          <div className="relative w-[1140px] h-[641px] rounded-[50px] mt-[50px] overflow-hidden bg-surface flex justify-center items-center">
            <ImageDown className="animate-bounce text-muted" size={150} />
          </div>
        ) : (
          <div className="relative w-[1140px] h-[641px] rounded-[50px] overflow-hidden mt-[50px]">
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
        <div className="mt-[100px] w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[1140px]">
            <h1 className="font-extrabold text-[40px] text-tertiary text-left">
              Description
            </h1>
          </div>
          <div
            className="font-normal text-justify text-2xl max-w-[1140px] mt-[30px]"
            dangerouslySetInnerHTML={{ __html: detail.description }}
          />
        </div>
      )}

      {/* Galeri Gambar */}
      {!loading &&
        Array.isArray(detail?.images) &&
        detail.images.length > 0 && (
          <div className="w-full mt-[100px] flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-[30px] max-w-[1140px]">
              {detail.images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-[555px] h-[312px] rounded-[25px] overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Difference image ${i + 1}`}
                    fill
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
