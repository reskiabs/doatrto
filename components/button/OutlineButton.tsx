const OutlineButton = ({ text }: { text: string }) => {
  return (
    <button className="border border-[#DDDDDD] text-white text-2xs font-medium py-3.5 px-[22px] rounded-full">
      {text}
    </button>
  );
};

export default OutlineButton;
