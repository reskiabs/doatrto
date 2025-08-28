import Kompas from "@/public/images/kompas.svg";
import Liputan6 from "@/public/images/liputan6.svg";
import Suara from "@/public/images/suaradotcom.svg";
import TribunNews from "@/public/images/tribunnews.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

const data = [
  { id: 1, alt: "kompas", image: Kompas },
  { id: 2, alt: "suara.com", image: Suara },
  { id: 3, alt: "tribunnews.com", image: TribunNews },
  { id: 4, alt: "liputan6", image: Liputan6 },
];
const Media = () => {
  const t = useTranslations("media");
  return (
    <main className="flex flex-col items-center w-full mt-[30px] md:mt-[60px] lg:mt-[80px] overflow-x-hidden">
      <div className="w-full h-[95px] lg:h-[220px] bg-tertiary flex flex-col items-center justify-center">
        <p className="text-2xs lg:text-2xl font-medium text-white">
          {t("asFeatureIn")}
        </p>

        <div className="-mt-1 lg:mt-2 w-full overflow-hidden">
          <div className="animate-scroll-slow flex gap-[25px] lg:gap-[50px]">
            {[...data, ...data].map((item, index) => (
              <div
                key={index}
                className="relative w-[130px] h-[50px] lg:w-[263px] lg:h-[100px] flex-shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Media;
