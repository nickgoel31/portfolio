"use client"

import { Linkedin, Mail } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { FaSquareUpwork } from "react-icons/fa6";

const ContactPage = () => {
    const ref= useRef<HTMLDivElement | null>(null)
    const [translateYState, setTranslateYState] = useState<number>(0)
    const [translateXState, setTranslateXState] = useState<number>(0)
  
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
          setTranslateXState(e.clientX * 0.02)
          setTranslateYState(e.clientY * 0.02)
      }
      ref.current?.addEventListener("mousemove", handleMouseMove)
  
      return () => {
        ref.current?.removeEventListener("mousemove", handleMouseMove)
      }
    }, [])
  return (
    <div ref={ref} className='p-8 flex items-center justify-center w-full h-full overflow-hidden gap-8 flex-col relative '>
        <h1 className='uppercase font-bebas text-9xl bg-clip-text bg-gradient-to-t from-[#1c2f37] via-[#cee5ef] to-[#badded]  text-transparent translate-y-[20%]' style={{transform: `translate(calc(${translateXState}px*0.7), calc(${translateYState}px*0.7))`}}>CONnect</h1>

        <div className='absolute w-full h-full  font-medium text-[#7aafc5] opacity-10'>
            <Image src={"/symbol1.png"} alt="Symbol" width={2000} height={2000} className="w-[40%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[43%] absolute" style={{transform: `translate(calc(${translateXState}px - 50%), calc(${translateYState}px - 50%))`}}/>
        </div>

        <div className='absolute w-full h-full top-0 left-0 font-medium text-[#7aafc5]'>
            <Link href={'https://www.linkedin.com/in/harsh-goel-cs'} className='absolute top-[35%] left-[25%] -translate-x-[50%] -translate-y-[50%] rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b]' style={{transform: `translate(calc(${translateXState}px - 50%), ${translateYState}px)`}}>
                <Linkedin size={20}/>
                Linkedin
            </Link>
            <Link href={'mailto:harshgoel2004@gmail.com'} className='absolute top-[30%] left-[41.75%] -translate-x-[50%] -translate-y-[50%] rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks' style={{transform: `translate(calc(${translateXState}px - 50%), calc(${translateYState}px - 50%))`}}>
                <Mail size={20}/>
                E-Mail
            </Link>
            <Link href={''} className='absolute top-[30%] left-[60%] -translate-x-[50%] -translate-y-[50%] rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks inset' style={{transform: `translate(calc(${translateXState}px - 50%), calc(${translateYState}px - 50%))`}}>
                <p className='text-sm font-bold'>Ez</p>
                Ezfolio
            </Link>
            <Link href={'https://www.upwork.com/freelancers/~01f93471d93f0593d0?mp_source=share'} className='absolute top-[35%] left-[75%] -translate-x-[50%] -translate-y-[50%] rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks' style={{transform: `translate(calc(${translateXState}px - 50%), ${translateYState}px)`}}>
                <FaSquareUpwork size={20}/>
                Upwork
            </Link>
        </div>
    </div>
  )
}

export default ContactPage