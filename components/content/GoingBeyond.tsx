"use client";

import Flower from "@/public/images/beyond1.svg";
import Eye from "@/public/images/beyond2.svg";
import Repeated from "@/public/images/beyond3.svg";
import Lightning from "@/public/images/beyond4.svg";
import Violently from "@/public/images/beyond5.svg";
import Heal from "@/public/images/beyond6.svg";
import { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import BeyondCardList from "../card/BeyondCardList";
import ContentTitle from "../typography/ContentTitle";

type Item = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
};

const data: Item[] = [
  {
    id: 1,
    title: "Non Root Cause Processing",
    description: "Lorem Ipsum is simply dummy text...",
    image: Flower,
  },
  {
    id: 2,
    title: "Stage of Liberation",
    description: "Lorem Ipsum is simply dummy text...",
    image: Eye,
  },
  {
    id: 3,
    title: "Repeated, Consistent Result",
    description: "Lorem Ipsum is simply dummy text...",
    image: Repeated,
  },
  {
    id: 4,
    title: "Totally Measured and Calibrated Process",
    description: "Lorem Ipsum is simply dummy text...",
    image: Lightning,
  },
  {
    id: 5,
    title: "Violently Test & Recheck",
    description: "Lorem Ipsum is simply dummy text...",
    image: Violently,
  },
  {
    id: 6,
    title: "Heal the Amygdala Automatic Response",
    description: "Lorem Ipsum is simply dummy text...",
    image: Heal,
  },
];

const GoingBeyond = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth * 0.17;
    }
  }, []);

  return (
    <main className="flex flex-col items-center w-full mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="w-full flex flex-col items-center lg:max-w-[1140px]">
        <div className="flex flex-col items-center mb-[20px] lg:mb-[30px]">
          <ContentTitle title="Beyond Conventional Therapies" />
        </div>

        <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide">
          <div className="grid grid-cols-3 gap-3.5 lg:gap-6 min-w-max snap-x snap-mandatory">
            {data.map((item) => (
              <div key={item.id} className="snap-start">
                <BeyondCardList
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoingBeyond;
