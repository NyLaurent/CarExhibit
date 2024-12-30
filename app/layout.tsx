import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar,Footer } from "@/components";


export const metadata: Metadata = {
  title: "Car Exhibit",
  description: "Experience the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
       className="relative"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
