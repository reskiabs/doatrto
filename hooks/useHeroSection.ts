import supabase from "@/lib/db";
import { IHero } from "@/types/hero";
import { useEffect, useState } from "react";

interface HeroThumbnail {
  id: string;
  src: string;
}

export function useHeroSection() {
  const [heros, setHeros] = useState<IHero[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeros = async () => {
      const { data, error } = await supabase.from("hero-section").select("*");
      if (error) {
        setError("Error fetching hero data");
        console.error("Supabase error:", error);
      } else {
        setHeros(data || []);
      }
      setLoading(false);
    };

    fetchHeros();
  }, []);

  const allThumbnails = heros
    .map((hero) => ({
      id: hero.id,
      src: hero.thumbnail,
    }))
    .filter((item) => !!item.src);

  return { heros, loading, error, allThumbnails };
}
