import { SkillBox } from '@/components/skill-box'
import React from 'react'

const SkillShowcaseMobile = () => {
  return (
    <div className='w-full relative overflow-x-hidden p-4'>
        {/* <div className='w-screen h-screen fixed bg-gradient-radial from-transparent via-black/10 to-black/80 z-[10]'>

        </div> */}

        
        <div className='skill-mobile-showcase-div flex flex-col gap-4 items-center justify-center'>
            <div className='w-full flex item'>
                <SkillBox skillName='JS'/>        
            </div>
            <div>
                <SkillBox skillName='React'/>         
            </div>
            <div>
                <SkillBox skillName='JS'/>        
            </div>
            <div>
                <SkillBox skillName='React'/>         
            </div>
               
        </div> 
       

        
    </div>
  )
}

export default SkillShowcaseMobile