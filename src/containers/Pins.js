import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  Navbar,
  Feed,
  PinDetails,
  CreatePin,
  Search,
} from '../components/index';

const Pins = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='px-2 md:scroll-px-1.5'>
      <div className='bg-gray-50'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/category/:categoryId' element={<Feed />} />
          <Route path='/pin-detail/:pinId' element={<PinDetails />} />
          <Route path='/create-pin' element={<CreatePin />} />
          <Route
            path='/search'
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
