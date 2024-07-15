"use client"

import { useMouse } from "@/contexts/mouse-context"
import { useEffect } from "react"


const Cursor = () => {
    const {x, y} = useMouse()
  return (
    <div className='cursor fixed w-10 h-10 top-0 left-0 bg-[#4a7a82] rounded-full z-[60]' ></div>
  )
}

export default Cursor