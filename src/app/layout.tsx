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
  title: "SenseFlow - World's Simplest API for Outbound Calls",
  description:
    "Integrate voice calls into your n8n/make workflows in 1 minute. The world's simplest API for outbound calls with intelligent voice interactions.",
  keywords: [
    "voice API",
    "outbound calls",
    "n8n integration",
    "make.com",
    "workflow automation",
    "voice automation",
    "API",
  ],
  authors: [{ name: "SenseFlow" }],
  creator: "SenseFlow",
  publisher: "SenseFlow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://senseflow.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://senseflow.io",
    siteName: "SenseFlow",
    title: "SenseFlow - World's Simplest API for Outbound Calls",
    description:
      "Integrate voice calls into your n8n/make workflows in 1 minute. The world's simplest API for outbound calls with intelligent voice interactions.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "SenseFlow - World's Simplest API for Outbound Calls. Integration into your n8n/Make etc workflows in 1 minute.",
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
