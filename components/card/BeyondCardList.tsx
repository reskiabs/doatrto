import Image, { StaticImageData } from "next/image";

interface BeyondCardListProps {
  title: string;
  description: string;
  image: StaticImageData | string;
}

const BeyondCardList = ({ title, description, image }: BeyondCardListProps) => {
  return (
    <div className="flex flex-col items-center rounded-[25px] bg-surface p-[30px] max-w-[360px] text-center">
      <h2 className="mb-2.5 text-xl font-bold">{title}</h2>
      <p className="text-md leading-relaxed text-muted font-normal">
        {description}
      </p>
      <div className="mt-8 flex justify-center h-full w-full items-center">
        <div className="relative">
          <Image src={image} alt={title} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default BeyondCardList;
