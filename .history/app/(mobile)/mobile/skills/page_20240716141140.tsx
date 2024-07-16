import React from 'react'
import SkillShowcaseMobile from '../../_components/skill-show-mob'

const SkillsPage = () => {
  return (
    <div className='pt-24 pb-8 px-4 space-y-10 bg-[#0A0F10] w-full h-screen relative'>
      <h1 className='font-bebas text-2xl'>Skills</h1>

      <div>
        <SkillShowcaseMobile  />
      </div>
    </div>
  )
}

export default SkillsPage