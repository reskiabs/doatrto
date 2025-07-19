import Image from "next/image";
import MainOutlineButton from "./MainOutlineButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[98.5%] h-[700px] bg-secondary rounded-[40px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1707236127389-97b2e57e3915?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Section"
          fill
          className="object-cover"
        />
      </div>
      <div className="py-[15px] flex w-[97%] items-center gap-[18px] mt-[18px]">
        <MainOutlineButton text="Session" />
        <MainOutlineButton text="Klasses" />
        <MainOutlineButton text="Facilitators" />
      </div>
    </div>
  );
};

export default HeroSection;
