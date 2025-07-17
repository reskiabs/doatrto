import DesktopBanner from "@/public/images/desktop-banner.png";
import MobileBanner from "@/public/images/mobile-banner.png";
import Image from "next/image";
import MainOutlineButton from "./MainOutlineButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Mobile only */}
      <Image
        src={MobileBanner}
        alt="Mobile Banner"
        className="block md:hidden"
        priority
      />
      {/* Desktop only */}
      <Image
        src={DesktopBanner}
        alt="Desktop Banner"
        className="hidden md:block"
        priority
      />
      <div className="py-[15px] flex items-center gap-2.5">
        <MainOutlineButton text="Session" />
        <MainOutlineButton text="Klasses" />
        <MainOutlineButton text="Facilitators" />
      </div>
    </div>
  );
};

export default HeroSection;
