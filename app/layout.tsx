import React from "react";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
// import Footer from "@/app/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Console",
  description: "Bioinformatics console application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container mx-auto max-w-screen-xl">
          {" "}
          {/* Apply main container class */}
          <Header />
          <main className="flex-1 flex">
            <Sidebar />
            <div className="p-4 w-full">{children}</div>
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
