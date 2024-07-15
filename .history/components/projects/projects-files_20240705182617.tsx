"use client"

import { useProjectIndex } from '@/contexts/project-context'
import { cards } from '@/data'
import React from 'react'



const ProjectsFiles = () => {
    const {currentProject, currentProjectIndex, handleProjectChange, setCurrentProject} = useProjectIndex()

  return (
    <div className='w-full h-full gap-1 relative z-[100]'>

        {cards.map((card) => (
             <div
             key={card.id}
             onClick={() => {
              setCurrentProject(card)
              handleProjectChange(card.id)
             }}
             className={`w-full p-4 bg-[#0A1112] absolute rounded-lg shadow-projectCards hover:translate-y-[-10%] transition-all duration-500 cursor-pointer border-2 border-[#c4d3d559]  ${currentProjectIndex === card.id && '!border-[#528992]'} ${currentProjectIndex === cards.length - 1 && '!bg-red-500'}`}
             style={{
               top: `calc(${card.top}%)`,
               zIndex: card.zIndex,
               height: `calc(100% - ${card.top}%)`,
             }}
           >
             <h1 className={`uppercase font-bebas font-black text-7xl bg-clip-text text-transparent bg-gradient-to-t from-[#1d2627] via-[#e9f6f7] to-[#9eafaf] flex items-center gap-2 ${currentProjectIndex === card.id && '!from-[#1d2627] !via-[#86f7ff] !to-[#acf6f6]'}`}>
               {card.title}
               {card.status === "IN DEVELOPMENT" && (
                <span className='!text-sm !font-sans !opacity-80'>Dev</span>
               )}
             </h1>
           </div>
        ))}
       
    </div>
  )
}

export default ProjectsFiles