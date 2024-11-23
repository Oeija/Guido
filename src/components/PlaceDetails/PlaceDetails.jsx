import React from 'react';
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { Rating } from '@mui/material'; 

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div
        className="h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
          })`,
        }}
      ></div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{place.name}</h3>
        <div className="flex justify-between items-center my-2">
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <p className="text-gray-600 text-sm">
            {place.num_reviews} review{place.num_reviews > 1 && 's'}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm">Price</p>
          <p className="text-gray-800">{place.price_level}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600 text-sm">Ranking</p>
          <p className="text-gray-800">{place.ranking}</p>
        </div>
        {place?.awards?.map((award, index) => (
          <div
            key={index}
            className="flex justify-between items-center my-2"
          >
            <img src={award.images.small} alt={award.display_name} className="w-6 h-6" />
            <p className="text-gray-600 text-sm">{award.display_name}</p>
          </div>
        ))}
        <div className="flex flex-wrap gap-2 mt-3">
          {place?.cuisine?.map(({ name }) => (
            <span
              key={name}
              className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
            >
              {name}
            </span>
          ))}
        </div>
        {place.address && (
          <p className="flex items-center text-gray-600 text-sm mt-3">
            <IoLocationOutline className="mr-2" /> {place.address}
          </p>
        )}
        {place.phone && (
          <p className="flex items-center text-gray-600 text-sm mt-2">
            <IoCallOutline className="mr-2" /> {place.phone}
          </p>
        )}
      </div>
      <div className="flex justify-between px-4 py-2 border-t">
        <button
          className="text-blue-500 hover:underline"
          onClick={() => window.open(place.web_url, '_blank')}
        >
          Trip Advisor
        </button>
        <button
          className="text-blue-500 hover:underline"
          onClick={() => window.open(place.website, '_blank')}
        >
          Website
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
