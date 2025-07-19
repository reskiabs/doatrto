"use client";

import ContentTitle from "../../typography/ContentTitle";
import { InfiniteVerticalCards } from "./InfiniteVerticalCards";
const Testimonials = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px] bg-gradient-to-b from-white via-[#EBF0F8] to-white">
      <div className="flex flex-col justify-center items-center mb-8">
        <ContentTitle title="Testimonials" />
      </div>
      <InfiniteVerticalCards />
    </main>
  );
};

export default Testimonials;
