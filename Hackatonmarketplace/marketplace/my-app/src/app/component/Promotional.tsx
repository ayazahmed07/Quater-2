import React from 'react';
import Image from 'next/image';

const Promotional = () => {
  return (
    <div>
      {/* Outer Container */}
      <div className="flex flex-col lg:flex-row w-full h-[auto] bg-[#F2F0FF] items-start justify-start p-0 gap-6 lg:gap-[550px]">
        {/* Lamp Image */}
        <div className="flex justify-center">
          <Image
            src="/Images/lamp.jpg"
            height={220}
            width={220}
            alt="Promotional"
            className="rounded-lg"
          />
        </div>

                {/* Sofa Image */}
        <div className="flex justify-center lg:ml-[50px] lg:h-[420px] mt-[20px] mb-10">
          <Image
            src="/Images/sofapromotional.jpg"
            height={400}
            width={450}
            alt="Sofa"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Promotional;
