import React from 'react';

import { Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import ContentTop from './components/ContentTop';

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import HouseList from './components/HouseList';

const App = () => {
  return <div className='max-w-full mx-auto bg-white'>    
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
      <Footer />
  </div>;
  
};

export default App;
