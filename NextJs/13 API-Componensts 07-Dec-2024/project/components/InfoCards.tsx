import React from 'react'

type Props = {
name: string,
classday: string,
role: string,
} 

function InfoCards({name, classday, role}: Props) {
  return (
    <div className='bg-slate-300 w-56 text-black flex flex-col items-center rounded-lg'>
      <div className='flex gap-4'> 
        <p className='font-bold'>Name:</p>
        <p>{name}</p>
      </div>
      <div className='flex gap-4'> 
        <p className='font-bold'>Class:</p>
        <p>{classday}</p>
      </div>
      <div className='flex gap-4'> 
        <p className='font-bold'>Role:</p>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default InfoCards
