"use client";

import supabase from "@/lib/db";
import { splitIntoColumns } from "@/lib/split-into-columns";
import { ITestimonial } from "@/types/testimonial";
import clsx from "clsx";
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
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonial")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching testimonials:", error);
      } else {
        setTestimonials(data || []);
      }

      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  const cols = splitIntoColumns(testimonials, columns);

  const animationMap = [
    "animate-scroll-y-slow",
    "animate-scroll-y-fast",
    "animate-scroll-y-medium",
  ];

  const offsets = ["0px", "80px", "40px"];

  if (loading) return <div>Loading testimonials...</div>;

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
