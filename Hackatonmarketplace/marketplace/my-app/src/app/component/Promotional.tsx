import React from 'react';
import Image from 'next/image';


const Promotional = () => {
  return (
    <div>
      {/* Outer Container */}
      <div className="flex bg-[#F2F0FF]">
        {/* Lamp Image */}
        <div className="flex">
          <Image
            src="/Images/lamp.jpg"
            height={387}
            width={387}
            alt="Promotional"
      
          />
        </div>


<div className="flex flex-col gap-5 justify-center"> 
  <p className="text-pink-500"> Best Furniture for your castle </p>
  <h1 className="text-[30px] font-bold"> New Furniture Collection Trends in 2020  </h1>
  <p className=""> This site is currently underdevelopment - Ayaz Ahmed </p>
   </div>
   
      

                {/* Sofa Image */}
        <div className="flex">
          <Image
            src="/Images/sofapromotional.jpg"
            height={400}
            width={450}
            alt="Sofa"
                 />
        </div>
      </div>
    </div>
  );
};

export default Promotional;
