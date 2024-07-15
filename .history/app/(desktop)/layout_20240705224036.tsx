import React from 'react'

const DesktopLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className='lg:block hidden'>{children}</div>

    
    </>
  )
}

export default DesktopLayout