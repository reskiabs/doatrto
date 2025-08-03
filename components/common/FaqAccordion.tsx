"use client";

import { cn } from "@/lib/utils";
import { FaqItem } from "@/types/faq";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-xl border-2 bg-white transition-all duration-300",
        isOpen ? "shadow-md border-tertiary" : "shadow-xs border-muted"
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between text-left font-bold text-gray-900",
          "px-[15px] pt-[20px] pb-[30px] text-xs lg:text-[25px] lg:px-[30px] lg:pt-[30px]",
          isOpen && "lg:pb-[20px]"
        )}
      >
        <span
          className={cn(
            "flex-1",
            isOpen
              ? "whitespace-normal break-words"
              : "truncate overflow-hidden whitespace-nowrap max-w-[90%]"
          )}
        >
          {item.title}
        </span>

        {isOpen ? (
          <ChevronUp className="size-5 text-primary lg:size-7" />
        ) : (
          <ChevronDown className="size-5 text-primary lg:size-7" />
        )}
      </button>

      {isOpen && (
        <div className="px-[15px] pb-[15px] lg:px-[30px] lg:pb-[30px]">
          <div
            className="text-base font-medium text-muted md:text-xl"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      )}
    </div>
  );
};

export default FaqAccordionItem;
