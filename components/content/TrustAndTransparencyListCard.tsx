"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useTrustTransparency } from "@/hooks/useTrustTransparency";
import ContentLoader from "../common/ContentLoader";

export function TrustAndTransparencyListCard() {
  const { items, loading, error } = useTrustTransparency();

  const projects = items.map((item) => ({
    title: item.title,
    description: item.description,
    link: `/trust-and-transparency/${item.id}`,
  }));

  if (loading) return <ContentLoader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-[1140px]">
      <HoverEffect items={projects} />
    </div>
  );
}
