import ImageCarousel from "../common/ImageCarousel";
import MainOutlineButton from "./MainOutlineButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ImageCarousel />
      <div className="pt-[15px] flex w-[97%] items-center gap-[18px] mt-[10px]">
        <MainOutlineButton text="Session" />
        <MainOutlineButton text="Klasses" />
        <MainOutlineButton text="Facilitators" />
      </div>
    </div>
  );
};

export default HeroSection;
