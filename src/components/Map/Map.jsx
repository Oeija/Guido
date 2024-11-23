import React from 'react';
import GoogleMapReact from 'google-map-react';
import { IoLocationOutline } from "react-icons/io5";

import mapStyles from './mapStyles';

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const isMobile = window.innerWidth < 600; 

  return (
    <div className="relative h-[120vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBIFdgOttNiUHvk53DEGfhofnLPSGvoRfQ' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length && places.map((place, i) => (
          <div
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20"
            {...(place.$hover ? { 'data-hover': true } : {})}
          >
            {isMobile ? (
              <IoLocationOutline color="blue" size={30} />
            ) : (
              <div className="bg-white p-3 rounded-md shadow-lg w-24">
                <h4 className="text-sm font-semibold truncate">{place.name}</h4>
                <img
                  className="w-full rounded-md"
                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt={place.name}
                />
                <div className="text-xs text-gray-500 mt-2">Rating: {place.rating}</div>
              </div>
            )}
          </div>
        ))}
        {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              height="70px"
              alt="weather"
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;


