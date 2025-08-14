"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import { HonestReview } from "@/components/content/HonestReview";
import ImageGrid from "@/components/content/ImageGrid";
import DetailHeader from "@/components/typography/DetailHeader";
import { useHonestReviews } from "@/hooks/useHonestReviews";
import { splitDescription } from "@/lib/splitDescription";
import Image from "next/image";
import { useParams } from "next/navigation";

const HonestReviewDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { review, loading, error } = useHonestReviews(id);

  if (!review) return null;
  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  const { short, remaining } = splitDescription(review.description || "");

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[104px]">
        <DetailHeader titleKey="honestReview" descriptionKey="honestReview" />

        <div className="flex flex-col px-[15px] lg:-px-0 lg:flex-row justify-between gap-[20px] lg:gap-[50px] mt-[50px] lg:mt-[80px]">
          <div className="relative size-[372px] lg:size-[555px] rounded-[15px] lg:rounded-[25px] overflow-hidden bg-gray-300">
            <Image
              src={review.thumbnail}
              alt={review.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[365px] px-[5px] lg:px-0 lg:w-[525px] ">
            <h1 className="font-extrabold text-center lg:text-left text-[28px] lg:text-[40px] text-tertiary truncate">
              {review.name}
            </h1>
            <h2 className="font-semibold text-center lg:text-left text-sm lg:text-[40px] text-tertiary truncate">
              {review.title}
            </h2>
            <div
              className="font-normal text-justify text-sm lg:text-xl my-[20px] lg:my-[30px]"
              dangerouslySetInnerHTML={{
                __html: short,
              }}
            />
            <div className="flex justify-center lg:justify-start">
              <PrimaryButton href="#" titleKey="watchVideo" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mt-[50px] lg:mt-[100px]">
        {remaining && (
          <div
            className="font-normal px-[15px] lg:px-0 text-justify text-sm lg:text-xl my-[20px] lg:my-[30px]"
            dangerouslySetInnerHTML={{
              __html: remaining,
            }}
          />
        )}
        {Array.isArray(review?.images) && review.images.length > 0 && (
          <ImageGrid images={review.images} />
        )}
      </div>

      <div>
        <HonestReview />
      </div>
    </div>
  );
};

export default HonestReviewDetailPage;
