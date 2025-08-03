"use client";

import DetailHeader from "@/components/typography/DetailHeader";
import { cn } from "@/lib/utils";
import { FaqItem } from "@/types/faq";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqItems: FaqItem[] = [
  {
    id: 1,
    title: "Apa itu metode D.O.A TRTO?",
    content:
      "D.O.A TRTO adalah singkatan dari Divine Oracular Assistance Tension Releasing Technique Online, yaitu sebuah pendekatan holistik yang dirancang untuk membantu individu melepaskan ketegangan emosional dan mental secara mendalam melalui panduan spiritual dan teknik relaksasi.",
    created_at: "2025-01-01T10:00:00Z",
    updated_at: "2025-01-01T10:00:00Z",
  },
  {
    id: 2,
    title: "Bagaimana cara kerja metode ini?",
    content:
      "Metode ini bekerja dengan menggabungkan teknik pernapasan, afirmasi spiritual, dan asistensi orakular untuk mengidentifikasi serta melepaskan ketegangan yang tersimpan di dalam tubuh dan pikiran.",
    created_at: "2025-01-02T10:00:00Z",
    updated_at: "2025-01-02T10:00:00Z",
  },
  {
    id: 3,
    title: "Apakah metode ini cocok untuk semua usia?",
    content:
      "Ya, metode ini aman digunakan oleh semua usia, mulai dari remaja hingga lansia. Setiap sesi dapat disesuaikan dengan kebutuhan dan tingkat kenyamanan peserta.",
    created_at: "2025-01-03T10:00:00Z",
    updated_at: "2025-01-03T10:00:00Z",
  },
  {
    id: 4,
    title: "Berapa lama durasi satu sesi D.O.A TRTO?",
    content:
      "Durasi rata-rata satu sesi adalah sekitar 60 menit, namun dapat bervariasi tergantung pada kebutuhan dan tingkat ketegangan peserta.",
    created_at: "2025-01-04T10:00:00Z",
    updated_at: "2025-01-04T10:00:00Z",
  },
  {
    id: 5,
    title: "Apakah sesi dilakukan secara online?",
    content:
      "Ya, semua sesi dilakukan secara daring (online), memungkinkan Anda untuk mengikuti dari mana saja dengan kenyamanan rumah Anda sendiri.",
    created_at: "2025-01-05T10:00:00Z",
    updated_at: "2025-01-05T10:00:00Z",
  },
  {
    id: 6,
    title: "Apakah ada efek samping setelah mengikuti sesi?",
    content:
      "Secara umum tidak ada efek samping, namun beberapa peserta mungkin mengalami reaksi emosional ringan seperti menangis atau merasa lega, yang merupakan tanda proses pelepasan ketegangan sedang berlangsung.",
    created_at: "2025-01-06T10:00:00Z",
    updated_at: "2025-01-06T10:00:00Z",
  },
  {
    id: 7,
    title: "Berapa biaya untuk mengikuti sesi ini?",
    content:
      "Biaya per sesi dapat bervariasi tergantung pada durasi dan paket yang dipilih. Silakan hubungi kami untuk informasi lebih lanjut mengenai paket harga yang tersedia.",
    created_at: "2025-01-07T10:00:00Z",
    updated_at: "2025-01-07T10:00:00Z",
  },
  {
    id: 8,
    title: "Apakah saya perlu persiapan sebelum sesi?",
    content:
      "Tidak ada persiapan khusus. Anda hanya perlu memastikan tempat yang tenang, koneksi internet yang stabil, dan keterbukaan diri untuk mengikuti proses dengan sepenuh hati.",
    created_at: "2025-01-08T10:00:00Z",
    updated_at: "2025-01-08T10:00:00Z",
  },
];

const FAQPage = () => {
  const [openId, setOpenId] = useState<number | null>(faqItems[0]?.id ?? null);

  const toggleId = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="FAQ"
          description="Lebih dari 500 orang sudah terbantu dan merasakan kebahagiaan dengan Divine Oracular Assistance Tension Releasing Technique Online"
        />
      </div>

      <div className="mt-[100px] mx-auto max-w-[1140px] space-y-6">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={cn(
                "w-full rounded-xl border-2 bg-white",
                isOpen ? "shadow-md border-tertiary" : "shadow-xs border-muted"
              )}
            >
              <button
                className={cn(
                  "flex items-center justify-between w-full px-[15px] py-[17px] text-xs font-bold text-left text-gray-900 lg:text-[25px] lg:px-[30px] pt-[20px] lg:pt-[30px]",
                  isOpen ? "lg:pb-[20px]" : "lg:pb-[30px]"
                )}
                onClick={() => toggleId(item.id)}
              >
                <span>{item.title}</span>
                {isOpen ? (
                  <ChevronUp className="text-primary size-5 lg:size-7" />
                ) : (
                  <ChevronDown className="text-primary size-5 lg:size-7" />
                )}
              </button>

              {isOpen && (
                <div className="px-[15px] border-gray-300 pb-[15px] lg:px-[30px] lg:pb-[30px]">
                  <div
                    className="text-xl font-medium text-muted text-justify md:text-xl"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQPage;
