import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

export const Header = () => {
    return (
        <div className=' flex sm:flex-row sm:justify-between items-center bg-black text-white text-xl py-2 px-3'>
             
            <div className='mb-2 sm:mb-0 font-bold'>Ayaz Ahmed</div>


            
                <div className='text-gray-500 border border-[#fafafa80] rounded-3xl py-1 px-5 flex gap-4 sm:gap-8 items-center'>
                <Link className='bg-w hover:bg-white hover:text-black transition-colors duration-300 px-2 py-1 rounded md  ' href="/"> Home   </Link>
                <Link className='hover:bg-white hover:text-black transition-colors duration-300 px-2 py-1 rounded md' href="/About"> About   </Link>
                <Link className='hover:bg-white hover:text-black transition-colors duration-300 px-2 py-1 rounded md' href="/Services"> Services   </Link>
                <Link className='hover:bg-white hover:text-black transition-colors duration-300 px-2 py-1 rounded md' href="/Blog"> Blog  </Link>
                </div>
            

            <div className='mt-2 sm:mt-0'>
               <Button variant={'destructive'}> Contact Me </Button>
            </div>


        </div>

    )
}


