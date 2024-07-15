"use client"

import { useMouse } from '@/contexts/mouse-context'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
    const {x,y, translateXValue, translateYValue} = useMouse()
    const container = useRef<HTMLDivElement | null>(null);

    // useGSAP(
    //     () => {
    //         // gsap code here...
    //         gsap.to('.hello', { x: 10 }); // <-- automatically reverted
    //     },
    //     { scope: container }
    // ); 

  return (
    <div className='[writing-mode:vertical-lr] scale-[-1] h-screen w-[var(--navbar-width)]  font-bebas fixed z-[100]'>
        
        <ul className='w-full h-full flex items-center justify-center text-3xl text-[#B3D1D6]'>
            <div ref={container} className={`flex gap-7 relative z-[70] `} style={{ transform: `translate(${translateXValue}px, ${translateYValue}px)` }}>
                <span className='absolute top-0 left-0 w-full h-full  '></span>
                
                <a href='/' className={`relative p-1 py-2 flex items-center justify-center hello aboutLink`}>
                    About
                    {/* <span className='absolute bottom-0 left-0 bg-[#88BAC2] w-full h-full z-[-1] '></span> */}
                </a>
                <a href='/projects' className='relative p-1 py-2 flex items-center justify-center aboutLink'>Projects</a>
                <a href='/skills' className='relative p-1 py-2 flex items-center justify-center aboutLink'>Skills</a>
                <a href='/contact' className='relative p-1 py-2 flex items-center justify-center aboutLink'>Contact</a>
            </div>
        </ul>
    </div>
  )
}

export default Navbar