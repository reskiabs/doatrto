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
    <div className="w-full flex flex-col justify-center items-center mt-[50px] lg:mt-[100px]">
      <div className="w-[95%] h-[116px] lg:h-[223px] rounded-[10px] justify-center flex lg:rounded-[20px] bg-surface overflow-hidden">
        <div className="animate-scroll-slow flex justify-center items-center gap-[25px] lg:gap-[50px]">
          {[...certList, ...certList].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[200px] lg:min-w-[250px]"
            >
              <div className="relative size-[32px] lg:size-[80px] mb-2.5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs lg:text-md font-bold text-center text-body">
                {item.title}
              </p>
              <p className="text-2xs lg:text-xs font-normal text-center text-muted">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
