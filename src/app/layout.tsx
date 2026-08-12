import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "../styles/globals.css";

// Montserrat para títulos, Inter para o corpo.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julia Okada",
  description: "Portfólio de Julia Okada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
