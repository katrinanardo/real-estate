import React from 'react';
import {Link} from 'react-router-dom';


import ViewListings from './ViewListings';

const Banner = () => {
  return <section className='h-[full] max-h-[640px] flex justify-center items-center'>  
    <div className="relative h-[450px] w-[1200px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage:
"url(https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg/:/rs=w:1279,m) ", }}>
    
    <div class="absolute inset-0 bg-black opacity-30 z-0"></div> 
    <div className="relative z-10 p-8 pb-[50px] pt-[60px]">
      
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[30px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 pt-[30px]'>
        <h1 className='text-4xl text-white lg:text-[64px] font-sans  leading-none mb-6 max-w-full lg:max-w-[40%]' style={{ fontFamily: "Georgia, serif" }}>Find Your Dream Home</h1>
        <p className='max-w-[480px] mb-8 text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan dui sed orci fringilla aliquet ac in orci. Pellentesque gravida magna a luctus molestie. In aliquam odio eu arcu laoreet, in tempor purus pellentesque.
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
