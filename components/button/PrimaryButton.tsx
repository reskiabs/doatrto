"use client";

import { MoveRight } from "lucide-react";
import Link from "next/link";

interface PrimaryButtonProps {
  title: string;
  subtitle?: string;
  href: string;
}

const PrimaryButton = ({ title, subtitle, href = "#" }: PrimaryButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-gradient-to-r from-secondary to-primary font-medium text-lg flex items-center justify-between px-6 py-4 rounded-full text-white hover:cursor-pointer"
    >
      {subtitle && (
        <>
          <span>{subtitle}</span>
          <span className="mx-4 h-6 w-px bg-white opacity-50"></span>
        </>
      )}
      <span className="flex items-center gap-2.5">
        {title} <MoveRight size={20} />
      </span>
    </Link>
  );
};

export default PrimaryButton;
