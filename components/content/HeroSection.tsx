import { useHero } from "@/hooks/useHero"; // ganti import
import { useTranslations } from "next-intl";
import ContentLoader from "../common/ContentLoader";
import ImageCarousel from "../common/ImageCarousel";
import MainOutlineButton from "./MainOutlineButton";

const HeroSection = () => {
  const t = useTranslations("FeatureButtons");
  const { loading, error, allThumbnails } = useHero();

  if (error) return <div>{error}</div>;
  if (loading) return <ContentLoader />;

  return (
    <div className="flex flex-col justify-center items-center">
      <ImageCarousel images={allThumbnails || []} />

      <div className="flex w-[95%] lg:w-[97%] items-center gap-[10px] lg:gap-[18px] mt-[15px] lg:mt-[25px]">
        <MainOutlineButton href="/session" text={t("session")} />
        <MainOutlineButton href="/klasses" text={t("klasses")} />
        <MainOutlineButton href="/facilitators" text={t("facilitators")} />
      </div>
    </div>
  );
};

export default HeroSection;
