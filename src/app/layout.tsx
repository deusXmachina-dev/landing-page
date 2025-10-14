import type { Metadata } from "next";
import { Figtree, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["700"], // Bold
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular, Medium, SemiBold, Bold
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
        className={`${poppins.variable} ${figtree.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
