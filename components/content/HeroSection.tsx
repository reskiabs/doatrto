import Image from "next/image";
import MainOutlineButton from "./MainOutlineButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[98.5%] h-[900px] bg-secondary rounded-[40px] overflow-hidden">
        <Image
          src="/images/main-banner.jpg"
          alt="Hero Section"
          fill
          className="object-cover"
        />
      </div>
      <div className="pt-[15px] flex w-[97%] items-center gap-[18px] mt-[18px]">
        <MainOutlineButton text="Session" />
        <MainOutlineButton text="Klasses" />
        <MainOutlineButton text="Facilitators" />
      </div>
    </div>
  );
};

export default HeroSection;
