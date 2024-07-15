"use client"

import { MouseEvent, MouseEventHandler, createContext, useContext, useEffect, useState } from "react"

type MouseContextType = {
    x: number
    y: number
}

const MouseContext = createContext<{x: number, y:number}>({ x: 0, y: 0 })

export const MouseContextProvider = ({children}:{children:React.ReactNode}) => {
    const [mouseX, setMouseX] = useState<number>(0)
    const [mouseY, setMouseY] = useState<number>(0)
    const handleMouseMove = (e: MouseEvent) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }
    
    return (
        <MouseContext.Provider value={{ x: mouseX, y: mouseY }}>
            <div onMouseMove={handleMouseMove}>{children}</div>
        </MouseContext.Provider>
    )
    
}

export const useMouse = () => {
    const { x, y } = useContext(MouseContext)

    const [translateXValue, setTranslateXValue] = useState<number>(0)
    const [translateYValue, setTranslateYValue] = useState<number>(0)
    const [centerX, setCenterX] = useState<number>(0)
    const [centerY, setCenterY] = useState<number>(0)
    

    useEffect(() => {
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2

        const screenHeight = window.innerHeight
        const screenWidth = window.innerWidth
        setTranslateXValue(x * 0.01)
        setTranslateYValue(y * 0.01)
        // // console.log(x, translateXValue)
        // console.log(centerX, centerY)
    }, [x])

    return { x, y, translateXValue, translateYValue, centerX, centerY, screenHeight, screenWidth }
}