import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-[30px] md:max-w-[1000px] lg:px-[150px] lg:max-w-[1440px] lg:mx-auto">
      {children}
    </div>
  );
};

export default Container;
