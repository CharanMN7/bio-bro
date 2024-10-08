import React from "react";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
// import Footer from "@/app/components/Footer";
import "./globals.css";
import { metaData } from "./utils/metaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metaData["app_name"],
  description: metaData["description"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container mx-auto max-w-screen-xl">
          <Header name={metaData["app_name"]} />
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
