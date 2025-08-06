"use client";

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
    return items.find((item) => item.id.toString() === id);
  }, [items, id]);

  useEffect(() => {
    if (!loading && !detail) {
      router.replace("/not-found");
    }
  }, [loading, detail, router]);

  if (loading) {
    return (
      <div className="relative w-[1140px] h-[641px] rounded-[50px] mt-[50px] overflow-hidden bg-surface flex justify-center items-center">
        <ImageDown className="animate-bounce text-muted" size={150} />
      </div>
    );
  }

  if (!detail) return null;

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailTitle title={detail.title} />
        <div className="relative w-[1140px] h-[641px] rounded-[50px] overflow-hidden mt-[50px]">
          <Image
            src={detail.thumbnail}
            alt={detail.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-[100px] w-full flex flex-col justify-center items-center">
        <div
          dangerouslySetInnerHTML={{ __html: detail.description }}
          className="font-normal text-justify text-xl max-w-[1140px] text-body"
        ></div>
      </div>
    </div>
  );
}
