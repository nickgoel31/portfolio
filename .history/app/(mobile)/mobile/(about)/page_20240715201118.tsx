"use client"

import React, { useRef } from 'react'

const MobilePage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div className='w-full h-screen'>
      <div className='absolute w-[calc(100vw)] h-screen top-0 left-0 overflow-hidden'>
        <span className="w-full h-full  backdrop-blur-3xl  z-[1] absolute top-0 left-0"></span>
        <video autoPlay muted loop  controls={false} ref={videoRef} className="overflow-hidden z-[-1] w-full h-full object-cover" >
          <source src="/bg-1.mp4" type="video/mp4" className="aspect-video"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default MobilePage