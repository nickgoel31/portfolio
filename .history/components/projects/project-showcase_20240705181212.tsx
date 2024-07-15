"use client"

import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'

const ProjectShowcase = () => {
    const [showcaseType, setShowcaseType] = useState<"Video" | "Github" | "Link">("Github")
  return (
    <div className='w-full h-full  absolute left-0 top-0 flex flex-col gap-6 items-center justify-center py-12 px-6'>
        <div className='flex gap-3 items-center '>
            <button onClick={() => setShowcaseType("Github")} className={`rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1] ${showcaseType === "Github" && 'border-[#89bcd2] bg-[#89bcd2] shadow-contactLinks text-[#0e171b]'}`}>
                <BsGithub />
                Github
            </button>
            <button onClick={() => setShowcaseType("Video")} className={`rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1] ${showcaseType === "Github" && 'border-[#89bcd2] bg-[#89bcd2] shadow-contactLinks text-[#0e171b]'}`}>
                <BsGithub />
                Github
            </button>
            <button onClick={() => setShowcaseType("Link")} className='rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1]'>
                <BsGithub />
                Github
            </button>
        </div>

        <div className='w-[80%] aspect-video overflow-hidden z-[10] rounded-md  border border-[#274552] bg-[#0b1114]'>
            {showcaseType === "Github" && (
                <div>REPO</div>
            )}
        </div>
    </div>
  )
}

export default ProjectShowcase