import { SkillBox } from '@/components/skill-box'
import React from 'react'

const SkillShowcaseMobile = () => {
  return (
    <div className='w-full relative overflow-x-hidden p-4'>
        {/* <div className='w-screen h-screen fixed bg-gradient-radial from-transparent via-black/10 to-black/80 z-[10]'>

        </div> */}

        
        <SkillBox skillName='JS'/>        
        <SkillBox skillName='TS'/>       
       

        
    </div>
  )
}

export default SkillShowcaseMobile