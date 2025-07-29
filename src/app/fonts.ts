// app/fonts.ts (jika belum ada file ini, buat saja)
import { Koulen } from "next/font/google";

export const koulen = Koulen({
  subsets: ["latin"],
  weight: "400", // hanya tersedia 400 untuk Koulen
});
