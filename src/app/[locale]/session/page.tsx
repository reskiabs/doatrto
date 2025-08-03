"use client";

import NewsCard from "@/components/card/NewsCard";
import FaqAccordionItem from "@/components/common/FaqAccordion";
import SessionFaq from "@/components/content/session/SessionFaq";
import SessionGridContent from "@/components/content/session/SessionGridContent";
import SessionPrice from "@/components/content/session/SessionPrice";
import DetailHeader from "@/components/typography/DetailHeader";
import { faqItems } from "@/data/faq";
import { FaqItem } from "@/types/faq";
import { useState } from "react";

const news = [
  {
    id: 1,
    title: "Session 1 on 1",
    description: "Private session dengan Coach Rheo",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Session Workshop",
    description: "Private session dengan Coach Rheo",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

const SessionPage = () => {
  const [activeId, setActiveId] = useState<number | null>(
    faqItems[0]?.id ?? null
  );

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="Session"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>

      <div className="w-full max-w-[1140px] mx-auto grid md:grid-cols-2 gap-6 mt-[100px]">
        {news.slice(0, 2).map((item) => (
          <NewsCard key={item.id} item={item} buttonText="Book a Session" />
        ))}
      </div>

      <SessionGridContent />
      <SessionPrice />
      <SessionFaq>
        {faqItems.slice(0, 4).map((item: FaqItem) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={activeId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </SessionFaq>
    </div>
  );
};

export default SessionPage;
