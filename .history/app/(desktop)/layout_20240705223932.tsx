import React from 'react'

const DesktopLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <div className='block'>{children}</div>
    </>
  )
}

export default DesktopLayout