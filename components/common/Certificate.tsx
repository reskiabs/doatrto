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
    <main className="flex flex-col items-center w-full mt-[30px] md:mt-[60px] lg:mt-[80px] overflow-x-hidden">
      <div className="w-full pt-3 pb-1.5 lg:pt-6 lg:pb-6 bg-surface flex flex-col items-center justify-center">
        <div className="-mt-1 lg:mt-2 w-full overflow-hidden">
          <div className="animate-scroll-fast lg:animate-scroll-slow flex gap-[25px] lg:gap-0">
            {[...certList, ...certList].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[200px] lg:min-w-[350px]"
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
                <p className="text-2xs lg:text-sm -mt-0.5 font-normal text-center text-muted">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Certificate;
