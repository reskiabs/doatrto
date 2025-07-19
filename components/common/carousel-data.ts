// components/course-data.ts
export interface CarouselItem {
  id: string;
  image: string;
  line1: string;
  line2: string;
  meta?: string;
  sessions?: string;
}

export const carouselRow1: CarouselItem[] = [
  {
    id: "1",
    image: "/images/carousel-1.png",
    line1: "AWAKEN",
    line2: "THE SPECIES",
    meta: "NEALE DONALD WALSCH",
  },
  {
    id: "2",
    image: "/images/carousel-2.png",
    line1: "UNLOCK YOUR",
    line2: "MIND'S POTENTIAL",
    meta: "WITH VISHEN",
  },
  {
    id: "3",
    image: "/images/carousel-3.png",
    line1: "UNCOVER THE SECRET",
    line2: "TO PERPETUAL JOY",
    meta: "SADHGURU",
    sessions: "15 SESSIONS",
  },
  {
    id: "4",
    image: "/images/carousel-4.png",
    line1: "EXPERIENCE",
    line2: "BREATHWORK",
    meta: "NIRAJ NAIK",
  },
];

export const carouselRow2: CarouselItem[] = [
  {
    id: "5",
    image: "/images/carousel-4.png",
    line1: "BECOME",
    line2: "INTUITIVE",
    meta: "WITH NAMA",
  },
  {
    id: "6",
    image: "/images/carousel-3.png",
    line1: "MASTER",
    line2: "YOUR ENERGY",
    meta: "WITH COACH",
  },
  {
    id: "7",
    image: "/images/carousel-2.png",
    line1: "EXPERIENCE",
    line2: "ASTRAL PROJECTION",
    meta: "JADE SHAW",
  },
  {
    id: "8",
    image: "/images/carousel-1.png",
    line1: "EXPERIENCE",
    line2: "ASTRAL PROJECTION",
    meta: "JADE SHAW",
  },
];
