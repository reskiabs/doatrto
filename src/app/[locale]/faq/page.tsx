"use client";

import FaqAccordionItem from "@/components/content/FaqAccordion";
import DetailHeader from "@/components/typography/DetailHeader";
import { useFaq } from "@/hooks/useFaq"; // ganti sesuai path kamu
import { useEffect, useState } from "react";

const FAQPage = () => {
  const { items, loading, error } = useFaq();
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [items]);

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          title="FAQ"
          description="Lebih dari 500 orang sudah terbantu dan merasakan kebahagiaan dengan Divine Oracular Assistance Tension Releasing Technique Online"
        />
      </div>

      <div className="mx-auto px-[15px] lg:px-0 mt-[50px] lg:mt-[100px] max-w-[1140px] space-y-6">
        {loading && <p className="text-center text-xl">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading &&
          items.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isOpen={activeId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default FAQPage;
