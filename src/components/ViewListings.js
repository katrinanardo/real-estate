import React from 'react';
import { Link } from 'react-router-dom';


const ViewListings = () => {
  return (
    <div className="max-w-full w-[200px] px-[40px] xl:px-[140px] py-6 mx-auto bg-white flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:top-4  xl:mt-[9.09rem] xl:w-[1100px]">
    
    <Link className='hover:text-violet-900 transition' to=''>See all listings</Link>
    </div>  
    );
};

export default ViewListings;
