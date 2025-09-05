"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import DetailTitle from "@/components/typography/DetailTitle";
import { useTrustTransparencyOptimized } from "@/hooks/optimized/useTrustTransparencyOptimized";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export default function TrustAndTransparencyDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { items, loading, error } = useTrustTransparencyOptimized();

  const detail = useMemo(() => {
    if (!id || Array.isArray(id)) return undefined;
    return items.find((item) => item.id.toString() === id);
  }, [items, id]);

  useEffect(() => {
    if (!loading && !detail) {
      router.replace("/not-found");
    }
  }, [loading, detail, router]);

  if (!detail) return null;
  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px] px-[31px] lg:px-0">
        <DetailTitle title={detail.title} href="/trust-and-transparency" />
        <div className="relative w-[340px] lg:w-[1140px] h-[170px] lg:h-[641px] rounded-[15px] lg:rounded-[25px] overflow-hidden mt-[20px] lg:mt-[50px]">
          <Image
            src={detail.thumbnail}
            alt={detail.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-[20px] lg:mt-[50px] w-full flex flex-col justify-center items-center px-[31px] lg:px-0">
        <div
          dangerouslySetInnerHTML={{ __html: detail.description }}
          className="font-normal text-justify text-md lg:text-xl max-w-[1140px] text-body"
        />
      </div>
    </div>
  );
}
