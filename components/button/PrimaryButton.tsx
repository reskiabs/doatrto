"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";

interface PrimaryButtonProps {
  title: string;
  subtitle?: string;
  href?: string;
}

const PrimaryButton = ({ title, subtitle, href = "#" }: PrimaryButtonProps) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-6 py-3 lg:py-4 rounded-full text-white font-medium text-xs lg:text-lg bg-gradient-to-r from-secondary to-primary hover:cursor-pointer"
    >
      {subtitle && (
        <>
          <span className="hidden lg:block">{subtitle}</span>
          <span className="hidden lg:block mx-4 h-6 w-px bg-white opacity-50"></span>
        </>
      )}
      <span className="flex items-center gap-2.5">
        {title} <MoveRight size={20} />
      </span>
    </Link>
  );
};

export default PrimaryButton;
