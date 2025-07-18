const MainOutlineButton = ({ text }: { text: string }) => {
  return (
    <button className="w-[120px] py-[15px] border-secondary border rounded-full">
      <p className="text-center text-xs font-medium text-secondary">{text}</p>
    </button>
  );
};

export default MainOutlineButton;
