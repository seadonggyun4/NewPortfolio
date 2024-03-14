import type { Metadata } from "next";
import { Inter } from "next/font/google";


// global CSS
import "@/styles/reset.css"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DongGyun Portfoilo",
  description: "This is a site to introduce front-end developer Dong-gyun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
