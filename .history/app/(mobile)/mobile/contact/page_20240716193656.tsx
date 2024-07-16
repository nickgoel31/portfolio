import { Linkedin } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='pt-24 pb-8 px-4 space-y-10 bg-[#0A0F10] w-full min-h-screen relative'>
      <h1 className='font-bebas text-6xl'>Connect</h1>

      <div className='absolute w-full h-full top-0 left-0 font-medium text-[#7aafc5]'>
            <button className='absolute top-[35%] left-[25%] -translate-x-[50%] -translate-y-[50%] rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b]' style={{transform: `translate(calc(${translateXState}px - 50%), ${translateYState}px)`}}>
                <Linkedin size={20}/>
                Linkedin
            </button>
            <button className='absolute top-[30%] left-[41.75%] -translate-x-[50%] -translate-y-[50%] rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks' style={{transform: `translate(calc(${translateXState}px - 50%), calc(${translateYState}px - 50%))`}}>
                <Mail size={20}/>
                E-Mail
            </button>
            <button className='absolute top-[30%] left-[60%] -translate-x-[50%] -translate-y-[50%] rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks inset' style={{transform: `translate(calc(${translateXState}px - 50%), calc(${translateYState}px - 50%))`}}>
                <p className='text-sm font-bold'>Ez</p>
                Ezfolio
            </button>
            <button className='absolute top-[35%] left-[75%] -translate-x-[50%] -translate-y-[50%] rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks' style={{transform: `translate(calc(${translateXState}px - 50%), ${translateYState}px)`}}>
                <FaSquareUpwork size={20}/>
                Upwork
            </button>
        </div>
    </div>
  )
}

export default ContactPage