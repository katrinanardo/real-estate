import React from 'react';
import {Link} from 'react-router-dom';


import Header from '../components/Header';

import Banner from '../components/Banner';
import ContentTop from '../components/ContentTop';
import Search from '../components/Search';
import HouseList from '../components/HouseList';
import ContentLast from '../components/ContentLast';
import BannerSearch from '../components/Banner copy';
import ContentMiddle from '../components/ContentMiddle';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  return <div className='min-h-[1880px]'>

    <div className="bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage:
"url(https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg/:/rs=w:1279,m) ", }}>
    <Header/>
    <Banner />
    </div>
    <ContentTop/>
    {/* <Search /> */}
    <BannerSearch/>
    <ContentMiddle />
    <Services />
    {/* <HouseList /> */}
    {/* <ContentLast/> */}
    <Contact />
    </div>
};

export default Home;
