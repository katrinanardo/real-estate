import React from 'react';
import Header from '../components/Header';

import { housesData } from '../data';

import { useParams } from 'react-router-dom';

import {BiBed, BiBath, BiArea} from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const {id} = useParams();

  const house = housesData.find(house => {
    return house.id === parseInt(id);
  })

  return <div>
    
    <section className='bg-gray-200'>
    <div className="text-white bg-gradient-to-r from-black to-[#4b2e2e] border-b border-b-[#d2b48c]">
    <Header /></div>

    <div className="text-white bg-gradient-to-r from-black to-[#4b2e2e]">
      <div className='container mx-auto min-h-[50px] mb-14 lg:pl-14 lg:pt-8 lg:pb-4'> 
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div className=''>
            <h2 className='text-2xl font-semibold'>{house.name}</h2>
            <h3 className='text-sm mb-4'>{house.address}</h3>
          </div>
          <div>
            <div className='text-2xl font-semibold'>$ {house.price}</div>
            <div className='text-sm mb-4'>{house.surface}</div>

          </div>     
        </div>
      </div>
    </div>

    <div className='container mx-auto pb-14'>
    <div className='flex flex-col lg:flex-row items-start gap-8'>
      <div className='max-w-[786px]'>
      <img className='mb-8 rounded-tr-[50px]' src={house.imageLg}></img>
      <div className='text-2xl mb-4 font-semibold'>Details</div>
      <div className='flex gap-x-6 text-orange-700 mb-12'>
        <div className='flex gap-x-2 items-center'>
          <BiBed/>
          <div>{house.bedrooms}</div>
        </div>
        <div className='flex gap-x-2 items-center'>
          <BiBath/>
          <div>{house.bedrooms}</div>
        </div>
        <div className='flex gap-x-2 items-center'>
          <BiArea/>
          <div>{house.bedrooms}</div>
        </div>
      </div>

      <div>
        <div className='text-2xl mb-4 font-semibold'>Description</div>
        <div>{house.description}</div>      
      </div>
    </div>

    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
      <div className='flex items-center gap-x-4 mb-8'>
        <div className='w-20 h-20'>
          <img src={house.agent.image}></img>
        </div>
        <div>
          <div className='font-bold text-lg'>{house.agent.name}</div>
          <Link to='' className='text-orange-700 text-sm'>View Profile</Link>
        </div>
      </div>
      <form className='flex flex-col gap-y-4'>
        <input className='border border-gray-300 focus:border-orange-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder='Name' type='text'/>
        <input className='border border-gray-300 focus:border-orange-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder='Phone' type='text'/>
        <input className='border border-gray-300 focus:border-orange-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder='Email' type='text'/>
        <textarea className='border border-gray-300 focus:border-orange-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder="Hello, I'm interested in..."></textarea>
        <div>
          <button className='bg-black hover:bg-orange-700 text-white px-9 py-5 text-[12px] rounded-tr-[20px] transition flex items-center space-x-2'>Learn More <AiOutlineArrowRight className='text-orange-400 '/></button>
        </div>
      </form>
    </div>
    </div> 
  </div>    
  </section>
      </div>;
};

export default PropertyDetails;
