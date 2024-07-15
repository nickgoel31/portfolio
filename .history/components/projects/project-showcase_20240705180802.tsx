import React from 'react'
import { BsGithub } from 'react-icons/bs'

const ProjectShowcase = () => {
  return (
    <div className='w-full h-full  absolute left-0 top-0 flex flex-col gap-6 items-center justify-center py-12 px-6'>
        <div className='flex gap-3 items-center '>
            <button className='rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1]'>
                <BsGithub />
                Github
            </button>
            <button className='rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1]'>
                <BsGithub />
                Github
            </button>
            <button className='rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1]'>
                <BsGithub />
                Github
            </button>
        </div>

        <div className='w-[80%] aspect-video overflow-hidden z-[10] rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

        </div>
    </div>
  )
}

export default ProjectShowcase