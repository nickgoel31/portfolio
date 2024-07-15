import React from 'react'
import { BsGithub } from 'react-icons/bs'

const ProjectShowcase = () => {
  return (
    <div className='w-full h-full  absolute left-0 top-0 flex flex-col gap-4 items-center justify-center py-12 px-6'>
        <div className='flex gap-5 items-center '>
            <button className='rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b]'>
                <BsGithub />
                Github
            </button>
            <button>Github</button>
            <button>Github</button>
        </div>
    </div>
  )
}

export default ProjectShowcase