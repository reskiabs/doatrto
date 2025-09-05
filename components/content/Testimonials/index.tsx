"use client";

import PrimaryButton from "@/components/button/PrimaryButton";
import { memo } from "react";
import ContentTitle from "../../typography/ContentTitle";
import { InfiniteVerticalCards } from "./InfiniteVerticalCards";

const Testimonials = memo(() => {
  return (
    <main className="mt-[30px] md:mt-[60px] lg:mt-[80px] bg-gradient-to-b from-white via-[#EBF0F8] to-white">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="testimonials" />
      </div>
      <InfiniteVerticalCards />
      <div className="flex flex-col justify-center items-center mt-[20px] lg:mt-[30px]">
        <PrimaryButton titleKey="seeMore" href="/testimonial" />
      </div>
    </main>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
