import HonestReviewContent from "@/components/common/HonestReviewContent";
import DetailHeader from "@/components/typography/DetailHeader";
import { HonestReviewCard } from "@/components/ui/honest-review/card";
import { HonestReviewCarousel } from "@/components/ui/honest-review/carousel";

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
const FacilitatorsPage = () => {
  const cards = data.map((card, index) => (
    <HonestReviewCard key={card.src} card={card} index={index} />
  ));
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-[100px] bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="Facilitators"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>
      <HonestReviewCarousel items={cards} />
    </div>
  );
};

export default FacilitatorsPage;
