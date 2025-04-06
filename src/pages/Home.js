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
    <Header/>
    <Banner />
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
