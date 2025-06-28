import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Fuel, Settings, MapPin } from 'lucide-react';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Car Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            car.available 
              ? 'bg-success-500 text-white' 
              : 'bg-gray-400 text-white'
          }`}>
            {car.available ? 'Available' : 'Unavailable'}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{car.rating}</span>
          </div>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h3>
            <p className="text-gray-600 text-sm capitalize">{car.type}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-900">${car.pricePerDay}</div>
            <div className="text-sm text-gray-600">per day</div>
          </div>
        </div>

        {/* Car Specs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="h-4 w-4" />
            <span className="text-sm">{car.seats} Seats</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Settings className="h-4 w-4" />
            <span className="text-sm capitalize">{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Fuel className="h-4 w-4" />
            <span className="text-sm capitalize">{car.fuel}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{car.location}</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {car.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-50 text-primary-900 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
            {car.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                +{car.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link
            to={`/cars/${car.id}`}
            className="flex-1 text-center px-4 py-2 border border-primary-900 text-primary-900 rounded-lg hover:bg-primary-50 transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/cars/${car.id}`}
            className={`flex-1 text-center px-4 py-2 rounded-lg transition-colors ${
              car.available
                ? 'bg-primary-900 text-white hover:bg-primary-800'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {car.available ? 'Book Now' : 'Unavailable'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;