"use client"

import Navbar from "@/components/navbar";
import { MouseContextProvider } from "@/contexts/mouse-context";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { BiMobile } from "react-icons/bi";

// gsap.registerPlugin(useGSAP);


export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const container = useRef<HTMLBodyElement | null>(null);
  u
); 


  return (
    <MouseContextProvider>
        <html lang="en">
            <body ref={container} className="gap-8 overflow-hidden ">
                <div className="md:flex hidden">
                  <Navbar />
                  {children}
                </div>
                <div className="md:hidden flex w-screen h-screen">
                  <div className="flex w-full h-full items-center justify-center p-6 font-medium text-sm flex-col gap-3 text-center">
                    <BiMobile size={40}/>
                    <p>
                    This website is best viewed on a desktop, to view on mobile device please head to /mobile page <a href="/mobile" className="underline underline-offset-1 font-bold text-blue-300">here</a>.
                    </p> 
                  </div>
                </div>
            </body>
        </html>
    </MouseContextProvider>
  );
}
