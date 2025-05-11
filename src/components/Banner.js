import React from 'react';
import {Link} from 'react-router-dom';


import ViewListings from './ViewListings';

const Banner = () => {
  return <section className='h-[full] lg:h-screen flex justify-center items-center'> 
     
    <div className="relative w-[1440px] h-[620px]">
    <div className="relative z-10 lg:p-36 pb-[50px] pt-[100px]">
      
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[30px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 pt-[30px]'>
        <h1 className='text-4xl text-white lg:text-[64px] font-sans  leading-none mb-6 max-w-full lg:max-w-[40%]' style={{ fontFamily: "Georgia, serif" }}>Find Your Dream Home</h1>
        <p className='max-w-[480px] mb-8 text-white'>
        Discover your dream home with us — whether you're buying, selling, or investing, we provide expert guidance, trusted service, and a seamless real estate experience tailored just for you.
        </p>
        <button class="inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
  Call 206-919-6886
</button>
      </div>
      </div>
      
      </div>
    </div>
    
  </section>;
};

export default Banner;
