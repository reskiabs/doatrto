"use client";

import { Mail, MapPin, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup = ({ onClose }: ContactPopupProps) => {
  const t = useTranslations("ContactUs");

  const phoneNumber = "+6287888893838";
  const email = "info.doatrto@gmail.com";
  const address = "Jl. Sudirman No. 10, Jakarta";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 bg-opacity-60">
      <div className="bg-white rounded-2xl md:rounded-[20px] p-5 md:p-10 w-[90%] md:w-[600px] relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-4 right-4 md:top-6 md:right-6 hover:text-black hover:cursor-pointer transition-colors"
          aria-label={t("title")}
        >
          <X className="size-5 md:size-[25px]" />
        </button>

        {/* Title */}
        <h2 className="mb-4 md:mb-6 text-xl md:text-[40px] font-bold text-center text-tertiary">
          {t("title")}
        </h2>

        <div className="space-y-4 md:space-y-9">
          {/* Phone */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2.5 md:gap-4 hover:text-tertiary transition"
          >
            <Phone className="text-tertiary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              +62 878-8889-3838
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2.5 md:gap-4 hover:text-tertiary transition"
          >
            <Mail className="text-tertiary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              info.doatrto@gmail.com
            </span>
          </a>

          {/* Address / Google Maps */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 md:gap-4 hover:text-tertiary transition"
          >
            <MapPin className="text-tertiary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              {t("address")}
            </span>
          </a>

          {/* Button for Direction */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center h-[32px] md:h-[40px] bg-tertiary rounded-full text-white text-[12px] md:text-base font-medium text-center hover:cursor-pointer transition-colors"
          >
            {t("buttonDirection")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
