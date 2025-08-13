"use client";

import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface PrimaryButtonProps {
  titleKey: string;
  subtitleKey?: string;
  href?: string;
}

const PrimaryButton = ({
  titleKey,
  subtitleKey,
  href = "#",
}: PrimaryButtonProps) => {
  const t = useTranslations("button");

  return (
    <Link
      href={href}
      className="inline-flex items-center px-6 py-3 lg:py-4 rounded-full text-white font-medium text-xs lg:text-lg bg-gradient-to-r from-secondary to-primary hover:cursor-pointer"
    >
      {subtitleKey && (
        <>
          <span className="hidden lg:block">{t(subtitleKey)}</span>
          <span className="hidden lg:block mx-4 h-6 w-px bg-white opacity-50"></span>
        </>
      )}
      <span className="flex items-center gap-2.5">
        {t(titleKey)} <MoveRight size={20} />
      </span>
    </Link>
  );
};

export default PrimaryButton;
