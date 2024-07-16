"use client"

import Image from 'next/image';
import React, { useRef } from 'react'

const MobilePage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div className='w-full h-screen'>
      <div className='absolute z-[-1] w-[calc(100vw)] h-screen top-0 left-0 overflow-hidden'>
        <span className="w-full h-full  backdrop-blur-3xl  z-[1] absolute top-0 left-0"></span>
        <video autoPlay muted loop  controls={false} ref={videoRef} className="overflow-hidden z-[-1] w-full h-full object-cover" >
          <source src="/bg-1.mp4" type="video/mp4" className="aspect-video"/>
          Your browser does not support the video tag.
        </video>
      </div>

      <div className=''>
        <div className="z-[1] absolute top-1/2 left-1/2 opacity-10 -translate-x-1/2 -translate-y-1/2">
          <Image src={"/symbol1.png"} alt="Symbol" width={1000} height={1000} className="w-96"/>
        </div>

        <div className="z-[21] absolute top-1/2 left-1/2 opacity-10 flex flex-col justify-center items-center gap-6 -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 bg-[#6ee4ff]"></div>
          <p className="max-w-64 font-bebas text-center">
            I am a web developer from India, I love building web apps!
          </p>
        </div>

        <h1 className="font-semibold text-3xl text-[#65A0AD] opacity-20 " >{"コーディングは私の情熱です。"}</h1>
      </div>
    </div>
  )
}

export default MobilePage