"use client"

import { Smartphone } from 'lucide-react'
import React from 'react'

const MobileLayout = ({children}:{children:React.ReactNode}) => {
  const container = useRef<HTMLBodyElement | null>(null);
  return (
    <MouseContextProvider>
        <html lang="en">
            <body ref={container} className="gap-8 overflow-hidden ">
            {children}
            </body>
          </html>
   
  )
}

export default MobileLayout