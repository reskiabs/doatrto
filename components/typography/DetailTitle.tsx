import dayjs from "dayjs";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

interface DetailTitleProps {
  title: string;
  date?: string;
  href?: string;
}
const DetailTitle = ({ title, date, href }: DetailTitleProps) => {
  return (
    <div className="min-w-[340px] lg:min-w-[1140px] max-w-[1140px]">
      <Link
        href={href || "/"}
        className="flex items-center gap-1.5 md:gap-2.5 font-medium text-xs text-tertiary md:text-md"
      >
        <MoveLeft className="size-3.5 md:size-5" />
        Kembali
      </Link>
      <h1 className="text-[28px] lg:text-[50px] mt-2 text-left font-extrabold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-xs lg:text-md font-medium text-muted mt-2.5 lg:mt-5">
        Diunggah pada {dayjs(date).format("DD MMM YYYY")}
      </p>
    </div>
  );
};

export default DetailTitle;
