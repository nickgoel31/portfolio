import React from 'react'

const DesktopLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className='lg:block hidden'>{children}</div>

    <div className='block lg:hidden'>
      <div className='flex flex-col w-full h-screen items-center justify-center'>
        <h1 className='text-2xl'>This page is only available on desktop</h1>
        <p className='text-lg'>Please open this page on a desktop browser</p>
      </div>
    </div>
    </>
  )
}

export default DesktopLayout