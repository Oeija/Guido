import React from 'react';
import { Link } from 'react-router-dom';
import city from '../assets/city.png';

const Home = () => {
  return (
    <div>
      <section className="relative h-screen bg-gradient-to-b from-white via-green-500 to-green-700 flex items-center justify-center text-center">
        <div className="z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 font-Rubik mb-3">
            Discover new horizons
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-gray-800 font-Rubik mx-5">
            Unlock tailored recommendations for restaurants, hotels, and attractions around you
          </p>
          <Link to="/explore">
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-green-700 transition duration-300">
              Let's go!
            </button>
          </Link>
        </div>
        <img
          src={city}
          alt="Landing bottom"
          className="absolute bottom-0 left-0 w-full object-cover z-0 opacity-25"
        />
      </section>
    </div>
  );
};

export default Home;
