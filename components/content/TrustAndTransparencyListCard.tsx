"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export const projects = [
  {
    title:
      "Not suitable for clients who want to talk extensively about their problems",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    link: "/trust-and-transparency/1",
  },
  {
    title:
      "Not suitable for clients who want to talk extensively about their problems",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    link: "/trust-and-transparency/2",
  },
  {
    title:
      "Not suitable for clients who want to talk extensively about their problems",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    link: "/trust-and-transparency/3",
  },
  {
    title:
      "Not suitable for clients who want to talk extensively about their problems",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    link: "/trust-and-transparency/4",
  },
  {
    title:
      "Not suitable for clients who want to talk extensively about their problems",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    link: "/trust-and-transparency/5",
  },
  {
    title:
      "Not suitable for clients who want to talk extensively about their problems",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    link: "/trust-and-transparency/6",
  },
];

export function TrustAndTransparencyListCard() {
  return (
    <div className="w-[1140px]">
      <HoverEffect items={projects} />
    </div>
  );
}
