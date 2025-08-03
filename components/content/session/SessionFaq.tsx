import React from "react";

const SessionFaq = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1140px] mx-auto mt-[100px] flex items-center gap-[30px]">
      <div>
        <h1 className="font-medium text-[40px] text-tertiary mb-5">
          Frequently Asked Questions
        </h1>
        <p className="font-normal text-xl">
          Lebih dari 500 orang sudah terbantu dan merasakan kebahagiaan dengan
          Divine Oracular Assistance Tension Releasing Technique Online
        </p>
      </div>
      <div className="space-y-5 max-w-[555px]">{children}</div>
    </div>
  );
};

export default SessionFaq;
