import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};
const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div
      key={item.id}
      className="rounded-3xl w-[555px] overflow-hidden bg-white 
                shadow-xs
                  hover:shadow-2xl 
                  hover:shadow-tertiary
                  transition-all duration-300 ease-out hover:scale-[1.02]"
    >
      <div className="relative w-full h-[285px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-[30px]">
        <h3 className="font-bold text-2xl mb-5">{item.title}</h3>
        <p className="text-gray-800 text-sm mb-7 font-normal text-md">
          {item.description}
        </p>
        <Link
          href={`/article/${item.id}`}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Baca Selengkapnya &gt;
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
