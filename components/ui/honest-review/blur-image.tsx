"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      className={cn(
        "h-full w-full transition duration-300 ease-in-out hover:scale-110 hover:cursor-pointer",
        !isLoaded ? "blur-sm scale-105" : "blur-0 scale-100",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      src={src}
      width={width}
      height={height}
      alt={alt ?? "Background of a beautiful view"}
      {...rest}
    />
  );
};
