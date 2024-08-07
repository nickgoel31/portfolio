import NavbarHorizontal from '@/components/nav-hor';
import { ProjectContextProvider } from '@/contexts/project-context';
import React from 'react'
import { BiMobile } from 'react-icons/bi';

const ProjectsLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <ProjectContextProvider>
      <div className='bg-[#0A0F10] w-full min-h-screen relative md:block hidden'>
          <NavbarHorizontal />
          {children}
      </div>
      <div className="md:hidden flex w-screen h-screen">
                  <div className="flex w-full h-full items-center justify-center p-6 font-medium text-sm flex-col gap-3 text-center">
                    <BiMobile size={40}/>
                    <p>
                    This website is best viewed on a desktop, to view on mobile device please head to /mobile page <a href="/mobile/skills" className="underline underline-offset-1 font-bold text-blue-300">here</a>.
                    </p> 
                  </div>
                </div>
    </ProjectContextProvider>
  )
}

export default ProjectsLayout