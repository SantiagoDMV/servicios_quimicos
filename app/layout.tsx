import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import VerticalTab from "./components/Tab/Vertical/VerticalTab";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full`}
      >
        <div className="md:flex min-h-screen ">
          <VerticalTab />
          <div className="p-6 pt-20 md:pt-6  bg-gray-50 text-medium text-black dark:text-gray-400 dark:bg-gray-800 w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
