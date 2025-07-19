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
    <main className="flex flex-col items-center w-full mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="w-[98.5%] h-[220px] bg-tertiary flex flex-col items-center rounded-[20px] justify-center">
        <p className="text-2xl font-medium text-white">As feature in</p>
        <div className="mt-5 flex gap-[50px]">
          {data.map((item) => (
            <div key={item.id} className="relative w-[263px] h-[100px]">
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
    </main>
  );
};

export default Media;
