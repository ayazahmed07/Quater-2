import React from 'react'
import Link from 'next/link'

export const Header = () => {
    return (
        <div className='flex'>
            <div></div>

            <div>
                <Link href="/"> Home   </Link>
                <Link href="/About"> About   </Link>
                <Link href="/Services"> Services   </Link>
                <Link href="Contact"> Contact   </Link>
            </div>


        </div>

    )
}


