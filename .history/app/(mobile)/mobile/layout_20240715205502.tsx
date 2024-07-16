"use client"

import { Smartphone } from 'lucide-react'
import React from 'react'
import Navbar from "@/components/navbar";
import { MouseContextProvider } from "@/contexts/mouse-context";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { BiDesktop, BiMobile } from "react-icons/bi";

const MobileLayout = ({children}:{children:React.ReactNode}) => {
  const container = useRef<HTMLBodyElement | null>(null);
  return (
    <MouseContextProvider>
        <html lang="en">
            <body ref={container} className="gap-8 overflow-hidden ">
            {children}
            </body>
          </html>
    </MouseContextProvider>
   
  )
}

export default MobileLayout