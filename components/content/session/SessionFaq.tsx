import React from "react";

const SessionFaq = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1140px] px-[15px] lg:px-0 mx-auto mt-[50px] lg:mt-[100px] flex-col lg:flex-row flex items-center gap-[15px] lg:gap-[30px]">
      <div>
        <h1 className="font-medium text-center lg:text-left text-[28px] lg:text-[40px] text-tertiary mb-2.5 lg:mb-5">
          Frequently Asked Questions
        </h1>
        <p className="text-sm lg:text-xl font-normal text-center lg:text-left ">
          Lebih dari 500 orang sudah terbantu dan merasakan kebahagiaan dengan
          Divine Oracular Assistance Tension Releasing Technique Online
        </p>
      </div>
      <div className="space-y-5 max-w-[555px]">{children}</div>
    </div>
  );
};

export default SessionFaq;
