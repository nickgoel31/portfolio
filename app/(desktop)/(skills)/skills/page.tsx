"use client"

import Canvas from '@/components/canvas/canvas'
import { SkillBox } from '@/components/skill-box'
import { ArrowLeft, ArrowRight, MousePointerClick } from 'lucide-react'
import React, { useState } from 'react'

const SkillsPage = () => {
  const [disclaimer, setDisclaimer] = useState(true)
  return (
      <div className='w-full relative'>
        {disclaimer && (
          <div className='z-[500] fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-xl flex items-center justify-center flex-col leading-normal' onClick={() => setDisclaimer(false)}>
          
          <h1 className='text-3xl text-white font-bold leading-normal'>Skills</h1>
          <p className='text-[white]/60'>
            This is a draggable page, feel free to explore!
          </p>

          <div className='flex items-center gap-2 pt-4'>
            <ArrowLeft size={30}/>
            <ArrowRight size={30}/> 
          </div>

          <span className='absolute bottom-10 left-1/2 -translate-x-1/2'>
            Click anywhere to continue
          </span>
          
          </div>
        )}
        <Canvas />
        {/* <div className='w-screen h-screen fixed bg-gradient-radial from-transparent via-black/10 to-black/80 z-[10]'>

        </div> */}

        {/* <div className='w-full max-w-screen-sm py-10 px-6 mx-auto flex relative '>
          <SkillBox />
          <SkillBox className='absolute left-[40%] top-40'/>
          <SkillBox className='absolute left-[14%] top-[20rem]'/>
          <SkillBox className='absolute left-[64%] top-[22rem]'/>
          <SkillBox className='absolute left-[40%] top-[32rem]'/>
          <SkillBox className='absolute left-[14%] top-[44rem]'/>
          <SkillBox className='absolute left-[64%] top-[44rem]'/>
          <SkillBox className='absolute left-[40%] top-[54rem]'/>
          
        </div>

        

        <div className='h-[200vh] w-full block'></div> */}
      </div>
    
  )
}

export default SkillsPage

