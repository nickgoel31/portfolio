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
            <div className='fixed top-0 left-0 w-full'>
              <div className='border-b '>
                This website is best viewed on a desktop. Please view the desktop version <a href='/' className='underline underline-offset-1 font-bold text-blue-300'>here</a>.
              </div>
              <div className='flex items-center gap-4 justify-end p-4'>
                <div className='flex items-center gap-4 p-2 px-4 justify-center bg-gradient-to-t !from-[#5e7f85] !via-[#7cebf5] !to-[#b5ffff] rounded-full cursor-pointer' onClick={() => setIsMenuOpen(true)}>
                    <button  className=' font-bebas text-[#0A1112]'>
                        <Menu size={20}/>
                    </button>
                </div>
              </div>   
            </div>
        )
      }

{isMenuOpen && (
        <div ref={menuRef} className='fixed left-0 top-0 w-screen h-screen overflow-hidden z-[200] backdrop-blur-xl bg-[rgba(33,63,62,0.23)] animate-fade'>
          <button onClick={() => setIsMenuOpen(false)} className='absolute left-8 top-8 text-4xl font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]'>
            X
          </button>
          <div className='w-full h-full flex items-center justify-center flex-col gap-8 uppercase'>
            <a href='/mobile'
              className='text-5xl relative font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]' 
              onMouseEnter={() => setIsHovered("/mobile")} 
              onMouseLeave={() => setIsHovered("")} 
              style={{ transform: `translate(-${translateXState}px, ${translateYState}px)` }}
            >
              ABOUT
              <p className={`absolute top-0 left-0 bg-gradient-to-t text-transparent bg-clip-text !from-[#2b3739] !via-[#66dbe6] !to-[#9af0f0] opacity-0 transition ${isHovered === "/about" && 'opacity-100'}`}>ABOUT</p>
            </a>
            <a href='/mobile/projects'
              className='text-5xl font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]' 
              onMouseEnter={() => setIsHovered("/mobile/projects")} 
              onMouseLeave={() => setIsHovered("")} 
              style={{ transform: `translate(-${translateXState}px, ${translateYState}px)` }}
            >
              PROJECTS
              <p className={`absolute top-0 left-0 bg-gradient-to-t text-transparent bg-clip-text !from-[#2b3739] !via-[#66dbe6] !to-[#9af0f0] opacity-0 transition ${isHovered === "/projects" && 'opacity-100'}`}>PROJECTS</p>
            </a>
            <a href='/mobile/skills'
              className='text-5xl font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]' 
              onMouseEnter={() => setIsHovered("/mobile/skills")} 
              onMouseLeave={() => setIsHovered("")} 
              style={{ transform: `translate(-${translateXState}px, ${translateYState}px)` }}
            >
              SKILLS
              <p className={`absolute top-0 left-0 bg-gradient-to-t text-transparent bg-clip-text !from-[#2b3739] !via-[#66dbe6] !to-[#9af0f0] opacity-0 transition ${isHovered === "/skills" && 'opacity-100'}`}>SKILLS</p>
            </a>
            <a href='/mobile/contact'
              className='text-5xl font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]' 
              onMouseEnter={() => setIsHovered("/mobile/contact")} 
              onMouseLeave={() => setIsHovered("")} 
              style={{ transform: `translate(-${translateXState}px, ${translateYState}px)` }}
            >
              CONTACT
              <p className={`absolute top-0 left-0 bg-gradient-to-t text-transparent bg-clip-text !from-[#2b3739] !via-[#66dbe6] !to-[#9af0f0] opacity-0 transition ${isHovered === "/contact" && 'opacity-100'}`}>CONTACT</p>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNavbar