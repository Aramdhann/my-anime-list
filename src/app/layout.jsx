import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyAnimeList - Remake",
  description: "build for training my skill",
};

export default function RootLayout({ children }) {
  return (
    <html lang="enE">
      <body className={`${inter.className} bg-zinc-800 text-slate-200`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
