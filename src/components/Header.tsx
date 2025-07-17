"use client";

import clsx from "clsx";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoPlaceholder } from "../lib/helper/ImagePlacholder";
import ContactPopup from "./ContactPopup";
import LocalSwitcher from "./common/LocalSwitcher";

const menuItems = [
  { name: "Beranda", route: "/" },
  { name: "Tentang Kami", route: "/about-us" },
  { name: "Artikel", route: "/articles" },
  { name: "Kegiatan", route: "/activities" },
  { name: "Hubungi Kami", route: "/" }, // route dummy, karena pakai popup
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-6 py-4 bg-white md:pr-[60px] md:pl-[30px] lg:px-[150px]">
        <div className="relative h-10 w-[100px] md:h-[75px] md:w-[180px]">
          <Image
            src="logo.svg"
            alt="Logo"
            fill
            blurDataURL={LogoPlaceholder}
            placeholder="blur"
          />
        </div>

        {/* Desktop menu */}
        <nav className="items-center hidden space-x-[38px] text-md font-normal text-shadow-text md:flex hover:cursor-pointer">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(item.route + "/");

            const isHubungiKami = item.name === "Hubungi Kami";

            if (isHubungiKami) {
              return (
                <button
                  key={item.name}
                  onClick={() => setShowContactPopup(true)}
                  className={clsx(
                    "px-5 py-2.5 text-md font-normal border rounded-full border-primary-dark text-primary-dark hover:bg-tertiary transition"
                  )}
                >
                  {item.name}
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.route}
                className={clsx(
                  "transition hover:underline hover:text-primary-dark",
                  isActive && "font-bold underline text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}

          <LocalSwitcher />
        </nav>

        {/* Mobile menu icon */}
        <div className="z-50 md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="size-6 text-primary" />
            ) : (
              <AlignJustify className="size-6 text-primary" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 h-[100%] flex flex-col items-center justify-start px-8 pt-24 text-lg text-gray-800 bg-white md:hidden">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(item.route + "/");

            const isHubungiKami = item.name === "Hubungi Kami";

            if (isHubungiKami) {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setShowContactPopup(true);
                    setMenuOpen(false);
                  }}
                  className="w-full py-4 text-xs font-medium text-center transition border-b border-gray-300"
                >
                  {item.name}
                </button>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.route}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "w-full py-4 text-xs font-normal text-center border-b border-gray-300 transition",
                  isActive && "font-bold underline text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}

      {/* Popup Kontak */}
      {showContactPopup && (
        <ContactPopup onClose={() => setShowContactPopup(false)} />
      )}
    </>
  );
};

export default Header;
