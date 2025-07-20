"use client";

import HonestReviewContent from "../common/HonestReviewContent";
import { HonestReviewCard } from "../ui/honest-review/card";
import { HonestReviewCarousel } from "../ui/honest-review/carousel";

const data = [
  {
    name: "OZY SYAHPUTRA",
    review: "Takut Gelap dan Sendirian!",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <HonestReviewContent />,
    url: "/honest-review/1",
  },
  {
    name: "TIGRIS VALERIE",
    review: "Overthinking, beban - hilang!",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <HonestReviewContent />,
    url: "/honest-review/2",
  },
  {
    name: "CHRISTIE BASIL",
    review: "Atasi Overthinking, beres!",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <HonestReviewContent />,
    url: "/honest-review/3",
  },

  {
    name: "MAYA SEPTHA",
    review: "Sekarang sudah lega!",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <HonestReviewContent />,
    url: "/honest-review/4",
  },
  {
    name: "MELISSA HAYDEN",
    review: "Atasi Overthinking, beban - hilang!",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <HonestReviewContent />,
    url: "/honest-review/5",
  },
  {
    name: "DARYL MCKEAN",
    review: "Overthinking, beban - hilang!",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <HonestReviewContent />,
    url: "/honest-review/6",
  },
];

export function HonestReview() {
  const cards = data.map((card, index) => (
    <HonestReviewCard key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <h2 className="max-w-7xl pl-4 mx-auto text-[40px] font-extrabold text-secondary font-sans">
        Honest Review
      </h2>
      <HonestReviewCarousel items={cards} />
    </div>
  );
}
