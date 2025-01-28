import React from 'react'
import Image from 'next/image'

const Promotional = () => {
  return (
    <div>
      <div className="flex w-full h-[464px] bg-[#F2F0FF]"> 
      <div className=''> 
      <Image
          src="/Images/lamp.jpg"
          height={180}
          width={180}
          alt="Promotional"
        />
</div>
<div className='flex justify-center item-center'>
         <Image
          src="/Images/sofapromotional.jpg"
          height={450}
          width={450}
          alt="Sofa"
        />  
    </div>
      </div>
    </div>
  )
}

export default Promotional
