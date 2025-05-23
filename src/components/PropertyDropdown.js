import React, {useState,useEffect, useContext} from 'react';

import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import {Menu} from '@headlessui/react';
import {HouseContext} from './HouseContext';


const PropertyDropdown = () => {
  const {property, setProperty,properties} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);


  return(
     <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}  className='dropdown-btn'>
        <div>
          <div>Type</div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          
          
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
        {properties.map((property, index)=>{
          return (
            <Menu.Item
            onClick={() => setProperty(property)}
             className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
