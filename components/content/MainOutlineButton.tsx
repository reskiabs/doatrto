const MainOutlineButton = ({ text }: { text: string }) => {
  return (
    <button className="w-full py-[35px] border-secondary border-2 rounded-full">
      <p className="text-center text-2xl font-medium text-secondary">{text}</p>
    </button>
  );
};

export default MainOutlineButton;
