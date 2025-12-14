import { Vazirmatn } from "next/font/google";
import type { Metadata } from "next";

import HeaderComponent from "./components/header/header.component";

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
