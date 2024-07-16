

import { Smartphone } from 'lucide-react'
import React from 'react'

const MobileLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className=''>
        <div>
            {children}
        </div>
    </div>
    </>
  )
}

export default MobileLayout