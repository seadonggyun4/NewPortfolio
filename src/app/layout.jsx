import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// global CSS
import "@/styles/reset.css"
import "@/styles/globals.css"

export const metadata = {
  title: "DongGyun Portfoilo",
  description: "This is a site to introduce front-end developer Dong-gyun.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
