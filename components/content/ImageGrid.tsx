"use client";

import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1750386167727-8cae51317fe8?q=80&w=2375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 240,
  },
  {
    src: "https://images.unsplash.com/photo-1750930341486-c573d31b9b0a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 480,
  },
  {
    src: "https://images.unsplash.com/photo-1751257983922-a627088d4c21?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 240,
  },
  {
    src: "https://images.unsplash.com/photo-1747009688888-2ef8ec28842b?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 480,
  },
  {
    src: "https://images.unsplash.com/photo-1751175092226-8e69d27ac1c7?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 240,
  },
  {
    src: "https://images.unsplash.com/photo-1746555697990-3a405a5152b9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 480,
  },
];

const columns = [
  [images[0], images[3]],
  [images[1], images[4]],
  [images[2], images[5]],
];

const ImageGrid = () => {
  return (
    <div className="max-w-[1140px] mx-auto flex justify-between gap-[30px]">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-[30px]">
          {column.map((img, index) => (
            <div
              key={index}
              className={`rounded-[25px] relative w-[360px] overflow-hidden bg-surface`}
              style={{ height: `${img.height}px` }}
            >
              <Image
                src={img.src}
                alt={`Grid Image ${colIndex}-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
