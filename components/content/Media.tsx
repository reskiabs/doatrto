import Kompas from "@/public/images/kompas.svg";
import Liputan6 from "@/public/images/liputan6.svg";
import Suara from "@/public/images/suaradotcom.svg";
import TribunNews from "@/public/images/tribunnews.svg";
import Image from "next/image";

const data = [
  { id: 1, alt: "kompas", image: Kompas },
  { id: 2, alt: "suara.com", image: Suara },
  { id: 3, alt: "tribunnews.com", image: TribunNews },
  { id: 4, alt: "liputan6", image: Liputan6 },
];
const Media = () => {
  return (
    <main className="flex flex-col items-center w-full mt-[50px] md:mt-[80px] lg:mt-[100px] overflow-x-hidden">
      <div className="w-full max-w-[calc(100%-10px)] h-[95px] lg:h-[220px] bg-tertiary flex flex-col items-center rounded-[10px] lg:rounded-[20px] justify-center px-2">
        <p className="text-2xs lg:text-2xl font-medium text-white">
          As feature in
        </p>

        {/* Wrap scrolling content */}
        <div className="lg:mt-5 w-full overflow-hidden">
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
