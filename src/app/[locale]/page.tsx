import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Homepage");
  return (
    <div>
      <p>{t("title")}</p>
      <p>{t("content")}</p>
      <Link href="/about">About</Link>
      <br />
      <Link href="/article">Article</Link>
    </div>
  );
}
