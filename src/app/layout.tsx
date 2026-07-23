import type { Metadata } from "next";
//
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Julia Okada — Portfolio",
  description: "Computer Science student and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
