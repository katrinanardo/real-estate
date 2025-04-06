import React, {useState,useEffect, useContext} from 'react';

import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import {Menu} from '@headlessui/react';
import {HouseContext} from './HouseContext';


const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext);
  
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '110000 - 130000',
    },
    {
      value: '140000 - 160000',
    },
    {
      value: '160000 - 180000',
    },
    
  ]


  return(
     <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}  className='dropdown-btn'>
        <div>
          <div>Price</div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          
          
        </div>
          {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-primary' />
            ) : (
              <RiArrowDownSLine className='dropdown-icon-primary' />
            )
          }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index)=>{
          return (
            <Menu.Item
            onClick={() => setPrice(price.value)}
             className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
