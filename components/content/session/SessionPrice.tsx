import PrimaryButton from "@/components/button/PrimaryButton";

const SessionPrice = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[100px]">
      <div className="w-[98.5%] rounded-[20px] bg-surface flex flex-col items-center py-[50px]">
        <p className="text-[40px] text-tertiary font-medium -mb-4">
          Start from
        </p>
        <p className="text-[70px] text-tertiary font-bold mb-[30px]">
          Rp 2.500.000
        </p>
        <PrimaryButton href="#" title="Book a Session" />
      </div>
    </div>
  );
};

export default SessionPrice;
