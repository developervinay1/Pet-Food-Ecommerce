import type { Metadata } from "next";
import { Inter, Poppins, Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TopBar from "@/components/TopBar/TopBar";
import NextTopLoader from "nextjs-toploader";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const BubblegumSans = Bubblegum_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="#F1C116" />
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
