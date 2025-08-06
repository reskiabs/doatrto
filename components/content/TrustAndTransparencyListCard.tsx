"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useTrustTransparency } from "@/hooks/useTrustTransparency";

export function TrustAndTransparencyListCard() {
  const { items, loading, error } = useTrustTransparency();

  const projects = items.map((item) => ({
    title: item.title,
    description: item.description,
    link: `/trust-and-transparency/${item.id}`,
  }));

  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-[1140px]">
      <HoverEffect items={projects} />
    </div>
  );
}
