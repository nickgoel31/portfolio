import React from 'react'

const SkillsPage = () => {
  return (
    <div className='pt-24 pb-8 px-4 bg-[#0A0F10] w-full h-screen relative'>
      <h1 className='font-bebas text-2xl'>Projects</h1>

      <div className='pt-8 space-y-4 w-full'>
        {cards.map((card:ProjectType) => (
             <div
             key={card.id}
             onClick={() => {
              setCurrentProject(card)
              handleProjectChange(card.id)
             }}
             className={``}
           >
             <ProjectAccordion card={card}/>
           </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsPage