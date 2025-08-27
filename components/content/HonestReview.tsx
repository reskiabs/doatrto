"use client";

import { useHonestReviews } from "@/hooks/useHonestReviews";
import HonestReviewContent from "../common/HonestReviewContent";
import LoaderContent from "../common/LoaderContent";
import SomethingWentWrong from "../common/SomethingWentWrong";
import ContentTitle from "../typography/ContentTitle";
import { HonestReviewCard } from "../ui/honest-review/card";
import { HonestReviewCarousel } from "../ui/honest-review/carousel";

export function HonestReview() {
  const { reviews, loading, error } = useHonestReviews();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  const cards = reviews.map((review, index) => (
    <HonestReviewCard
      key={review.id}
      card={{
        name: review.name,
        review: review.title,
        src: review.thumbnail,
        content: <HonestReviewContent />,
        url: `/honest-review/${review.id}`,
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full mt-[30px] md:mt-[60px] lg:mt-[80px]">
      <div className="flex flex-col items-center -mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="honestReview" />
      </div>
      <HonestReviewCarousel items={cards} />
    </div>
  );
}
