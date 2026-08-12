import type { Metadata } from "next";
import { Montserrat, Inter, Kosugi_Maru } from "next/font/google";
import { HelloIntro } from "@/components/HelloIntro";
import "../styles/globals.css";

// Montserrat aproxima a Circular (fonte do Spotify) para os títulos grandes.
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

// Usada só pelos cumprimentos em japonês/coreano da intro.
const kosugiMaru = Kosugi_Maru({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "This Is Julia Okada",
  description:
    "Portfólio de Julia Okada — estudante de Ciência da Computação e desenvolvedora full-stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} ${kosugiMaru.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        <HelloIntro />
        {children}
      </body>
    </html>
  );
}
