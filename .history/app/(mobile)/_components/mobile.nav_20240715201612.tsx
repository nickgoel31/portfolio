"use client"

import { Menu } from 'lucide-react'
import { cards } from '@/data'
import { PlayCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { FaReact, FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiDjango, SiMongodb, SiExpress,SiJsonwebtokens } from "react-icons/si";

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const [isHovered, setIsHovered] = useState<string>("")

  const [translateYState, setTranslateYState] = useState<number>(0)
  const [translateXState, setTranslateXState] = useState<number>(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        setTranslateXState(e.clientX * 0.02)
        setTranslateYState(e.clientY * 0.02)
      
    }

    const menuElement = menuRef.current
    menuElement?.addEventListener("mousemove", handleMouseMove)

    return () => {
      menuElement?.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMenuOpen])
  return (
    <>
    {
        !isMenuOpen && (
          <div className='fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-4 p-3 px-5 justify-center bg-gradient-to-t !from-[#5e7f85] !via-[#7cebf5] !to-[#b5ffff] rounded-full cursor-pointer' onClick={() => setIsMenuOpen(true)}>
            <button  className='text-3xl font-bebas text-[#0A1112]'>MENU</button>
          </div>
        )
      }
    </>
    <div className='fixed top-0 left-0 w-full p-4 flex items-center gap-4 justify-end'>
        <div className='flex items-center gap-4 p-2 px-4 justify-center bg-gradient-to-t !from-[#5e7f85] !via-[#7cebf5] !to-[#b5ffff] rounded-full cursor-pointer'>
            <button  className=' font-bebas text-[#0A1112]'>
                <Menu size={20}/>
            </button>
        </div>
    </div>
  )
}

export default MobileNavbar