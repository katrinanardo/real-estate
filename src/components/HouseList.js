import React, {useContext} from 'react';

import {HouseContext} from './HouseContext';
import { Link } from 'react-router-dom';
import {ImSpinner2} from 'react-icons/im';

import House from './House';

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);

  if (loading) {
    return(<ImSpinner2 className='mx-auto animate-spin text-green-500 text-4xl mt-[200px]'/>);
  }

  if (houses.length < 1) {
    return <div className='text-center text-3xl text-gray-400 mt-20 mb-48'>Nothing found.</div>
  }

  return (
  <section id='listings' className='mb-20 lg:mx-16 lg:w-[1300px]'>
    <div className='contained  '>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
        {houses.map((house,index)=>{
          return (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          )

        })}

      </div>
    </div>

  </section>)
};

export default HouseList;
