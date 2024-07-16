"use client"

import { useProjectIndex } from '@/contexts/project-context'
import { ProjectType } from '@/types'
import React from 'react'

const ProjectAccordion = ({card}:{card:ProjectType}) => {
    const {currentProject, currentProjectIndex, handleProjectChange, setCurrentProject} = useProjectIndex()
  return (
    <div className='border rounded-md w-full p-3 px-5 border-[#344547]'>
        <h1 className={`uppercase font-bebas font-black text-lg bg-clip-text text-transparent bg-gradient-to-t from-[#1d2627] via-[#e9f6f7] to-[#9eafaf] flex items-center gap-2 ${currentProjectIndex === card.id && '!from-[#1d2627] !via-[#86f7ff] !to-[#acf6f6]'}`}>
               {card.title}
               {card.status === "IN DEVELOPMENT" && (
                <span className='!text-sm !font-sans !opacity-80'>Dev</span>
               )}
        </h1>

        {currentProje}
    </div>
  )
}

export default ProjectAccordion