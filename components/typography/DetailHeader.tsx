import { useTranslations } from "next-intl";

interface DetailHeaderProps {
  titleKey: string;
  descriptionKey: string;
}

const DetailHeader = ({ titleKey, descriptionKey }: DetailHeaderProps) => {
  const t = useTranslations("DetailHeader");

  return (
    <div className="flex flex-col items-center px-[15px] lg:px-0 space-y-5 max-w-[1140px]">
      <h1 className="text-tertiary text-center font-bold text-[36px] lg:text-[50px]">
        {t(`${titleKey}.title`)}
      </h1>
      <h1 className="text-tertiary font-normal text-[15px] lg:text-[25px] text-center">
        {t(`${descriptionKey}.description`)}
      </h1>
    </div>
  );
};

export default DetailHeader;
