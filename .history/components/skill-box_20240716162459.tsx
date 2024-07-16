"use client"

import { X } from "lucide-react"
import { useState } from "react"

type Props = {
  top?: number,
  left?: number,
  right?: number,
  bottom?: number,
  className?: string,
  skillName: string,
  skillLevel?:"beginner" | "intermediate" | "advanced" | "expert",
  skillLogo?:string,
}

export const SkillBox = ({...props}:Props) => {
  const [modal, setModal] = useState(false)
    return (
      <>
        {modal && (
          <div className="fixed w-screen h-screen z-[100] backdrop-blur-sm">
            <div className="absolute bottom-0 w-full p-6 py-8 z-[10] bg-[#0f1618] border border-[#1e2e32] left-0">
              <div className="absolute right-4 top-4" onClick={() => setModal(false)}>
                <X />
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <h1 className="font-bold text-4xl">
                  {props.skillName}
                </h1>
                <p className="px-3 py-1 text-sm rounded-full bg-[#2e3f43] text-[#cdd9db] capitalize font-medium">{props.skillLevel || "beginner"}</p>
              </div>
            </div>
          </div>
        )}
        <div className={`${props.className}`} {...props} onClick={() => setModal(!modal)}>
          {/* <div className='w-28 h-28 p-3 bg-[#80cad510] backdrop-blur-xl rounded-lg uppercase font-bold text-5xl flex items-center absolute top-0 left-0'>
            <p className='absolute bottom-3 right-3 text-[#b6eef790]'>JS</p>
          </div> */}
          <div className='w-28 h-28 p-3.5 overflow-hidden  bg-[#2d454750] backdrop-blur-xl rounded-lg uppercase font-bold flex items-end justify-end relative'>
            <p className={`text-[#DFFAFF50] [text-shadow:_0px_0px_10px_#81c7d270] line-clamp-2 ${props.skillName.length <= 3 ? 'text-5xl' : props.skillName.length <= 4 ? 'text-3xl' : props.skillName.length <= 5 ? 'text-2xl': 'text-xl'}`}>{props.skillName}</p>
          </div>
        </div>
      </>
    )
  }