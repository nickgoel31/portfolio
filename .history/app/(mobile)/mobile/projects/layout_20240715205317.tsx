"use client"

import Navbar from "@/components/navbar";
import { MouseContextProvider } from "@/contexts/mouse-context";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { BiDesktop, BiMobile } from "react-icons/bi";
import MobileNavbar from "../../_components/mobile.nav";

// gsap.registerPlugin(useGSAP);


export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const container = useRef<HTMLBodyElement | null>(null);


  return (
                <div className="md:hidden block">
                  {/* <Navbar /> */}
                  <MobileNavbar />
                  {children}
                </div>
                <div className="md:flex hidden w-screen h-screen">
                  <div className="flex w-full h-full items-center justify-center p-6 font-medium text-sm flex-col gap-3 text-center">
                    <BiDesktop size={40}/>
                    <p>
                        This is the mobile version of the site. You can view the desktop version <a href="/" className="underline underline-offset-1 font-bold text-blue-300">here</a>.
                    </p> 
                  </div>
                </div>
            </body>
        </html>
    </MouseContextProvider>
  );
}
