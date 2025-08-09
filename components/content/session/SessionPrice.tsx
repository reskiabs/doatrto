import PrimaryButton from "@/components/button/PrimaryButton";

const SessionPrice = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[50px] lg:mt-[100px]">
      <div className="w-[95%] rounded-[10px] lg:rounded-[20px] bg-surface flex flex-col items-center py-[20px] lg:py-[50px]">
        <p className="text-[28px] lg:text-[40px] text-tertiary font-medium -mb-2 lg:-mb-4">
          Start from
        </p>
        <p className="text-[40px] lg:text-[70px] text-tertiary font-bold mb-[15px] lg:mb-[30px]">
          Rp 2.500.000
        </p>
        <PrimaryButton href="#" title="Book a Session" />
      </div>
    </div>
  );
};

export default SessionPrice;
