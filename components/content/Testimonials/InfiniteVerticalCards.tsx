"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { splitIntoColumns } from "@/lib/split-into-columns";
import { ITestimonial } from "@/types/testimonial";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { AnimatedColumn } from "./AnimatedColumn";

interface Props {
  columns?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteVerticalCards({
  columns = 3,
  pauseOnHover = true,
  className,
}: Props) {
  const locale = useLocale();
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonial")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to fetch testimonials");
      } else if (data) {
        const mapped = data.map((item) => ({
          ...item,
          text: getLocalizedField(item, "text", locale),
        }));
        setTestimonials(mapped);
      }

      setLoading(false);
    };

    fetchTestimonials();
  }, [locale]);

  const cols = splitIntoColumns(testimonials, isMobile ? 1 : columns);

  const animationMap = isMobile
    ? ["animate-scroll-y-fast"]
    : [
        "animate-scroll-y-slow",
        "animate-scroll-y-fast",
        "animate-scroll-y-medium",
      ];

  const offsets = ["0px"];

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <section
      className={clsx(
        "relative mx-auto flex w-full max-w-7xl justify-center gap-8",
        className
      )}
    >
      {cols.map((items, idx) => (
        <AnimatedColumn
          key={idx}
          items={items}
          animationClass={animationMap[idx % animationMap.length]}
          staggerOffset={offsets[idx % offsets.length]}
          pauseOnHover={pauseOnHover}
          fadeMask
          randomDelay
        />
      ))}
    </section>
  );
}
