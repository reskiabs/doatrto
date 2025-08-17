"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import { useHero } from "@/hooks/useHero"; // ganti import
import { useMobileScrollOffset } from "@/hooks/useMobileScrollOffset";
import { koulen } from "@/src/app/fonts";
import Image from "next/image";
import { useParams } from "next/navigation";

const BannerDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { hero, loading, error } = useHero(id);
  const scrollRef = useMobileScrollOffset(0.22, [hero]);

  const hasImages = Array.isArray(hero?.images) && hero.images.length > 0;

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <div>
      <div className="w-full h-[540px] lg:h-[740px] relative">
        {hero?.thumbnail && (
          <Image
            src={hero.thumbnail}
            alt="Hero Image"
            fill
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1
            className={`text-6xl lg:text-[110px] uppercase text-white text-shadow-[7px_7px_7px] text-shadow-gray-600 leading-tight max-w-[1140px] ${koulen.className}`}
          >
            {hero?.title}
          </h1>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mt-[50px] lg:mt-[100px]">
        {/* Quotes */}
        <div
          className="text-lg lg:text-[25px] leading-relaxed px-[15px] lg:px-0"
          dangerouslySetInnerHTML={{
            __html: hero?.quotes || "",
          }}
        />

        {/* First Images Row */}
        {hasImages && (
          <div
            ref={scrollRef}
            className="my-[50px] lg:my-[100px] px-2.5 lg:px-0 overflow-x-auto scrollbar-hide"
          >
            <div className="grid grid-cols-3 gap-[10px] lg:gap-[30px] min-w-max snap-x snap-mandatory">
              {hero.images!.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className="relative size-[250px] lg:size-[360px] rounded-[15px] lg:rounded-[25px] overflow-hidden bg-gray-300 snap-start"
                >
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div
          className="text-sm lg:text-xl leading-relaxed px-[15px] lg:px-0"
          dangerouslySetInnerHTML={{
            __html: hero?.description || "",
          }}
        />

        {/* Last Image */}
        {hasImages && (
          <div className="mt-[50px] flex justify-center lg:mt-[100px] lg:grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {hero.images!.slice(-1).map((image, index) => (
              <div
                key={index}
                className="relative size-[372px] lg:w-[1140px] lg:h-[555px] rounded-[15px] lg:rounded-[25px] overflow-hidden bg-gray-300"
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerDetailPage;
