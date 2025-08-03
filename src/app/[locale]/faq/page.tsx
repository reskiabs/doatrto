"use client";

import FaqAccordionItem from "@/components/common/FaqAccordion";
import DetailHeader from "@/components/typography/DetailHeader";
import { faqItems } from "@/data/faq";
import { FaqItem } from "@/types/faq";
import { useState } from "react";

const FAQPage = () => {
  const [activeId, setActiveId] = useState<number | null>(
    faqItems[0]?.id ?? null
  );

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="FAQ"
          description="Lebih dari 500 orang sudah terbantu dan merasakan kebahagiaan dengan Divine Oracular Assistance Tension Releasing Technique Online"
        />
      </div>

      <div className="mx-auto mt-[100px] max-w-[1140px] space-y-6">
        {faqItems.map((item: FaqItem) => (
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
