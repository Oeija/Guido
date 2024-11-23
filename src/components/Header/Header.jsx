import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { FaSearch } from "react-icons/fa";

const Header = ({ onPlaceChanged, onLoad }) => {

  return (
    <header className="bg-gray-100 px-5 py-3 mt-3">
      <div className="flex justify-end items-center">
        <h1 className="hidden sm:block bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-transparent bg-clip-text text-lg font-bold mr-5 font-Poppins">
          Navigate fresh places
        </h1>

        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="relative flex items-center w-full sm:w-auto">
            <div className="absolute left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Place your destination..."
              className="pl-10 pr-4 py-2 w-full sm:w-80 rounded-lg text-gray-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-900 focus:border-green-900"
            />
          </div>
        </Autocomplete>
      </div>
    </header>
  );
};

export default Header;
