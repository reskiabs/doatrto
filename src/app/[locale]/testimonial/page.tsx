"use client";

import { InfiniteVerticalCards } from "@/components/content/Testimonials/InfiniteVerticalCards";
import { ContinuousCarousel } from "@/components/content/TrustedByMedicalExpert/ContinuousCarousel";
import DetailHeader from "@/components/typography/DetailHeader";
import clsx from "clsx";
import { useState } from "react";

const buttonList = [
  { id: 1, title: "Semua" },
  { id: 2, title: "Anxiety" },
  { id: 3, title: "Overthinking" },
  { id: 4, title: "Trauma" },
];

const Testimonial = () => {
  const [buttonActive, setButtonActive] = useState(1);

  const handleButtonClick = (id: number) => {
    setButtonActive(id);
  };

  return (
    <div>
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="Testimonial"
          description="Lebih dari 500 orang sudah terbantu dan merasakan kebahagiaan
dengan Divine Oracular Assistance Tension Releasing Technique Online"
        />
        <InfiniteVerticalCards />
      </div>

      {/* Filter Buttons */}
      <div className="mt-[100px] mb-[50px] w-full flex flex-col justify-center items-center">
        <div className="max-w-[700px] ">
          <h1 className="text-tertiary font-bold text-[40px] text-center">
            100+ of the world’s top programs for personal growth and
            transformation
          </h1>
          <div className="flex items-center justify-between mt-[20px] gap-4 flex-wrap">
            {buttonList.map((item) => (
              <button
                key={item.id}
                onClick={() => handleButtonClick(item.id)}
                className={clsx(
                  "font-medium text-lg px-[40px] py-4 rounded-full transition-all duration-500 ease-in-out transform",
                  buttonActive === item.id
                    ? "text-white bg-secondary shadow-xl scale-105"
                    : "text-secondary bg-transparent hover:bg-secondary/10 hover:scale-105"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ContinuousCarousel />
    </div>
  );
};

export default Testimonial;
