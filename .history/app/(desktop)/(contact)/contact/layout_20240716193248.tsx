import NavbarHorizontal from '@/components/nav-hor';
import { ProjectContextProvider } from '@/contexts/project-context';
import React from 'react'

const ProjectsLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <ProjectContextProvider>
      <div className='bg-[#0A0F10] w-full h-screen overflow-hidden relative' >
          <NavbarHorizontal />
          {children}
      </div>
    </ProjectContextProvider>
  )
}

export default ProjectsLayout