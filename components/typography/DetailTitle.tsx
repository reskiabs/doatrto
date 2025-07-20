import dayjs from "dayjs";

interface DetailTitleProps {
  title: string;
  date?: string;
}
const DetailTitle = ({ title, date }: DetailTitleProps) => {
  return (
    <div className="max-w-[1140px]">
      <h1 className="text-[50px] font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-md font-medium text-muted mt-5">
        Diunggah pada {dayjs(date).format("DD MMM YYYY")}
      </p>
    </div>
  );
};

export default DetailTitle;
