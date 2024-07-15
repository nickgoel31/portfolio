import React from 'react'

const DesktopLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className='lg:block hidden'>{children}</div>

    <div className='block lg:hidden'>
      <div>
        
      </div>
    </div>
    </>
  )
}

export default DesktopLayout