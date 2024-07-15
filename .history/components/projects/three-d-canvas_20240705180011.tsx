"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import {OrbitControls} from "@react-three/drei"
import { Mesh } from 'three'
import { useMouse } from '@/contexts/mouse-context'

const ThreeDimensionCanvas = () => {
    const canvas = useRef<HTMLCanvasElement | null>(null)
    const {x,y} = useMouse()
    const [meshYState, setMeshYState] = useState<number>(0)
    const [meshXState, setMeshXState] = useState<number>(0)
    useEffect(() => {
        if(canvas.current){
            canvas.current.addEventListener("mousemove", () => {
                setMeshYState(y*0.1)
                setMeshXState(x)
            })
        }
        
    })
  return (
    <Canvas ref={canvas} camera={{position:[0,4,12]}} className='z-[10]'>
        <directionalLight position={[1,1,1]} intensity={2}/>
        <directionalLight position={[-1,-1,-1]} intensity={2}/>
        {/* <pointLight position={[-1,-1,-1]} intensity={3}/> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
       <Diamond meshY={meshYState} meshX={meshXState}/>

        <OrbitControls enableZoom={false} enablePan={false}/>
    </Canvas>
  )
}

export default ThreeDimensionCanvas

const Diamond = ({meshY, meshX}:{meshY:number,meshX:number}) => {
    const diamondOne = useRef<Mesh | null>(null)
    useFrame((state,delta) => {
        if(!diamondOne.current) return;
        diamondOne.current.rotation.y += delta*0.3
    })
    return (
        <mesh ref={diamondOne} position={[7,6,0]}>
            <sphereGeometry args={[1, 2, 1]}/>
            <meshStandardMaterial color='#86f7ff' />
        </mesh>
    )
}