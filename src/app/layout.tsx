import type { Metadata } from "next";
import { Nunito, Kosugi_Maru } from "next/font/google";
import { HelloIntro } from "@/components/HelloIntro";
import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const kosugiMaru = Kosugi_Maru({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julia Okada",
  description: "Computer Science student and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${kosugiMaru.variable}`}
    >
      <body className="antialiased">
        <HelloIntro />
        {children}
      </body>
    </html>
  );
}
