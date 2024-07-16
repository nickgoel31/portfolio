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
            <div className='fixed top-0 left-0 w-full p-4 flex items-center gap-4 justify-end'>
                <div className='flex items-center gap-4 p-2 px-4 justify-center bg-gradient-to-t !from-[#5e7f85] !via-[#7cebf5] !to-[#b5ffff] rounded-full cursor-pointer'>
                    <button  className=' font-bebas text-[#0A1112]'>
                        <Menu size={20}/>
                    </button>
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
            <a href='/'
              className='text-7xl relative font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]' 
              onMouseEnter={() => setIsHovered("/about")} 
              onMouseLeave={() => setIsHovered("")} 
              style={{ transform: `translate(-${translateXState}px, ${translateYState}px)` }}
            >
              ABOUT
              <p className={`absolute top-0 left-0 bg-gradient-to-t text-transparent bg-clip-text !from-[#2b3739] !via-[#66dbe6] !to-[#9af0f0] opacity-0 transition ${isHovered === "/about" && 'opacity-100'}`}>ABOUT</p>
            </a>
            <a href='/projects'
              className='text-7xl font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]' 
              onMouseEnter={() => setIsHovered("/projects")} 
              onMouseLeave={() => setIsHovered("")} 
              style={{ transform: `translate(-${translateXState}px, ${translateYState}px)` }}
            >
              PROJECTS
              <p className={`absolute top-0 left-0 bg-gradient-to-t text-transparent bg-clip-text !from-[#2b3739] !via-[#66dbe6] !to-[#9af0f0] opacity-0 transition ${isHovered === "/projects" && 'opacity-100'}`}>PROJECTS</p>
            </a>
            <a href='/skills'
              className='text-7xl font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]' 
              onMouseEnter={() => setIsHovered("/skills")} 
              onMouseLeave={() => setIsHovered("")} 
              style={{ transform: `translate(-${translateXState}px, ${translateYState}px)` }}
            >
              SKILLS
              <p className={`absolute top-0 left-0 bg-gradient-to-t text-transparent bg-clip-text !from-[#2b3739] !via-[#66dbe6] !to-[#9af0f0] opacity-0 transition ${isHovered === "/skills" && 'opacity-100'}`}>SKILLS</p>
            </a>
            <a href='/contact'
              className='text-7xl font-bebas bg-gradient-to-t text-transparent bg-clip-text !from-[#404b4d] !via-[#c5f5f9] !to-[#def6f6]' 
              onMouseEnter={() => setIsHovered("/contact")} 
              onMouseLeave={() => setIsHovered("")} 
              style={{ transform: `translate(-${translateXState}px, ${translateYState}px)` }}
            >
              CONTACT
              <p className={`absolute top-0 left-0 bg-gradient-to-t text-transparent bg-clip-text !from-[#2b3739] !via-[#66dbe6] !to-[#9af0f0] opacity-0 transition ${isHovered === "/contact" && 'opacity-100'}`}>CONTACT</p>
            </a>
          </div>

          <div className='z-[]'>
            <div>
              {isHovered === "/about" && (
                <div>
                  <div className="z-[21] absolute top-[10%] right-[10%] flex flex-col justify-center items-center gap-6 animate-fade" style={{ transform: `translate(calc(${translateXState}%), calc(${translateYState}%))` }}>
                    <div className="w-40 h-40 bg-[#6ee4ff20]"></div>
                    <p className="max-w-64 font-bebas text-center opacity-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam minus dolore, odio cumque aspernatur fuga!</p>
                  </div>
                  <div className="z-[20] absolute top-[20%] left-[10%] animate-fade">
                    <h1 className="font-semibold text-3xl text-[#65A0AD] opacity-20 [writing-mode:vertical-lr]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>{"コーディングは私の情熱です。"}</h1>
                  </div>
                </div>
              )}
              {isHovered === "/projects" && (
                <div>
                  <div className="z-[21] absolute top-[15%] right-[12%] flex flex-col justify-center items-center gap-6 animate-fade" style={{ transform: `translate(calc(${translateXState}%), calc(${translateYState}%))` }}>
                    <div className='rounded-lg border-[#65A0AD50] border-2 p-4 w-80 aspect-video flex items-center justify-center'>
                      <PlayCircle size={40} className='text-[#65A0AD50]' />
                    </div>
                  </div>
                  <div className="z-[20] absolute top-[50%] left-[11%] animate-fade" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                    <div className='flex flex-col gap-2'>
                      {cards.slice(0, 3).map((card) => (
                        <div key={card.id} className='flex flex-col gap-2 items-center justify-center p-3 rounded-md bg-[#6ee4ff10]'>
                          <div className='font-bebas text-[#65A0AD40]'>
                            {card.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {isHovered === "/contact" && (
                <div>
                  <div className="z-[21] absolute top-[10%] right-[10%] flex flex-col justify-center items-center gap-6 animate-fade" style={{ transform: `translate(calc(${translateXState}%), calc(${translateYState}%))` }}>
                    <p className="max-w-64 font-bebas text-center opacity-20 text-[#65A0AD]">01011001 01001111 01010101 00100000 01000001 01010010 01000101 00100000 01000100 01001111 01001001 01001110 </p>
                  </div>
                  <div className="z-[20] absolute top-[20%] left-[10%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD] [writing-mode:vertical-lr]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>{"01000111 00100000 01000001 01001101 01000001 01011010 01001001 01001110 01000111 00100001 00001010 01001011 01000101 01000101 01010000 00100000 01001001 01010100 00100000 01010101 01010000 00101110"}</h1>
                  </div>
                </div>
              )}
              {isHovered === "/skills" && (
                <div>
                  <div className="z-[20] absolute top-[20%] right-[10%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                      <RiNextjsFill size={50}/>
                    </h1>
                  </div>
                  <div className="z-[20] absolute top-[40%] right-[17%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                      <IoLogoJavascript size={50}/>
                    </h1>   
                  </div>
                  <div className="z-[20] absolute top-[60%] right-[22%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                      <SiMongodb size={50}/>
                    </h1>   
                  </div>
                  <div className="z-[20] absolute top-[70%] right-[12%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                      <SiJsonwebtokens size={50}/>
                    </h1>   
                  </div>
        
                  <div className="z-[20] absolute top-[20%] left-[10%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                      <FaReact size={50}/>
                    </h1>
                  </div>
                  <div className="z-[20] absolute top-[40%] left-[17%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                      <FaPython size={50}/>
                    </h1>   
                  </div>
                  <div className="z-[20] absolute top-[60%] left-[22%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                      <SiDjango size={50}/>
                    </h1>   
                  </div>
                  <div className="z-[20] absolute top-[70%] left-[12%] animate-fade">
                    <h1 className="max-w-64 font-bebas text-center opacity-20  text-[#65A0AD]" style={{ transform: `translate(calc(${translateXState}% * 2), calc(${translateYState}% * 2))` }}>
                      <SiTypescript size={50}/>
                    </h1>   
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNavbar