import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "deusXmachina - Robot Fleet Energy Optimization",
  description:
    "Optimize your industrial robot fleet and slash energy use by up to 30%. Save thousands per robot while reducing CO₂ emissions and mechanical wear.",
  keywords: [
    "robot energy optimization",
    "industrial robots",
    "energy efficiency",
    "manufacturing optimization",
    "robot fleet management",
    "CO2 reduction",
    "energy savings",
    "process optimization",
    "industrial automation",
  ],
  authors: [{ name: "deusXmachina" }],
  creator: "deusXmachina",
  publisher: "deusXmachina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://deusxmachina.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deusxmachina.dev",
    siteName: "deusXmachina",
    title: "deusXmachina - Robot Fleet Energy Optimization",
    description:
      "Optimize your industrial robot fleet and slash energy use by up to 30%. Save thousands per robot while reducing CO₂ emissions and mechanical wear.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "deusXmachina - Robot Fleet Energy Optimization. Save energy, reduce costs, extend equipment life.",
        type: "image/png",
      },
    ],
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
