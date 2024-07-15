import React from 'react'
import { BsGithub } from 'react-icons/bs'

const ProjectShowcase = () => {
  return (
    <div className='w-full h-full  absolute left-0 top-0 flex flex-col gap-4 items-center justify-center py-12 px-6'>
        <div className='flex gap-5 items-center '>
            <button>
                <BsGithub />
            </button>
            <button>Github</button>
            <button>Github</button>
        </div>
    </div>
  )
}

export default ProjectShowcase