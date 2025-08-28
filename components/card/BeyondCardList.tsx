import Image, { StaticImageData } from "next/image";

interface BeyondCardListProps {
  title: string;
  description: string;
  image: StaticImageData | string;
}

const BeyondCardList = ({ title, description, image }: BeyondCardListProps) => {
  return (
    <div className="flex flex-col size-[250px] lg:size-[360px] items-center rounded-[10px] lg:rounded-[25px] bg-surface p-[20px] lg:p-[30px] max-w-[360px] text-center">
      <h2 className="mb-2.5 text-md lg:text-xl font-bold">{title}</h2>

      <div
        className="text-xs line-clamp-3 lg:text-md leading-relaxed text-muted font-normal"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className="flex justify-center w-full items-center mt-4">
        <div className="relative size-[100px] lg:size-[155px]">
          <Image src={image} alt={title} className="object-contain" fill />
        </div>
      </div>
    </div>
  );
};

export default BeyondCardList;
