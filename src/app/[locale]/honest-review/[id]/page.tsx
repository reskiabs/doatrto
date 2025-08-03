import PrimaryButton from "@/components/button/PrimaryButton";
import { HonestReview } from "@/components/content/HonestReview";
import ImageGrid from "@/components/content/ImageGrid";
import DetailHeader from "@/components/typography/DetailHeader";
import Image from "next/image";

const HonestReviewDetailPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="Honest Review"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <div className="flex justify-between items-center gap-[50px] mt-[80px]">
          <div className="relative size-[555px] rounded-[50px] overflow-hidden mt-[50px]">
            <Image
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ozy Syahputra Photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[525px]">
            <h1 className="font-extrabold text-[40px] text-tertiary ">
              Ozy Syahputra
            </h1>
            <h2 className="font-semibold text-[40px] text-tertiary ">
              Takut Gelap dan Sendirian!
            </h2>
            <p className="font-normal text-justify text-xl my-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <PrimaryButton href="#" title="Watch Video" />
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mt-[100px]">
        <p className="font-normal text-justify text-xl ">
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
        <div className="my-[100px]">
          <ImageGrid />
        </div>

        <p className="font-normal text-justify text-xl max-w-[1140px]">
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
        </p>
      </div>

      <div>
        <HonestReview />
      </div>
    </div>
  );
};

export default HonestReviewDetailPage;
