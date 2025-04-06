import React, { useState } from "react";

const faqs = [
  {
    question: "Top Residential Sales Last 5 Years",
    answer:
      "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
  },
  {
    question: "Don't Just List it...",
    answer: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
  },
  {
    question: "Guide to Buyers",
    answer: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
  },
];

const ArrowDown = () => (
  <svg
    className="w-4 h-4 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const ArrowUp = () => (
  <svg
    className="w-4 h-4 text-blue-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
  </svg>
);

const ContentMiddle = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section className='h-full max-h-[640px]  bg-white flex justify-center items-center'>
    <div className='flex flex-col lg:flex-row lg:min-w-[1200px] justify-around lg:pt-[100px] gap-12'>
      
    <div className='flex flex-col'>
      <div className='items-center flex flex-col lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 md:w-full lg:min-w-[500px]'>
      <div class="h-[5px] w-[150px] bg-gradient-to-r from-blue-500 to-green-500 mb-10"></div>

        <h1 className='text-4xl lg:text-[42px] lg:max-w-[500px] leading-none mb-6 ' style={{ fontFamily: "Georgia, serif" }}>Get it Sold</h1>
        <div className="max-w-[500px] mx-auto space-y-4">
      {faqs.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center md:w-full lg:min-w-[500px] text-left py-4 focus:outline-none"
          >
            <span className={`font-medium ${openIndex === index ? "text-black" : "text-gray-800"}`}>
              {item.question}
            </span>
            {openIndex === index ? <ArrowUp /> : <ArrowDown />}
          </button>

          {openIndex === index && item.answer && (
            <p className="text-gray-500 text-sm px-1 pb-2">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
      </div>
      </div>

      <div className ='hidden lg:flex justify-start items-start'>
        <img className='h-[550px] rounded-[50px] shadow-lg lg:shadow-2xl max-w-[600px]' src='https://img1.wsimg.com/isteam/stock/43920/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1535,m'></img>
      </div>

    </div>
    
  </section>;
};

export default ContentMiddle;
