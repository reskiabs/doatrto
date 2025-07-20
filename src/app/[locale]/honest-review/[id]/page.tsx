import { HonestReview } from "@/components/content/HonestReview";
import PageHeader from "@/components/typography/PageHeader";
import Image from "next/image";

const HonestReviewDetailPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <PageHeader pageTitle="Honest Review" detailTitle="Ozy Syahputra" />
        <div className="relative w-[1140px] h-[641px] rounded-[50px] overflow-hidden mt-[50px]">
          <Image
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ozy Syahputra Photo"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-[100px] w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1140px]">
          <h1 className="font-extrabold text-[40px] text-tertiary text-left">
            Takut Gelap dan Sendirian!
          </h1>
        </div>
        <p className="font-normal text-justify text-2xl max-w-[1140px] mt-[30px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div>
        <HonestReview />
      </div>
    </div>
  );
};

export default HonestReviewDetailPage;
