import React, { useState, useCallback } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '../../hooks/useSearch';

type FormEvent = React.FormEvent<HTMLInputElement>;

const Navigation = () => {
  const [inputTyping, setInputTyping] = useState('');

  const { setSearch } = useSearch();

  const handleInputOnChange = useCallback((event: string) => {
    setInputTyping(event);
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearch(inputTyping);
  }, [inputTyping, setSearch]);

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
        <form onSubmit={handleSubmit}>
          <input
            className="block w-full h-10 pl-16 pr-5 bg-transparent"
            type="text"
            placeholder="Search game"
            id="search"
            name="search"
            autoComplete="false"
            onChange={(e: FormEvent) => handleInputOnChange(e.currentTarget.value)}
          />
          <button
            className="
              absolute 
              h-10 
              w-10 
              top-1 
              left-2 
              rounded-lg 
              flex 
              items-center 
              justify-center 
              bg-gray-900 
              cursor-pointer
            "
            type="submit"
          >
            <FaSearch color="#fff" />
          </button>
        </form>
      </label>
    </div>
  )
};

export default Navigation;
