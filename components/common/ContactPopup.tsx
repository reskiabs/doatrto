"use client";

import { Mail, MapPin, Phone, X } from "lucide-react";

interface ContactPopupProps {
  onClose: () => void;
}

const ContactPopup = ({ onClose }: ContactPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 bg-opacity-60">
      <div className="bg-white rounded-2xl md:rounded-[20px] p-5 md:p-10 w-[90%] md:w-[600px] md:h-[546px] relative">
        <button
          onClick={onClose}
          className="absolute text-gray-600 top-4 right-4 md:top-6 md:right-6 hover:text-black"
        >
          <X className="size-5 md:size-[25px]" />
        </button>

        <h2 className="mb-4 md:mb-6 text-xl md:text-[40px] font-bold text-center text-primary">
          Hubungi Kami
        </h2>

        <div className="space-y-4 md:space-y-9">
          <div className="flex items-center gap-2.5 md:gap-4">
            <Phone className="text-primary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              +62 21 42882988
            </span>
          </div>

          <div className="flex items-center gap-2.5 md:gap-4">
            <Mail className="text-primary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              kontak.fgbmfi@gmail.com
            </span>
          </div>

          <div className="flex items-start gap-2.5 md:gap-4">
            <MapPin className="text-primary size-5 md:size-[30px]" />
            <span className="text-xs font-medium md:text-xl">
              Graha Cempaka Mas,
              <br />
              Jl. Letjen Suprapto Blok E/11, RW.8, Sumur Batu,
              <br />
              Kec. Kemayoran, Jakarta Pusat, DKI Jakarta 10640
            </span>
          </div>

          <button className="w-full h-[32px] md:h-[40px] bg-primary rounded-full text-white text-[12px] md:text-[16px] font-medium text-center">
            Direction Google Maps
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
