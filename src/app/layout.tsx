
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gilli Gilli Salon and Spa | Beauty & Wellness",
    template: "%s | Gilli Gilli Salon and Spa",
  },
  description:
    "Discover personalised beauty treatments, expert care and relaxing salon experiences at Gilli Gilli Salon and Spa.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fffdf9] text-stone-800 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
