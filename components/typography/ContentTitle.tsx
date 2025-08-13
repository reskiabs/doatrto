"use client";

import { useTranslations } from "next-intl";

interface ContentTitleProps {
  titleKey: string;
}

const ContentTitle = ({ titleKey }: ContentTitleProps) => {
  const t = useTranslations("ContentTitle");

  return (
    <p className="text-accent font-extrabold text-[28px] mx-2.5 lg:mx-0 text-center lg:text-[40px]">
      {t(titleKey)}
    </p>
  );
};

export default ContentTitle;
