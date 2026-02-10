import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: {
    default: "Augmentum Advisory",
    template: "%s | Augmentum Advisory",
  },
  description:
    "A boutique advisory firm that blends insight, action, and systems-level clarity. We help organizations solve bold, complex, high-stakes problems.",
  keywords: [
    "consulting",
    "advisory",
    "Africa",
    "strategy",
    "digital transformation",
    "policy innovation",
    "venture building",
  ],
  authors: [{ name: "Augmentum Advisory" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://augmentum.co",
    siteName: "Augmentum Advisory",
    title: "Augmentum Advisory",
    description:
      "A boutique advisory firm that blends insight, action, and systems-level clarity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augmentum Advisory",
    description:
      "A boutique advisory firm that blends insight, action, and systems-level clarity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
