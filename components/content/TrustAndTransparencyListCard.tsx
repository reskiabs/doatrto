"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useTrustTransparency } from "@/hooks/useTrustTransparency";
import LoaderContent from "../common/LoaderContent";
import SomethingWentWrong from "../common/SomethingWentWrong";

export function TrustAndTransparencyListCard() {
  const { items, loading, error } = useTrustTransparency();

  const projects = items.map((item) => ({
    title: item.title,
    description: item.description,
    link: `/trust-and-transparency/${item.id}`,
  }));

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <div className="max-w-[1140px]">
      <HoverEffect items={projects} />
    </div>
  );
}
