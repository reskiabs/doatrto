"use client";

import supabase from "@/lib/db";
import { koulen } from "@/src/app/fonts";
import { IHero } from "@/types/hero";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BannerDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [hero, setHero] = useState<IHero | null>(null);

  useEffect(() => {
    if (id) {
      const fetchHero = async () => {
        const { data, error } = await supabase
          .from("hero-section")
          .select("*")
          .eq("id", id)
          .single();

        if (error) console.error("Error fetching hero:", error);
        else setHero(data);
      };

      fetchHero();
    }
  }, [id]);

  const hasImages = Array.isArray(hero?.images) && hero.images.length > 0;

  return (
    <div>
      <div className="w-full h-[740px] relative">
        {hero?.thumbnail && (
          <Image
            src={hero.thumbnail}
            alt={hero.title || "Hero Image"}
            fill
            priority
            className="object-cover"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

        {/* Title Text */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1
            className={`text-[110px] uppercase text-white leading-tight max-w-[1140px] ${koulen.className}`}
          >
            {hero?.title}
          </h1>
        </div>
      </div>

      {/* DESCRIPTION + IMAGES + QUOTES */}
      <div className="max-w-[1140px] mx-auto mt-[100px]">
        <div
          className="text-2xl leading-relaxed"
          dangerouslySetInnerHTML={{ __html: hero?.description || "" }}
        />

        {hasImages && (
          <div className="my-[100px] grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {hero!.images!.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className="relative size-[360px] rounded-3xl overflow-hidden bg-gray-300"
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

        <div
          className="text-xl leading-relaxed"
          dangerouslySetInnerHTML={{ __html: hero?.quotes || "" }}
        />

        {hasImages && (
          <div className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {hero!.images!.slice(-1).map((image, index) => (
              <div
                key={index}
                className="relative w-[1140px] h-[555px] rounded-3xl overflow-hidden bg-gray-300"
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
