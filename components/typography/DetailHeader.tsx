interface DetailHeaderProps {
  title: string;
  description: string;
}
const DetailHeader = ({ title, description }: DetailHeaderProps) => {
  return (
    <div className="flex flex-col items-center space-y-5 max-w-[1140px]">
      <h1 className="text-tertiary font-bold text-[50px]">{title}</h1>
      <h1 className="text-tertiary font-normal text-[25px] text-center">
        {description}
      </h1>
    </div>
  );
};

export default DetailHeader;
