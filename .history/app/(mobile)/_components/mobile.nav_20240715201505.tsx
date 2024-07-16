import { Menu } from 'lucide-react'
import React from 'react'

const MobileNavbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full p-4 flex items-center gap-4 justify-end'>
        <div className='flex items-center gap-4 p-2 px-4 justify-center bg-gradient-to-t !from-[#5e7f85] !via-[#7cebf5] !to-[#b5ffff] rounded-full cursor-pointer'>
            <button  className=' font-bebas text-[#0A1112] flex items-center'>
                Menu
                <Menu size={20}/>
            </button>
        </div>
    </div>
  )
}

export default MobileNavbar