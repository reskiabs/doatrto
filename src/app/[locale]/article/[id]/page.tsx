"use client";

import NewsCard from "@/components/card/NewsCard";
import DetailTitle from "@/components/typography/DetailTitle";
import { useNewsDetail } from "@/hooks/useNewsDetail";
import { ImageDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { detail, related, loading, error } = useNewsDetail(id as string);

  if (loading) {
    return (
      <div className="relative w-[1140px] h-[641px] rounded-[50px] mt-[50px] overflow-hidden bg-surface flex justify-center items-center">
        <ImageDown className="animate-bounce text-muted" size={150} />
      </div>
    );
  }

  if (error || !detail) {
    return (
      <p className="text-center text-red-500 text-lg mt-10">
        Artikel tidak ditemukan.
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailTitle title={detail.title} />
        <div className="relative w-[1140px] h-[641px] rounded-[50px] overflow-hidden mt-[50px]">
          <Image
            src={detail.thumbnail || "/placeholder.jpg"}
            alt={detail.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-[100px] w-full flex flex-col justify-center items-center">
        <div
          className="font-normal text-justify text-xl max-w-[1140px] text-body prose"
          dangerouslySetInnerHTML={{ __html: detail.description }}
        />
      </div>

      <div className="mt-[100px] w-full flex flex-col justify-center items-center">
        <h1 className="text-[40px] font-medium text-tertiary mb-8">
          The Latest News from D.O.A TRTO
        </h1>
        <div className="w-full max-w-[1140px] mx-auto grid md:grid-cols-2 gap-6">
          {related.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              buttonText="Baca Selengkapnya"
              page="article"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
