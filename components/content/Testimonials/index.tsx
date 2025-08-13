"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import ContentTitle from "../../typography/ContentTitle";
import { InfiniteVerticalCards } from "./InfiniteVerticalCards";
const Testimonials = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px] bg-gradient-to-b from-white via-[#EBF0F8] to-white">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="testimonials" />
      </div>
      <InfiniteVerticalCards />
      <div className="flex flex-col justify-center items-center mt-[20px] lg:mt-[30px]">
        <PrimaryButton titleKey="seeMore" href="/testimonial" />
      </div>
    </main>
  );
};

export default Testimonials;
