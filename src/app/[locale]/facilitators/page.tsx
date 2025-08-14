"use client";

import ContentLoader from "@/components/common/ContentLoader";
import HonestReviewContent from "@/components/common/HonestReviewContent";
import DetailHeader from "@/components/typography/DetailHeader";
import { HonestReviewCard } from "@/components/ui/honest-review/card";
import { HonestReviewCarousel } from "@/components/ui/honest-review/carousel";
import { useFeatureFacilitator } from "@/hooks/useFeatureFacilitator";

const FacilitatorsPage = () => {
  const { facilitators, loading, error } = useFeatureFacilitator();

  const cards = facilitators.map((facilitator, index) => ({
    name: facilitator.name,
    review: facilitator.role, // sudah localized via hook
    src: facilitator.image,
    content: <HonestReviewContent />,
    url: `/honest-review/${facilitator.id}`,
  }));

  if (loading) return <ContentLoader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-[50px] md:mb-[80px] lg:mb-[100px] bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader titleKey="facilitator" descriptionKey="facilitator" />
      </div>

      {!loading && (
        <HonestReviewCarousel
          items={cards?.map((card, i) => (
            <HonestReviewCard key={card.src} card={card} index={i} />
          ))}
        />
      )}
    </div>
  );
};

export default FacilitatorsPage;
