"use client"
import ProjectsFiles from '@/components/projects/projects-files'
import ThreeDimensionCanvas from '@/components/projects/three-d-canvas'
import { useMouse } from '@/contexts/mouse-context'
import { ProjectContextProvider, useProjectIndex } from '@/contexts/project-context'
import { ProjectType, cards } from '@/data'
import React, { useEffect, useState } from 'react'

const ProjectPage = () => {
  const {currentProjectIndex, handleProjectChange} = useProjectIndex()
  const {x,y,translateXValue,translateYValue} = useMouse()

  const [valuePlusAdd, setValuePlusAdd] = useState<number>()

  const [currentProject, setCurrentProject] = useState<ProjectType>(cards[0])

  

  useEffect(() => {
    setCurrentProject(cards.filter(card => card.id === currentProjectIndex)[0])
    setValuePlusAdd(-(translateYValue - 100))
  },[currentProjectIndex])

  return (
    
      <div className='px-8 flex items-center w-full h-full gap-6 py-9'>
        <div className='w-full h-full border rounded-2xl flex-[1.5] border-[#88bac279] p-3'>
          <ProjectsFiles />
        </div>
        <div className='w-full relative h-full border rounded-2xl flex-[2] border-[#88bac27c] overflow-hidden'>
          <div className='w-full h-full  absolute left-0 top-0 flex flex-col gap-4 items-center justify-center py-12 px-6'>
            <div className='flex gap-5 items-center '>
              <button>Github</button>
            </div>
          </div>
          {/* <div className='w-[80%] aspect-video overflow-hidden z-[10] rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >
            <video
              className='w-full h-full object-cover select-none'
              src={currentProject.projectVideoPath}
              controls
              
            />
          </div> */}
          <ThreeDimensionCanvas />
        </div>
      </div>
  )
}

export default ProjectPage