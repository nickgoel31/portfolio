import { SkillBox } from '@/components/skill-box'
import React from 'react'

const SkillShowcaseMobile = () => {
  return (
    <div className='w-full relative overflow-x-hidden'>
        <div className='w-screen h-screen fixed bg-gradient-radial from-transparent via-black/10 to-black/80 z-[10]'>

        </div>

        <div className='w-full max-w-screen-sm py-10 px-6 mx-auto flex relative '>
          <SkillBox />
          
        </div>

        
    </div>
  )
}

export default SkillShowcaseMobile