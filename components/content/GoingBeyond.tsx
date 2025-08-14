"use client";

import { useMobileScrollOffset } from "@/hooks/useMobileScrollOffset";
import Flower from "@/public/images/beyond1.svg";
import Eye from "@/public/images/beyond2.svg";
import Repeated from "@/public/images/beyond3.svg";
import Lightning from "@/public/images/beyond4.svg";
import Violently from "@/public/images/beyond5.svg";
import Heal from "@/public/images/beyond6.svg";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import BeyondCardList from "../card/BeyondCardList";
import ContentTitle from "../typography/ContentTitle";

type Item = {
  id: number;
  image: StaticImageData | string;
};

const items: Item[] = [
  { id: 1, image: Flower },
  { id: 2, image: Eye },
  { id: 3, image: Repeated },
  { id: 4, image: Lightning },
  { id: 5, image: Violently },
  { id: 6, image: Heal },
];

const GoingBeyond = () => {
  const scrollRef = useMobileScrollOffset(0.17);
  const t = useTranslations("items");

  return (
    <main className="flex flex-col items-center w-full mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="w-full flex flex-col items-center lg:max-w-[1140px]">
        <div className="flex flex-col items-center mb-[20px] lg:mb-[30px]">
          <ContentTitle titleKey="beyondConventionalTherapies" />
        </div>

        <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide">
          <div className="grid grid-cols-3 gap-3.5 lg:gap-6 min-w-max snap-x snap-mandatory px-[15px] lg:px-0">
            {items.map((item) => (
              <div key={item.id} className="snap-start">
                <BeyondCardList
                  title={t(`${item.id}.title`)}
                  description={t(`${item.id}.description`)}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GoingBeyond;
