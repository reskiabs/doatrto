"use client";

import { useOutsideClick } from "@/hooks/use-outside-click";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BlurImage } from "./blur-image";
import { CarouselContext } from "./carousel";

type Card = {
  url: string;
  src: string;
  name: string;
  review: string;
  content: React.ReactNode;
};

export const HonestReviewCard = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <Link href={card.url}>
      <motion.button
        layoutId={layout ? `card-${card.name}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col justify-end overflow-hidden rounded-3xl bg-gray-100 md:h-[450px] md:w-[300px] dark:bg-neutral-900"
      >
        <BlurImage
          src={card.src}
          alt={card.name}
          fill
          className="absolute inset-0 z-10 object-cover"
        />

        {/* Wrapper dengan gradient biru */}
        <div className="pointer-events-none pl-7 flex justify-center flex-col absolute inset-x-0 bottom-8 z-30 h-[70px] bg-gradient-to-r from-[#0B55C8] to-[#052A62/10]">
          <motion.p
            layoutId={layout ? `title-${card.name}` : undefined}
            className="truncate overflow-hidden whitespace-nowrap max-w-xs text-left font-sans text-xl font-extrabold uppercase text-white md:text-[23px]"
          >
            {card.name}
          </motion.p>
          <motion.p
            layoutId={layout ? `category-${card.review}` : undefined}
            className="truncate max-w-[90%] overflow-hidden whitespace-nowrap text-left font-sans text-md font-normal text-white md:text-base"
          >
            {card.review}
          </motion.p>
        </div>
      </motion.button>
    </Link>
  );
};
