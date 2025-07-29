import supabase from "@/lib/db";
import { IHero } from "@/types/hero";
import { useEffect, useState } from "react";
import ImageCarousel from "../common/ImageCarousel";
import MainOutlineButton from "./MainOutlineButton";

const HeroSection = () => {
  const [heros, setHeros] = useState<IHero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeros = async () => {
      const { data, error } = await supabase.from("hero-section").select("*");

      if (error) {
        setError("Error fetching hero data");
        console.error("❌ Supabase error:", error);
      } else {
        setHeros(data || []);
      }
      setLoading(false);
    };

    fetchHeros();
  }, []);

  const allThumbnails = heros.map((hero) => hero.thumbnail).filter(Boolean);
  console.log("🔍 > HeroSection > allThumbnails:", allThumbnails);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col justify-center items-center">
      {allThumbnails.length > 0 && <ImageCarousel images={allThumbnails} />}
      <div className="pt-[15px] flex w-[97%] items-center gap-[18px] mt-[10px]">
        <MainOutlineButton text="Session" />
        <MainOutlineButton text="Klasses" />
        <MainOutlineButton text="Facilitators" />
      </div>
    </div>
  );
};

export default HeroSection;
