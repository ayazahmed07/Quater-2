import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

export const Header = () => {
    return (
        <div className='flex sm:flex-row sm:justify-between items-center bg-black text-white text-xl py-3 px-4'>
             
            <div className='mb-2 sm:mb-0 text-2xl'>Ayaz Ahmed</div>


            <div className='flex gap-4 sm:gap-11 items-center'>
                <Link href="/"> Home   </Link>
                <Link href="/About"> About   </Link>
                <Link href="/Services"> Services   </Link>
                <Link href="/Blog"> Blog  </Link>
            </div>
            
            <div className='mt-2 sm:mt-0'>
               <Button variant={'destructive'}> Contact Me </Button>
            </div>


        </div>

    )
}


