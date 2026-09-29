import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from "@/components/header";

const helveticaNeue = localFont({
  src: "../public/fonts/HelveticaNeueLTPro-Thin.otf",
  variable: "--font-helvetica",
  weight: "200",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Italo Rojas - Portfolio",
  description: "Portfolio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.variable} ${jetbrainsMono.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
