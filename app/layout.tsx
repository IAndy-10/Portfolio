import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from "@/components/ui/header";

const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueLTPro-Thin.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/HelveticaNeueLTW0555Roman.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/HelveticaNeueLTW0585Heavy.otf",
      weight: "800",
    },
  ],
  variable: "--font-helvetica",
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
