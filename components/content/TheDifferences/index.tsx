"use client";

import ContentTitle from "../../typography/ContentTitle";
import { DifferentContinuousCarousel } from "./DifferentContinuousCarousel";
const TheDifferences = () => {
  return (
    <main className="mt-2.5 md:mt-0">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="whatsTheDifferences" />
      </div>
      <DifferentContinuousCarousel />
    </main>
  );
};

export default TheDifferences;
