

import { Smartphone } from 'lucide-react'
import React from 'react'

const DesktopLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className=''>
      <div className='md:flex hidden'>
        {children}
      </div>
    </div>
    </>
  )
}

export default DesktopLayout