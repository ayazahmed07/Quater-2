import React from 'react'
import Link from 'next/link'

export const Header = () => {
    return (
        <div className='flex justify-between py-3 items-center bg-blue-900 text-white font-3xl '>
            <div className='flex ml-8 justify-start '>Logo</div>

            <div className='flex mr-4 gap-11 items-center'>
                <Link href="/"> Home   </Link>
                <Link href="/About"> About   </Link>
                <Link href="/Services"> Services   </Link>
                <Link href="Contact"> Contact Us  </Link>
            </div>


        </div>

    )
}


