import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Users, Fuel, Settings, MapPin, Calendar, ArrowLeft, Check } from 'lucide-react';
import { cars } from '../data/cars';
import { useBooking } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setBookingDetails, calculateTotal } = useBooking();
  const { isAuthenticated } = useAuth();
  
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('Downtown');
  const [returnLocation, setReturnLocation] = useState('Downtown');

  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Car Not Found</h1>
          <Link to="/cars" className="text-primary-900 hover:underline">
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = calculateTotal(car, pickupDate, returnDate);
  const totalDays = pickupDate && returnDate ? 
    Math.ceil((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 3600 * 24)) : 0;

  const handleBookNow = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    setBookingDetails({
      car,
      pickupDate,
      returnDate,
      pickupLocation,
      returnLocation,
      totalDays,
      totalPrice
    });
    
    navigate('/booking/confirm');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/cars"
          className="inline-flex items-center space-x-2 text-primary-900 hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Cars</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Car Image and Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
                    <p className="text-gray-600 text-lg capitalize">{car.type} • {car.year}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{car.rating}</span>
                    </div>
                    <div className="text-3xl font-bold text-primary-900">${car.pricePerDay}</div>
                    <div className="text-gray-600">per day</div>
                  </div>
                </div>

                {/* Car Specifications */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-gray-400" />
                    <div>
                      <div className="font-semibold">{car.seats} Seats</div>
                      <div className="text-sm text-gray-600">Passenger Capacity</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-gray-400" />
                    <div>
                      <div className="font-semibold capitalize">{car.transmission}</div>
                      <div className="text-sm text-gray-600">Transmission</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Fuel className="h-6 w-6 text-gray-400" />
                    <div>
                      <div className="font-semibold capitalize">{car.fuel}</div>
                      <div className="text-sm text-gray-600">Fuel Type</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-gray-400" />
                    <div>
                      <div className="font-semibold">{car.location}</div>
                      <div className="text-sm text-gray-600">Available Location</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-success-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book This Car</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Return Date
                    </label>
                    <input
                      type="date"
                      min={pickupDate || today}
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Pickup Location
                    </label>
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="Downtown">Downtown</option>
                      <option value="Airport">Airport</option>
                      <option value="City Center">City Center</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Return Location
                    </label>
                    <select
                      value={returnLocation}
                      onChange={(e) => setReturnLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="Downtown">Downtown</option>
                      <option value="Airport">Airport</option>
                      <option value="City Center">City Center</option>
                    </select>
                  </div>
                </div>

                {/* Price Summary */}
                {totalDays > 0 && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Price Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Daily Rate</span>
                        <span>${car.pricePerDay}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Number of Days</span>
                        <span>{totalDays}</span>
                      </div>
                      <div className="border-t border-gray-300 pt-2 mt-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span className="text-primary-900">${totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleBookNow}
                  disabled={!pickupDate || !returnDate || !car.available}
                  className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                    car.available && pickupDate && returnDate
                      ? 'bg-primary-900 text-white hover:bg-primary-800'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {!isAuthenticated ? 'Login to Book' : car.available ? 'Book Now' : 'Unavailable'}
                </button>

                {!isAuthenticated && (
                  <p className="text-sm text-gray-600 text-center">
                    You need to be logged in to book a car.{' '}
                    <Link to="/login" className="text-primary-900 hover:underline">
                      Login here
                    </Link>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;