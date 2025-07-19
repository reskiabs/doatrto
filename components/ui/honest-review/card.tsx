"use client";

import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BlurImage } from "./blur-image";
import { CarouselContext } from "./carousel";

type Card = {
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
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.name}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.name}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.review}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.name}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.name}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
            className="max-w-xs text-left font-sans text-xl font-extrabold uppercase [text-wrap:balance] text-white md:text-[23px]"
          >
            {card.name}
          </motion.p>
          <motion.p
            layoutId={layout ? `category-${card.review}` : undefined}
            className="text-left font-sans text-md font-normal text-white md:text-base"
          >
            {card.review}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};
