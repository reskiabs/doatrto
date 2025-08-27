"use client";

import { useTranslations } from "next-intl";

interface ContentTitleProps {
  titleKey: string;
  showDescription?: boolean;
}

const ContentTitle = ({
  titleKey,
  showDescription = true,
}: ContentTitleProps) => {
  const t = useTranslations("ContentTitle");

  return (
    <div className="mx-2.5 lg:max-w-[1140px]">
      {/* Subtitle */}
      <p className="text-sm lg:text-xl text-gray-400 text-center font-medium">
        {t(`${titleKey}.subtitle`)}
      </p>

      {/* Title */}
      <h1 className="text-accent font-extrabold text-[28px] text-center lg:text-[40px]">
        {t(`${titleKey}.title`)}
      </h1>

      {/* Description */}
      {showDescription && (
        <p className="hidden lg:block text-xl text-gray-400 text-center font-normal">
          {t(`${titleKey}.description`)}
        </p>
      )}
    </div>
  );
};

export default ContentTitle;
