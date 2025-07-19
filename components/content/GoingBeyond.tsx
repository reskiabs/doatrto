import Flower from "@/public/images/beyond1.svg";
import Eye from "@/public/images/beyond2.svg";
import Repeated from "@/public/images/beyond3.svg";
import Lightning from "@/public/images/beyond4.svg";
import Violently from "@/public/images/beyond5.svg";
import Heal from "@/public/images/beyond6.svg";
import { StaticImageData } from "next/image";
import BeyondCardList from "../card/BeyondCardList";
import ContentTitle from "../typography/ContentTitle";

type Item = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
};

const data: Item[] = [
  {
    id: 1,
    title: "Non Root Cause Processing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Flower,
  },
  {
    id: 2,
    title: "Stage of Liberation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Eye,
  },
  {
    id: 3,
    title: "Repeated, Consistent Result",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Repeated,
  },
  {
    id: 4,
    title: "Totally Measured and Calibrated Process",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Lightning,
  },
  {
    id: 5,
    title: "Violently Test & Recheck",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Violently,
  },
  {
    id: 6,
    title: "Heal the Amygdala Automatic Response",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: Heal,
  },
];

const GoingBeyond = () => {
  return (
    <main className="flex flex-col items-center w-full mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="w-full max-w-[1140px]">
        <div className="flex flex-col items-center mb-8">
          <ContentTitle title="Beyond Conventional Therapies" />
        </div>

        <div
          className="grid gap-6
                        sm:grid-cols-2
                        md:grid-cols-3
                        xl:grid-cols-3"
        >
          {data.map((item) => (
            <BeyondCardList
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default GoingBeyond;
