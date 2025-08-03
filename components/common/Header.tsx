"use client";

import { routing } from "@/src/i18n/routing";
import clsx from "clsx";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoPlaceholder } from "../../lib/helper/ImagePlacholder";
import ContactPopup from "./ContactPopup";
import LanguageSwitcher from "./LanguageSwitcher";

const menuItems = [
  { name: "Home", route: "/" },
  {
    name: "About DOA",
    children: [
      { name: "What is DOA?", route: "/about-doa/what-is-doa" },
      { name: "Story of CRA", route: "/about-doa/story-of-cra" },
      { name: "How it Works", route: "/about-doa/how-it-works" },
      {
        name: "When DOA System is Effective?",
        route: "/about-doa/when-doa-system-is-effective",
      },
      {
        name: "Session Protocol",
        route: "/about-doa/session-protocol",
      },
    ],
  },
  { name: "Trust & Transparency", route: "/trust-and-transparency" },
  { name: "Testimonial", route: "/testimonial" },
  { name: "FAQ", route: "/faq" },
  { name: "Article", route: "/article" },
  { name: "Contact us", route: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const removeLocale = (path: string) => {
    const locales = routing.locales;
    const parts = path.split("/");
    if (
      parts.length > 1 &&
      locales.includes(parts[1] as (typeof locales)[number])
    ) {
      return "/" + parts.slice(2).join("/");
    }
    return path;
  };

  const isRouteActive = (route: string) => {
    const cleanPath = removeLocale(pathname);
    if (route === "/") return cleanPath === "/";
    return cleanPath === route || cleanPath.startsWith(`${route}/`);
  };

  const isAboutDOARoute = () => {
    const cleanPath = removeLocale(pathname);
    return cleanPath.startsWith("/about-doa");
  };

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 flex backdrop-blur-md bg-white/30 items-center justify-between px-[150px] py-4 transition-colors duration-300",
          isScrolled ? "shadow-md" : "shadow-none"
        )}
      >
        {/* Logo */}
        <div className="relative h-10 w-[100px] md:h-[75px] md:w-[180px]">
          <Image
            src="/logo.svg"
            alt="DOA Official Logo"
            fill
            priority
            placeholder="blur"
            blurDataURL={LogoPlaceholder}
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-[38px] text-md font-normal text-shadow-text">
          {menuItems
            .filter((item) => item.name !== "Contact us")
            .map((item) => {
              const active = isRouteActive(item.route || "");
              const hasChildren = !!item.children;
              const isAboutDOA = item.name === "About DOA";

              return (
                <div key={item.name} className="relative group">
                  {hasChildren ? (
                    <button
                      className={clsx(
                        "transition hover:underline hover:text-primary group-hover:underline group-hover:text-primary",
                        isAboutDOARoute() &&
                          isAboutDOA &&
                          "font-bold underline text-primary"
                      )}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.route}
                      className={clsx(
                        "transition hover:underline hover:text-primary",
                        active && "font-bold underline text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {hasChildren && (
                    <div
                      className={clsx(
                        "absolute top-full left-0 mt-2 w-64 bg-white border rounded shadow-lg transition-all duration-200 z-50",
                        "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.route}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

          <LanguageSwitcher />

          <button
            onClick={() => setShowContactPopup(true)}
            className="px-5 py-2.5 text-md font-medium border-2 rounded-full border-primary text-primary hover:bg-secondary/20 transition"
          >
            Contact us
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="z-50 md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <AlignJustify className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center px-8 pt-24 bg-white text-gray-800 md:hidden">
          {menuItems
            .filter((item) => item.name !== "Contact us")
            .map((item) => {
              const active = isRouteActive(item.route || "");
              return (
                <Link
                  key={item.name}
                  href={item.route || "#"}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "w-full py-4 text-xs text-center border-b border-gray-300 transition",
                    active && "font-bold underline text-primary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

          <div className="w-full py-4 border-b border-gray-300 flex justify-center">
            <LanguageSwitcher />
          </div>

          <button
            onClick={() => {
              setShowContactPopup(true);
              setMenuOpen(false);
            }}
            className="w-full py-4 text-xs font-medium text-center transition border-b border-gray-300"
          >
            Contact us
          </button>
        </div>
      )}

      {showContactPopup && (
        <ContactPopup onClose={() => setShowContactPopup(false)} />
      )}
    </>
  );
};

export default Header;
