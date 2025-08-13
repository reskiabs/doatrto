import { TimelineCRA } from "@/components/content/TimelineCRA";
import DetailHeader from "@/components/typography/DetailHeader";
import Image from "next/image";

const StoryOfCRA = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader titleKey="storyOfCra" descriptionKey="storyOfCra" />
        <div className="relative size-[372px] lg:w-[1140px] lg:h-[641px] rounded-[15px] lg:rounded-[50px] overflow-hidden mt-[50px] lg:mt-[100px]">
          <Image
            src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Story of CRA"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-[50px] lg:mt-[100px] w-full flex flex-col justify-center items-center">
        <TimelineCRA />
      </div>
    </div>
  );
};

export default StoryOfCRA;
