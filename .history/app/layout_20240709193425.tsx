import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Smartphone } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Goel",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <>
        <div className=''>{children}</div>

      
        </>
      </body>
    </html>
  );
}
