import DetailHeader from "@/components/typography/DetailHeader";
import { howItWorks } from "@/data/how-it-works";

const HowItWorksPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
      <DetailHeader
        title="How It Works"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <div className="mt-[50px] lg:mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-6">
        {howItWorks.map((item) => (
          <div
            key={item.id}
            className="w-[365px] lg:w-[555px] flex flex-col justify-center px-[30px] pb-[30px] pt-[10px] shadow-lg bg-white rounded-[15px] lg:rounded-[25px]"
          >
            <p className="text-tertiary font-bold text-[50px] lg:text-[70px]">
              0{item.id}
            </p>
            <p className="font-bold text-[20px] lg:text-[30px] my-1.5 lg:my-3">
              {item.title}
            </p>
            <p className="text-muted font-medium text-sm lg:text-xl">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;
