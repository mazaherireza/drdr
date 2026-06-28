import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import FooterComponent from "@/components/footer/footer.component";
import HeaderComponent from "@/components/header/header.component";
import ToasterComponent from "@/components/toaster/toaster.component";

import "@/styles/typography.css";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتردکتر",
  description: "پلت‌فرم جامع جستجوی دکتر و رزرو نوبت آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
        <ToasterComponent />
      </body>
    </html>
  );
}
