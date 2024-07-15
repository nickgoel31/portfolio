import React from 'react'

const DesktopLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className='lg:block hidden'>{children}</div>

    <div className='block lg:hidden'>
      <div className='flex flex-col w-full h-full items-center justify-center'>
        
      </div>
    </div>
    </>
  )
}

export default DesktopLayout