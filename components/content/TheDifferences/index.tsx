"use client";

import ContentTitle from "../../typography/ContentTitle";
import { DifferentContinuousCarousel } from "./DifferentContinuousCarousel";
const TheDifferences = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-8">
        <ContentTitle title="What’s The Differences?" />
      </div>
      <DifferentContinuousCarousel />
    </main>
  );
};

export default TheDifferences;
