import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "創意設計工作室 | 專業設計服務",
  description: "專業的創意設計工作室，提供品牌設計、網站開發、UI/UX設計等服務。我們用設計改變世界，創意無界限。",
  keywords: ["創意設計", "設計工作室", "品牌設計", "網站設計", "UI/UX設計"],
  authors: [{ name: "Creative Studio Team" }],
  openGraph: {
    title: "創意設計工作室",
    description: "專業的創意設計服務，創意無界限",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
