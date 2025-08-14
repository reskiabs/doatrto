"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const SomethingWentWrong = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      {/* Icon */}
      <AlertTriangle className="text-red-500 w-12 h-12 mb-4 sm:w-16 sm:h-16 sm:mb-6" />

      {/* Headline */}
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 text-center">
        Oops! Something went wrong
      </h1>

      {/* Subtext */}
      <p className="text-sm sm:text-base text-center text-gray-600 mb-6 max-w-xs sm:max-w-md">
        We&apos;re having trouble loading this page. Please{" "}
        <span className="font-bold">refresh the page</span> or go back to the
        homepage.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition text-sm sm:text-base"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default SomethingWentWrong;
