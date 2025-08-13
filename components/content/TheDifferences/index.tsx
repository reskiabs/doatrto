"use client";

import ContentTitle from "../../typography/ContentTitle";
import { DifferentContinuousCarousel } from "./DifferentContinuousCarousel";
const TheDifferences = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="whatsTheDifferences" />
      </div>
      <DifferentContinuousCarousel />
    </main>
  );
};

export default TheDifferences;
