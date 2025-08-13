import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";

export function TimelineCRA() {
  const t = useTranslations("storyOfCra");

  const data = [
    {
      key: "background",
      title: t("backgroundTitle"),
      content: (
        <p className="text-xl font-normal leading-9">
          {t("backgroundContent")}
        </p>
      ),
    },
    {
      key: "answer",
      title: t("answerTitle"),
      content: (
        <p className="text-xl font-normal leading-9">{t("answerContent")}</p>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
