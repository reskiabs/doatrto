import ImageGrid from "@/components/content/ImageGrid";
import DetailHeader from "@/components/typography/DetailHeader";
import { gridImages } from "@/data/grid-image";

const WhenDoaEffectivePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          title="When DOA System is Effective?"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <div className="mt-[50px] lgmt-[100px]">
          <ImageGrid images={gridImages} />
        </div>
      </div>
      <div className="mt-[50px] lg:mt-[100px] px-[15px] lg:px-0 w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[1140px]">
          <h1 className="font-extrabold text-left text-[28px] lg:text-[40px] text-tertiary">
            Lorem ipsum dolor sit amet
          </h1>
        </div>
        <p className="font-normal text-justify text-sm lg:text-xl max-w-[1140px] mt-[20px] lg:mt-[30px]">
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
          and scrambled it to make a type specimen book.
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default WhenDoaEffectivePage;
