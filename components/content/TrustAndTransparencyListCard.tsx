"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useTrustTransparencyOptimized } from "@/hooks/optimized/useTrustTransparencyOptimized";
import { memo } from "react";
import LoaderContent from "../common/LoaderContent";
import SomethingWentWrong from "../common/SomethingWentWrong";

export const TrustAndTransparencyListCard = memo(function TrustAndTransparencyListCard() {
  const { items, loading, error } = useTrustTransparencyOptimized();

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
});
