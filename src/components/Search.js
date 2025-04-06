import React, { useContext } from 'react';

import CountryDropDown from './CountryDropdown';
import PriceRangeDropDown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';

import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext';

const Search = () => {
  const {handleClick} = useContext(HouseContext);
  return (
    <div className='flex flex-col justify-center lg:px-40 lg:pt-[100px]'>
      <div className='items-center flex flex-col flex-1 lg:items-start text-center lg:text-left justify-center px-4 lg:px-0'>
      <div class="h-[5px] w-[150px] bg-gradient-to-r from-orange-500 to-green-500 mb-10"></div>
        <h1 className='text-4xl lg:text-[42px] font-semibold leading-none mb-6'>Find your dream home</h1>
      </div>
    <div className='px-[50px] py-6 max-w-[1170px]  flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative mt-5 lg:-top-4 lg:shadow-1 bg-white'>
      <CountryDropDown />
      <PropertyDropdown />
      <PriceRangeDropDown />
      <button onClick={() => handleClick()}
        className='hover:bg-orange-600 transition
        w-full lg:max-w-[126px] h-16 rounded-lg flex justify-center items-center hover:text-white'>
      <RiSearch2Line />
      </button>
    </div>  
  </div>  
  );
};

export default Search;
