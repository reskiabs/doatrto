import Image from "next/image";

const certList = [
  {
    id: 1,
    image: "/images/mc-certificate.svg",
    title: "Certified Trainer",
    subtitle: "Source of Body Mind and Soul",
  },
  {
    id: 2,
    image: "/images/mc-certificate.svg",
    title: "Associate Meta Coach",
    subtitle: "International Society of Neuro-Semantics",
  },
  {
    id: 3,
    image: "/images/mc-certificate.svg",
    title: "Certified Hypnotherapist",
    subtitle: "Indonesian Board of Hypnotherapy",
  },
  {
    id: 4,
    image: "/images/ibh-certificate.svg",
    title: "Certified Hypnotist",
    subtitle: "Indonesian Board of Hypnotherapy",
  },
  {
    id: 5,
    image: "/images/mc-certificate.svg",
    title: "Certified Trainer",
    subtitle: "Source of Body Mind and Soul",
  },
  {
    id: 6,
    image: "/images/mc-certificate.svg",
    title: "Associate Meta Coach",
    subtitle: "International Society of Neuro-Semantics",
  },
];

const Certificate = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[50px] lg:mt-[100px]">
      <div className="py-3 w-full  lg:py-6 justify-center flex bg-surface overflow-hidden">
        <div className="animate-scroll-slow flex justify-center items-center gap-[25px] lg:gap-[50px]">
          {[...certList, ...certList].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[200px] lg:min-w-[250px]"
            >
              <div className="relative size-[50px] lg:size-[80px] lg:mb-1.5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs lg:text-lg font-bold text-center text-body">
                {item.title}
              </p>
              <p className="text-2xs lg:text-sm -mt-0.5 font-normal text-center text-muted line-clamp-1">
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
