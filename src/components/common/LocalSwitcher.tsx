"use client";

import { routing } from "@/src/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

const LocalSwitcher = () => {
  const t = useTranslations("LocalSwitcher");
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {t("locale", { locale: locale })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocalSwitcher;
