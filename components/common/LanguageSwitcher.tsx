"use client";

import { usePathname, useRouter } from "@/src/i18n/navigation";
import { routing } from "@/src/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";

// URL bendera bisa pakai CDN atau asset lokal
const flags: Record<string, string> = {
  id: "https://flagcdn.com/w20/id.png", // Bendera Indonesia
  en: "https://flagcdn.com/w20/gb.png", // Bendera Inggris (Union Jack)
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const { locales } = routing;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.replace({ pathname }, { locale: newLocale });
  };

  return (
    <div className="language-switcher relative inline-block">
      <select
        onChange={handleChange}
        value={currentLocale}
        className="appearance-none bg-white border border-gray-300 text-gray-800 font-bold rounded-lg p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{
          backgroundImage:
            currentLocale === "id" ? `url(${flags.id})` : `url(${flags.en})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 8px center",
          paddingLeft: "35px",
        }}
      >
        {locales.map((locale) => (
          <option
            key={locale}
            value={locale}
            style={{
              backgroundImage: `url(${flags[locale]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: " center",
            }}
          >
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
