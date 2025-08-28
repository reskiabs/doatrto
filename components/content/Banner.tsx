import { useBanner } from "@/hooks/useBanner";
import { useTranslations } from "next-intl";
import ImageCarousel from "../common/ImageCarousel";
import LoaderContent from "../common/LoaderContent";
import SomethingWentWrong from "../common/SomethingWentWrong";
import MainOutlineButton from "./MainOutlineButton";

const Banner = () => {
  const t = useTranslations("FeatureButtons");
  const { loading, error, allThumbnails } = useBanner();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <div className="flex flex-col justify-center items-center">
      <ImageCarousel images={allThumbnails || []} />

      <div className="flex w-[90%] lg:w-[90%] items-center gap-[12px] lg:gap-[22px] mt-[30px] md:mt-[60px] lg:mt-[80px]">
        <MainOutlineButton href="/session" text={t("session")} />
        <MainOutlineButton href="/klasses" text={t("klasses")} />
        <MainOutlineButton href="/facilitators" text={t("facilitators")} />
      </div>
    </div>
  );
};

export default Banner;
