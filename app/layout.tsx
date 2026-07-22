import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Quiosco NextJS con AppRouter y Prisma",
  description: "Quiosco NextJS con AppRouter y Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${font.className} bg-green-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
