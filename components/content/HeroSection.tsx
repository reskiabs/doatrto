import { useHeroSection } from "@/hooks/useHeroSection";
import { ImageDown } from "lucide-react";
import { useTranslations } from "next-intl";
import ImageCarousel from "../common/ImageCarousel";
import MainOutlineButton from "./MainOutlineButton";

const HeroSection = () => {
  const t = useTranslations("FeatureButtons");
  const { loading, error, allThumbnails } = useHeroSection();

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col justify-center items-center">
      {loading ? (
        <div className="relative w-[95%] lg:w-[98.5%] lg:h-[770px] h-[482px] rounded-[20px] lg:rounded-[40px] overflow-hidden bg-surface flex justify-center items-center">
          <ImageDown className="animate-bounce  text-muted" size={150} />
        </div>
      ) : (
        <ImageCarousel images={allThumbnails} />
      )}

      <div className="flex w-[95%] lg:w-[97%] items-center gap-[10px] lg:gap-[18px] mt-[15px] lg:mt-[25px]">
        <MainOutlineButton href="/session" text={t("session")} />
        <MainOutlineButton href="/klasses" text={t("klasses")} />
        <MainOutlineButton href="/facilitators" text={t("facilitators")} />
      </div>
    </div>
  );
};

export default HeroSection;
