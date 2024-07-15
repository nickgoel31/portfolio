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

        <div className='block lg:hidden'>
          <div className='flex flex-col w-full h-screen items-center justify-center space-y-2 text-center px-4 py-4'>
            <Smartphone size={30}/>
            <h1 className='text-2xl font-semibold'>This website is only available on desktop</h1>
            <p className='text-lg'>Please open this page on a desktop browser or view a simplified portfolio&nbsp; 
              <a href="/mobile" className='text-blue-400 underline'>here</a>
            </p>
          </div>
        </div>
        </>
      </body>
    </html>
  );
}
