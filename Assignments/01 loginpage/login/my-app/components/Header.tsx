import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex bg-blue-950 text-white justify-center p-4'>
      <ul className='flex gap-16 text-2xl font-bold'>
       <ul> <Link href="/">Home Page</Link></ul>
        <ul><Link href="/login">Login</Link></ul>
        <ul><Link href="/signup">Sign up</Link></ul>
        
      </ul>


    </div>
  )
}
