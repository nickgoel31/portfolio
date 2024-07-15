"use client"
import ProjectShowcase from '@/components/projects/project-showcase'
import ProjectsFiles from '@/components/projects/projects-files'
import ThreeDimensionCanvas from '@/components/projects/three-d-canvas'
import { useMouse } from '@/contexts/mouse-context'
import { ProjectContextProvider, useProjectIndex } from '@/contexts/project-context'
import { cards } from '@/data'
import { GitHubRepo, ProjectType } from '@/types'
import React, { useEffect, useState } from 'react'

const ProjectPage = async () => {

  const [repoData, setRepoData] = useState<GitHubRepo | null>(null);
  const [username, setUsername] = useState<string>('');
  const [repo, setRepo] = useState<string>('');

  const fetchRepoData = async () => {
    try {
      const response = await axios.get<GitHubRepo>(`/api/github?username=${username}&repo=${repo}`);
      setRepoData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
      <div className='px-8 flex items-center w-full h-full gap-6 py-9'>
        <div className='w-full h-full border rounded-2xl flex-[1.5] border-[#88bac279] p-3'>
          <ProjectsFiles />
        </div>
        <div className='w-full relative h-full border rounded-2xl flex-[2] border-[#88bac27c] overflow-hidden'>
          <ProjectShowcase />
          {/* <div className='w-[80%] aspect-video overflow-hidden z-[10] rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >
            <video
              className='w-full h-full object-cover select-none'
              src={currentProject.projectVideoPath}
              controls
              
            />
          </div> */}
          {/* <ThreeDimensionCanvas /> */}
        </div>
      </div>
  )
}

export default ProjectPage