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
  title: "Speed Lan House",
  description: "Serviços de informática, consultas, agendamentos e muito mais.",

  openGraph: {
    title: "Speed Lan House",
    description: "Serviços de informática, consultas, agendamentos e muito mais.",
    url: "https://seudominio.com.br",
    siteName: "Speed Lan House",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Speed Lan House",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Speed Lan House",
    description: "Serviços de informática, consultas e agendamentos.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
