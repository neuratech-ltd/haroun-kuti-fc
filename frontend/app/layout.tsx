import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import logo from "@/assets/logo/HKM.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Haroun Kuti Football Academy",
  description:
    "Haroun Kuti Football Academy is a football academy that provides training and development for young football players. Our mission is to nurture talent, instill discipline, and promote sportsmanship in aspiring athletes.",
  icons: logo.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
