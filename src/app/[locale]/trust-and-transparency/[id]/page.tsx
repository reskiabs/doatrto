"use client";

import { DescriptionSkeleton } from "@/components/common/skeleton/DescriptionSkeleton";
import ImageLoading from "@/components/common/skeleton/ImageLoading";
import DetailTitle from "@/components/typography/DetailTitle";
import { useTrustTransparency } from "@/hooks/useTrustTransparency";
import { ImageDown } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function TrustAndTransparencyDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { items, loading } = useTrustTransparency();

  const detail = useMemo(() => {
    if (!id || Array.isArray(id)) return undefined;
    return items.find((item) => item.id.toString() === id);
  }, [items, id]);

  useEffect(() => {
    if (!loading && !detail) {
      router.replace("/not-found");
    }
  }, [loading, detail, router]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px] px-[31px] lg:px-0">
        <div className="relative w-[340px] lg:w-[1140px] h-[170px] flex justify-center items-center bg-surface lg:h-[641px] rounded-[15px] lg:rounded-[30px] overflow-hidden mt-[20px] lg:mt-[50px]">
          <ImageDown className="animate-bounce text-muted" size={150} />
        </div>
      </div>
    );
  }

  if (!detail) return null;

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px] px-[31px] lg:px-0">
        <DetailTitle title={detail.title} href="/trust-and-transparency" />
        <div className="relative w-[340px] lg:w-[1140px] h-[170px] lg:h-[641px] rounded-[15px] lg:rounded-[30px] overflow-hidden mt-[20px] lg:mt-[50px]">
          {loading ? (
            <ImageLoading />
          ) : (
            <Image
              src={detail.thumbnail}
              alt={detail.title}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
      <div className="mt-[20px] lg:mt-[50px] w-full flex flex-col justify-center items-center px-[31px] lg:px-0">
        {loading ? (
          <DescriptionSkeleton />
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: detail.description }}
            className="font-normal text-justify text-md lg:text-xl max-w-[1140px] text-body"
          />
        )}
      </div>
    </div>
  );
}
