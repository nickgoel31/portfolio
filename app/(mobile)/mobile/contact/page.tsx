import { Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaSquareUpwork } from 'react-icons/fa6'

const ContactPage = () => {
  return (
    <div className='pt-24 pb-8 px-4 space-y-10 bg-[#0A0F10] w-full min-h-screen relative'>
      <h1 className='font-bebas text-6xl'>Connect</h1>

      <div className='flex items-center justify-center flex-col gap-6 w-full h-full top-0 left-0 font-medium text-[#7aafc5]'>
            <Link href={'https://www.linkedin.com/in/harsh-goel-cs'} className=' rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b]' >
                <Linkedin size={20}/>
                Linkedin
            </Link>
            <Link href={'mailto:harshgoel2004@gmail.com'} className=' rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks' >
                <Mail size={20}/>
                E-Mail
            </Link>
            <Link href={''} className=' rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks inset'>
                <p className='text-sm font-bold'>Ez</p>
                Ezfolio
            </Link>
            <Link href={'https://www.upwork.com/freelancers/~01f93471d93f0593d0?mp_source=share'} className=' rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:text-[#0e171b] hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks' >
                <FaSquareUpwork size={20}/>
                Upwork
            </Link>
        </div>
    </div>
  )
}

export default ContactPage