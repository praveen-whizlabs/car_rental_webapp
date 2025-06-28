import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';
import { Car } from '../types';

const Cars: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('all');
  const [selectedFuel, setSelectedFuel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [showFilters, setShowFilters] = useState(false);

  const carTypes = ['all', 'sedan', 'suv', 'luxury', 'economy', 'sports'];
  const transmissionTypes = ['all', 'automatic', 'manual'];
  const fuelTypes = ['all', 'petrol', 'diesel', 'electric', 'hybrid'];

  const filteredCars = useMemo(() => {
    return cars.filter((car: Car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || car.type === selectedType;
      const matchesTransmission = selectedTransmission === 'all' || car.transmission === selectedTransmission;
      const matchesFuel = selectedFuel === 'all' || car.fuel === selectedFuel;
      const matchesPrice = car.pricePerDay >= priceRange[0] && car.pricePerDay <= priceRange[1];

      return matchesSearch && matchesType && matchesTransmission && matchesFuel && matchesPrice;
    });
  }, [searchTerm, selectedType, selectedTransmission, selectedFuel, priceRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('all');
    setSelectedTransmission('all');
    setSelectedFuel('all');
    setPriceRange([0, 300]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Our Premium Fleet
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our extensive collection of premium vehicles for your perfect journey.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by car name or brand..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filters</span>
              <span className="text-sm text-gray-600">({filteredCars.length} cars found)</span>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-900 rounded-lg hover:bg-primary-200 transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
              </button>
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-gray-200 animate-fade-in">
              {/* Car Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Car Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {carTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Transmission */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
                <select
                  value={selectedTransmission}
                  onChange={(e) => setSelectedTransmission(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {transmissionTypes.map((transmission) => (
                    <option key={transmission} value={transmission}>
                      {transmission === 'all' ? 'All Transmissions' : transmission.charAt(0).toUpperCase() + transmission.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                <select
                  value={selectedFuel}
                  onChange={(e) => setSelectedFuel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {fuelTypes.map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel === 'all' ? 'All Fuel Types' : fuel.charAt(0).toUpperCase() + fuel.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range: ${priceRange[0]} - ${priceRange[1]} /day
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="300"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$0</span>
                    <span>$300+</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* No Results */}
        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Cars Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any cars matching your criteria. Try adjusting your filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;