import Image from "next/image";

const certList = [
  {
    id: 1,
    image: "/images/mc-certificate.svg",
    title: "Associate Meta Coach",
    subtitle: "International Society of Neuro-Semantics",
  },
  {
    id: 2,
    image: "/images/mc-certificate.svg",
    title: "Certified Hypnotherapist",
    subtitle: "Indonesian Board of Hypnotherapy",
  },
  {
    id: 3,
    image: "/images/ibh-certificate.svg",
    title: "Certified Hypnotist",
    subtitle: "Indonesian Board of Hypnotherapy",
  },
  {
    id: 4,
    image: "/images/mc-certificate.svg",
    title: "Certified Trainer",
    subtitle: "Source of Body Mind and Soul",
  },
];

const Certificate = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[100px]">
      <div className="w-[98.5%] h-[223px] rounded-[20px] bg-surface flex justify-center items-center gap-[50px]">
        {certList.map((item) => (
          <div key={item.id} className="w-[270px] flex flex-col items-center">
            <div className="relative size-[80px] mb-2.5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-md font-bold text-body">{item.title}</p>
            <p className="text-xs font-normal text-muted">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
