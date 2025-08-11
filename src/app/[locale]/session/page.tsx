"use client";

import NewsCard from "@/components/card/NewsCard";
import FaqAccordionItem from "@/components/content/FaqAccordion";
import SessionFaq from "@/components/content/session/SessionFaq";
import SessionGridContent from "@/components/content/session/SessionGridContent";
import SessionPrice from "@/components/content/session/SessionPrice";
import DetailHeader from "@/components/typography/DetailHeader";
import { useFaq } from "@/hooks/useFaq";
import { useSessionFeatures } from "@/hooks/useSessionFeatures";
import { FaqLocalized } from "@/types/faq";
import { useEffect, useState } from "react";

const SessionPage = () => {
  const { items } = useFaq();
  const { features } = useSessionFeatures();
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
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          title="Session"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>

      <div className="w-full max-w-[1140px] mx-auto mt-[50px] lg:mt-[100px]">
        <div className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-2">
          {features.map((item) => (
            <NewsCard key={item.id} item={item} buttonText="Book a Session" />
          ))}
        </div>
      </div>

      <SessionGridContent />
      <SessionPrice />
      <SessionFaq>
        {items.slice(0, 4).map((item: FaqLocalized) => (
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
