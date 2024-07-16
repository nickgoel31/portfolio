import { SkillBox } from '@/components/skill-box'
import { skillBoxes } from '@/data'
import React from 'react'
import { DiJavascript } from 'react-icons/di'

const SkillShowcaseMobile = () => {
  return (
    <div className='w-full relative overflow-x-hidden p-4 pb-8'>
        {/* <div className='w-screen h-screen fixed bg-gradient-radial from-transparent via-black/10 to-black/80 z-[10]'>

        </div> */}

        
        <div className='skill-mobile-showcase-div flex flex-col gap-6 items-center justify-center px-8'>
            {skillBoxes.map((skill, index) => (
                <div key={index} className='w-full flex items-center'>
                    <SkillBox skillName={skill.text} skillDesc={skill.desc}/>        
                </div>
            ))}
                        
        </div> 
       

        
    </div>
  )
}

export default SkillShowcaseMobile