import React, { useState, useEffect, createRef } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className="p-6">
      <h4 className="text-2xl font-semibold mb-6">Find Restaurants, Hotels, & Attractions Nearby</h4>
      {isLoading ? (
        <div className="flex items-center justify-center h-[600px]">
          <svg
            className="animate-spin h-16 w-16 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex flex-col">
              <label htmlFor="type" className="text-gray-700 font-medium mb-2">
                Type
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="rating" className="text-gray-700 font-medium mb-2">
                Rating
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="">All</option>
                <option value="3">Above 3.0</option>
                <option value="4">Above 4.0</option>
                <option value="4.5">Above 4.5</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 max-h-[75vh] overflow-auto">
            {places?.map((place, i) => (
              <div
                ref={elRefs[i]}
                key={i}
                className="w-full"
              >
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
