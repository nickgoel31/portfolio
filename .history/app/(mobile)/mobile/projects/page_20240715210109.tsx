"use client"

import { useProjectIndex } from '@/contexts/project-context'
import { cards } from '@/data'
import React from 'react'
import ProjectAccordion from '../../_components/project-acc'

const ProjectsPage = () => {
  const {currentProject, currentProjectIndex, handleProjectChange, setCurrentProject} = useProjectIndex()
  return (
    <div className='pt-24 pb-8 px-4 bg-[#0A0F10] w-full h-screen overflow-hidden relative'>
      <h1 className='font-bebas text-2xl'>Projects</h1>

      <div className='pt-8'>
        {cards.map((card) => (
             <div
             key={card.id}
             onClick={() => {
              setCurrentProject(card)
              handleProjectChange(card.id)
             }}
             className={``}
             
           >
             
             <ProjectAccordion card={card}/>
           </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage