"use client";

import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

interface OpenEvidenceCardProps {
  id: number;
  src: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
}

const OpenEvidenceCard = memo(function OpenEvidenceCard({
  id,
  src,
  isActive = false,
  onClick,
  className = "",
  size = "medium",
}: OpenEvidenceCardProps) {
  const t = useTranslations("button");

  const sizeClasses = {
    small: "w-[280px] h-[158px]",
    medium: "w-[340px] h-[191px] lg:w-[360px] lg:h-[202px]",
    large: "w-[340px] h-[191px] lg:w-[480px] lg:h-[270px]",
  };

  // Override size classes if custom className with dimensions is provided
  const hasCustomSize = className.includes('w-[') && className.includes('h-[');
  const finalClassName = hasCustomSize ? className : `${sizeClasses[size]} ${className}`;

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${finalClassName}`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div
        className={`
          relative w-full h-full rounded-xl overflow-hidden
          ${isActive ? "ring-2 ring-white/50" : ""}
          transition-all duration-300 ease-out
        `}
      >
        <Image
          src={src}
          alt={`Open Evidence ${id}`}
          fill
          className={`
            object-cover transition-all duration-500
            ${isActive ? "brightness-100" : "brightness-75 group-hover:brightness-90"}
          `}
          sizes="(max-width: 768px) 340px, (max-width: 1024px) 360px, 480px"
        />
        
        {/* Overlay */}
        <div
          className={`
            absolute inset-0 transition-all duration-300
            ${isActive 
              ? "bg-gradient-to-t from-black/60 via-black/20 to-transparent" 
              : "bg-black/20 group-hover:bg-black/40"
            }
          `}
        />
      </div>

      {/* Play Button - Only visible when active or on hover */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          transition-all duration-300 ease-out
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      >
        <Link
          href={`/open-evidence/${id}`}
          className={`
            flex items-center gap-2 px-4 py-2.5 lg:px-6 lg:py-3
            bg-white/90 hover:bg-white text-gray-800 
            backdrop-blur-sm rounded-full font-semibold text-sm
            transform transition-all duration-300 ease-out
            hover:shadow-xl
            ${isActive ? "scale-100" : "scale-95"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <Play size={16} className="fill-current" />
          {t("playVideo")}
        </Link>
      </div>

      {/* Loading shimmer effect */}
      <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl -z-10" />
    </div>
  );
});

export default OpenEvidenceCard;