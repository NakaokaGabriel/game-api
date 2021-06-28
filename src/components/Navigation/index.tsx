import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function Navigation() {
  return (
    <div className="my-6 md:flex justify-between align-center">
      <div>
        <h1 className="font-bold text-3xl">API Games</h1>
        <p className="mt-2">Searching your favorite game</p>
      </div>

      <label 
        htmlFor="search" 
        className="
          block 
          w-full 
          md:w-4/12 
          mt-6 
          bg-gray-700 
          rounded-lg 
          relative 
          cursor-text 
          py-1"
      >
        <input
          className="block w-full h-10 pl-16 pr-5 bg-transparent"
          type="text"
          placeholder="Search game"
          id="search"
          name="search"
        />
        <div className="absolute h-10 w-10 top-1 left-3 rounded-lg flex items-center justify-center bg-gray-900 cursor-pointer">
          <FaSearch color="#fff" />
        </div>
      </label>
    </div>
  )
}
