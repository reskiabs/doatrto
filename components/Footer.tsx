import Image from "next/image";
import { LogoPlaceholder } from "../lib/helper/ImagePlacholder";

const Footer = () => {
  return (
    <div className="w-full">
      {/* main footer */}
      <div className="bg-gradient-to-b from-primary to-tertiary w-full h-[163px] flex flex-col justify-center items-center lg:h-[319px]">
        <h1 className="font-medium text-3xl text-white lg:text-[70px]">
          Try it right now
        </h1>
        <p className="font-medium text-2xs text-neutral-400 mt-1 mb-2.5 lg:text-xl lg:mt-5 lg:mb-7">
          Upgrade Your Mind. Elevate Your Life. Shape the Future.
        </p>
        {/* buttons */}
        <div className="flex items-center gap-[10px] lg:gap-5">
          <button className="bg-gradient-to-r from-white to-[#EEEEEE] text-secondary text-2xs font-medium py-3.5 px-[22px] rounded-full lg:text-lg lg:py-[19px] lg:px-[30px]">
            Book a Session
          </button>
          <button className="border border-[#DDDDDD] text-white text-2xs font-medium py-3.5 px-[22px] rounded-full lg:text-lg lg:py-[19px] lg:px-[30px] lg:border-2">
            Pelajari Metode
          </button>
        </div>
      </div>
      {/* bottom footer */}
      <div className="bg-white w-full h-[369px] px-[15px] lg:h-[328px] lg:px-[150px]">
        <div className="w-full flex justify-center lg:justify-start h-[327px] pt-[30px] lg:h-[270px]">
          {/* logo */}
          <div className="relative w-[120px] h-[50px] lg:w-[250px] lg:h-[102px]">
            <Image
              src="logo.svg"
              alt="Logo"
              fill
              blurDataURL={LogoPlaceholder}
              placeholder="blur"
            />
          </div>
          <div></div>
        </div>
        {/* copyright */}
        <div className="border-t border-neutral-400 flex items-center justify-center py-[15px] lg:justify-start">
          <p className="text-2xs text-body font-medium lg:text-md">
            © 2025, All right reserved, DOA TRTO
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
