"use client";

import { useHonestReviews } from "@/hooks/useHonestReviews";
import ContentLoader from "../common/ContentLoader";
import HonestReviewContent from "../common/HonestReviewContent";
import ContentTitle from "../typography/ContentTitle";
import { HonestReviewCard } from "../ui/honest-review/card";
import { HonestReviewCarousel } from "../ui/honest-review/carousel";

export function HonestReview() {
  const { reviews, loading, error } = useHonestReviews();

  if (loading) {
    return <ContentLoader />;
  }

  if (error) return <div className="text-center text-red-500">{error}</div>;

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
    <div className="w-full h-full mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col items-center -mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="honestReview" />
      </div>
      <HonestReviewCarousel items={cards} />
    </div>
  );
}
