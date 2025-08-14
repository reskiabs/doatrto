"use client";

import NewsCard from "@/components/card/NewsCard";
import { DescriptionSkeleton } from "@/components/common/skeleton/DescriptionSkeleton";
import ImageLoading from "@/components/common/skeleton/ImageLoading";
import DetailTitle from "@/components/typography/DetailTitle";
import { useNewsDetail } from "@/hooks/useNewsDetail";
import Image from "next/image";
import { useParams } from "next/navigation";

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { detail, related, loading, error } = useNewsDetail(id as string);

  if (error || !detail) {
    return (
      <p className="text-center text-red-500 text-lg mt-10">
        Artikel tidak ditemukan.
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px] px-[31px] lg:px-0">
        <DetailTitle title={detail.title} href="/trust-and-transparency" />
        <div className="relative w-[340px] lg:w-[1140px] h-[170px] lg:h-[641px] rounded-[15px] lg:rounded-[25px] overflow-hidden mt-[20px] lg:mt-[50px]">
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
        <div className="w-full flex flex-col justify-center items-center">
          {loading ? (
            <DescriptionSkeleton />
          ) : (
            <div
              className="font-normal text-justify text-md lg:text-xl max-w-[1140px] text-body"
              dangerouslySetInnerHTML={{ __html: detail.description }}
            />
          )}
        </div>

        <div className="mt-[20px] lg:mt-[50px] w-full flex flex-col justify-center items-center">
          <h1 className="text-[28px] lg:text-[40px] font-medium text-tertiary mb-8">
            The Latest News from D.O.A TRTO
          </h1>
          <div className="w-full max-w-[1140px] mx-auto grid md:grid-cols-2 gap-6">
            {related.map((item) => (
              <NewsCard
                key={item.id}
                item={item}
                buttonTextKey="readMore"
                page="article"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
