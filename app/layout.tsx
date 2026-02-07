import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import DisclaimerModal from "@/components/layout/DisclaimerModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auroterra Energy",
  description: "Industrial Polymer & Chemical Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased pt-16`}>
        <DisclaimerModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
