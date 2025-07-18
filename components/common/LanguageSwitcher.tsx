"use client";

import { usePathname, useRouter } from "@/src/i18n/navigation";
import { routing } from "@/src/i18n/routing";
import { useLocale } from "next-intl"; // ✅ ambil locale aktif
import React from "react";

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
    <div className="language-switcher">
      <select
        onChange={handleChange}
        value={currentLocale}
        className="border rounded px-2 py-1"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
