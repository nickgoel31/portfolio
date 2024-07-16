"use client"

import { LucideIcon, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { IconBaseProps, IconType } from "react-icons"

type Props = {
  top?: number,
  left?: number,
  right?: number,
  bottom?: number,
  className?: string,
  skillName: string,
  skillLevel?:"beginner" | "intermediate" | "advanced" | "expert",
  skillLogo?:string,
  skillIcon?: LucideIcon | IconType,
  skillDesc?:string
}

export const SkillBox = ({...props}:Props) => {
  const [modal, setModal] = useState(false)
  const Icon:LucideIcon | IconType | undefined = props.skillIcon
    return (
      <>
        {modal && (
          <div className="fixed w-screen h-screen z-[100] left-0 top-0 flex flex-col">
            <span className="backdrop-blur-sm flex-[2]" onClick={() => setModal(false)}></span>
            <div className=" bottom-0 left-0 w-full p-6 py-8 z-[10] flex-1 bg-[#0f1618] border border-[#1e2e32]">
              <div className="absolute right-4 top-4" onClick={() => setModal(false)}>
                <X />
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <h1 className="font-bold text-4xl">
                  {props.skillName}
                </h1>
                <p className="px-3 py-1 text-sm rounded-full bg-[#2e3f43] text-[#cdd9db] capitalize font-medium">{props.skillLevel || "beginner"}</p>

                <p className="opacity-70 text-sm font-medium">
                  {props.skillDesc}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className={`${props.className}`} {...props} onClick={() => setModal(!modal)}>
          {/* <div className='w-28 h-28 p-3 bg-[#80cad510] backdrop-blur-xl rounded-lg uppercase font-bold text-5xl flex items-center absolute top-0 left-0'>
            <p className='absolute bottom-3 right-3 text-[#b6eef790]'>JS</p>
          </div> */}
          <div className='w-28 h-28 p-3.5 overflow-hidden  bg-[#2d454750] backdrop-blur-xl rounded-lg uppercase font-bold flex items-end justify-end relative'>
            {!props.skillLogo}
            {props.skillLogo && (<Image src={props.skillLogo} alt={props.skillName} width={1000} height={1000} objectFit="contain" className=" w-12 rounded-md grayscale opacity-30" />)}
          </div>
        </div>
      </>
    )
  }