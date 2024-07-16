import React from 'react'

const MobileNavbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full p-4 border flex items-center gap-4 justify-between'>
        <div className='fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-4 p-3 px-5 justify-center bg-gradient-to-t !from-[#5e7f85] !via-[#7cebf5] !to-[#b5ffff] rounded-full cursor-pointer' onClick={() => setIsMenuOpen(true)}>
            <button  className='text-3xl font-bebas text-[#0A1112]'>MENU</button>
        </div>
    </div>
  )
}

export default MobileNavbar