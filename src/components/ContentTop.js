import React from 'react';
import {FaPhoneAlt} from "react-icons/fa";

const ContentTop = () => {
  return <section className='h-full lg:max-h-[640px] pb-[70px]  bg-white flex justify-center items-center'>
    <div className='flex flex-col lg:flex-row w-[1200px] justify-around lg:pt-[70px]'>
      <div className ='hidden lg:flex justify-start items-start'>
        <img className='h-[550px] rounded-[50px] shadow-lg lg:shadow-2xl ' src='https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:730,h:730,cg:true'></img>
      </div>
    <div className='flex flex-col'>
      <div className='items-center flex flex-col lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
      <div class="h-[5px] w-[150px] bg-gradient-to-r from-blue-500 to-green-500 mb-10"></div>

        <h1 className='text-4xl lg:text-[42px] lg:max-w-[500px]  leading-none mb-6 ' style={{ fontFamily: "Georgia, serif" }}>Realtor for Nearly 3 Decades!</h1>
        <p className='max-w-[480px] text-gray-700 mb-8'>Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.</p>
        <div className="space-y-4 text-blue-800 font-medium">
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt />
                      <a href="tel:(206)919-6886">(206) 919-6886</a>
                    </div>
                  </div>
      </div>
      </div>

    </div>
    
  </section>;
};

export default ContentTop;
