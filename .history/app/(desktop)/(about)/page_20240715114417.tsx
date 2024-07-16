"use client"

import Cursor from "@/components/cursor";
import { useMouse } from "@/contexts/mouse-context";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Home() {
  const {x,y, translateXValue, translateYValue} = useMouse()

  const [valuePlusAdd, setValuePlusAdd] = useState<number>()

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setValuePlusAdd(-(translateYValue - 100))
    
    // // console.log(x, translateXValue)
    // console.log(centerX, centerY)
  }, [x])
  

  


  return (
    <div className="" >
      <Cursor />
      <div className="w-[calc(100vw)] h-screen absolute top-0 left-0 overflow-hidden">
        <span className="w-full h-full  backdrop-blur-3xl  z-[1] absolute top-0 left-0"></span>
        <video autoPlay muted loop  controls={false} ref={videoRef} className="overflow-hidden z-[-1] w-full h-full object-cover" >
          <source src="https://drive.google.com/uc?export=download&id=10WtVq9SgmdrOWbVgdihs44Kux2ZQhvuI" type="video/mp4" className="aspect-video"/>
          Your browser does not support the video tag.
        </video>
        {/* <iframe src="https://drive.google.com/uc?export=download&id=10WtVq9SgmdrOWbVgdihs44Kux2ZQhvuI" width="640" height="480" allow="autoplay"></iframe> */}
        {/* <div className="absolute left-0 top-0 w-full h-full z-[2]">
          <span className="w-96 h-96 right-[-5rem] top-[-10rem] rotate-45 absolute border border-[#456a72]">
          </span>
        </div> */}

        <div className="z-[1] absolute top-1/2 left-1/2 opacity-10" style={{transform: `translate(calc(-50% + ${translateXValue}px), calc(-50% + ${translateYValue}px))`}}>
          <Image src={"/symbol1.png"} alt="Symbol" width={1000} height={1000} className="w-96"/>
        </div>

        <div className="z-[21] absolute top-1/2 left-1/2 opacity-10 flex flex-col justify-center items-center gap-6" style={{transform: `translate(calc(-50% + ${translateXValue}px), calc(-50% + ${translateYValue}px))`}}>
          <div className="w-40 h-40 bg-[#6ee4ff]"></div>
          <p className="max-w-64 font-bebas text-center">
            I am a web developer from India, I love building web apps!
          </p>
        </div>

        <div className="z-[20] absolute top-0 right-0">
          <h1 className="font-semibold text-3xl text-[#65A0AD] opacity-20 [writing-mode:vertical-lr]"  style={{transform: `translate(-${translateXValue}px, ${valuePlusAdd}px)`}}>{"コーディングは私の情熱です。"}</h1>
        </div>

        <h2 
        className="text-[#65A0AD] z-[5] absolute bottom-0 right-0 text-[24vw] font-bebas leading-none opacity-20 select-none" 
        style={{transform: `translate(-${translateXValue}px, ${valuePlusAdd}px)`}}>
          <span>H</span>
          <span>A</span>
          <span className="blur-[2px]">R</span>
          <span className="blur-[4px]">S</span>
          <span className="blur-[4px]">H</span>
          <span>{" "}</span>
          <span className="blur-[4px]">G</span>
          <span className="blur-[2px]">O</span>
          <span>E</span>
          <span>L</span>
        </h2>
      </div>
    </div>
  );
}
