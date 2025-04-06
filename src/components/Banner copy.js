import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import CountryDropDown from './CountryDropdown';
import PriceRangeDropDown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';

import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext';

const BannerSearch = () => {
  const {handleClick} = useContext(HouseContext);
  return <section className='relative w-full min-h-[400px] flex flex-col justify-start items-center'>  
    <div className="relative lg:h-[450px] w-full lg:max-w-[1200px] bg-cover bg-center bg-no-repeat rounded-[50px]"
            style={{ backgroundImage:
"url(https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655) ", }}>
    
    <div class="absolute inset-0 bg-black opacity-30 rounded-[50px] z-0"></div> 
    <div className="relative z-10 p-8 pb-[50px] pt-[60px]">

    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[30px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl text-white lg:text-[64px] font-sans  leading-none mb-6 max-w-full lg:max-w-[100%] pb-[20px]' style={{ fontFamily: "Georgia, serif" }}>Find Your Dream Home</h1>
      </div>
    </div>
      
    <div className="bg-white bg-opacity-75 p-8 rounded-[25px] shadow-md lg:max-w-[1080px] mx-auto ">

    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 mb-4">

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option value="">Any</option><option value="433">Alamo</option><option value="934">Alton</option><option value="1026">Amargosa Valley</option><option value="3118">Beatty</option><option value="4546">Blue Diamond</option><option value="5088">Boulder City</option><option value="5521">Brian Head</option><option value="6719">Cal Nev Ari</option><option value="6775">Caliente</option><option value="7784">Cedar City</option><option value="9571">Cold Creek</option><option value="11053">Crystal</option><option value="12869">Duck Creek Village</option><option value="13129">Dyer</option><option value="14307">Elko</option><option value="14562">Ely</option><option value="15073">Eureka</option><option value="15893">Fernley</option><option value="18363">Goldfield</option><option value="18449">Goodsprings</option><option value="20821">Henderson</option><option value="22539">Indian Springs</option><option value="23194">Jean</option><option value="25650">Las Vegas</option><option value="25702">Laughlin</option><option value="26990">Logandale</option><option value="27361">Lovelock</option><option value="27576">Lund</option><option value="29175">Mc Gill</option><option value="29860">Mesquite</option><option value="30650">Moapa</option><option value="31435">Mount Charleston</option><option value="31686">Mountain Springs</option><option value="32217">Nelson</option><option value="33400">North Las Vegas</option><option value="33">Other</option><option value="4">Other</option><option value="34981">Overton</option><option value="35146">Pahrump</option><option value="55114">Palm Gardens</option><option value="35305">Panaca</option><option value="36767">Pioche</option><option value="40625">Ruth</option><option value="40866">Saint George</option><option value="41421">Sandy Valley</option><option value="41950">Searchlight</option><option value="46640">Tonopah</option><option value="50077">Washington</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>Any</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option></option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>Any Number</option>
          </select>
        </div>

        {/* Baths */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Baths</label>
          <select className="w-full border border-gray-300 rounded-md p-2">
            <option>Any Number</option>
          </select>
        </div>

        {/* Min Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Max Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
          <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900 transition">
            Search
          </button>
        </div>
      </div>
    </div>
      
      </div>
    </div>
    
  </section>;
};

export default BannerSearch;
