import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center my-6">
        <h1 className="font-bold text-4xl">API Games</h1>

        <p className="mt-2">Searching your favorite game</p>

        <label htmlFor="search" className="block mt-6 relative">
          <input 
            type="text"
            placeholder="text here" 
            id="search" 
            name="search" 
          />
          <div className="absolute top-0 left-0">
            <FaSearch color="#000" />
          </div>
        </label>
      </div>
    </div>
  );
}

export default HomePage;
