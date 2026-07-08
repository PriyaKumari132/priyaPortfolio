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
  title: "Priya Tiwari | Full Stack Developer | Web Developer Portfolio",
  description: "Portfolio of Priya Tiwari - Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and modern web development. View projects and expertise.",
  keywords: "Priya Tiwari, Full Stack Developer, Web Developer, React Developer, Next.js Developer, JavaScript, TypeScript, Node.js, Front-end Developer, Back-end Developer, Portfolio, Web Development, Software Engineer",
  robots: "index, follow",
  authors: [{ name: "Priya Tiwari" }],
  creator: "Priya Tiwari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyakumari132.github.io",
    siteName: "Priya Tiwari Portfolio",
    title: "Priya Tiwari | Full Stack Developer",
    description: "Explore the portfolio of Priya Tiwari, a talented Full Stack Developer with expertise in modern web technologies.",
    images: [
      {
        url: "https://priyakumari132.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priya Tiwari - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@PriyaTiwari",
    title: "Priya Tiwari | Full Stack Developer",
    description: "Full Stack Developer portfolio showcasing projects and expertise in web development",
    images: ["https://priyakumari132.github.io/og-image.png"],
  },
  verification: {
    google: "googlecd6fb550021da049",
  },
  alternates: {
    canonical: "https://priyakumari132.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
