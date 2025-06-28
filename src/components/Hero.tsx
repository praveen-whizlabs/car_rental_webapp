import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury Car"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Car Rentals
              <span className="block text-accent-500">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Experience luxury and comfort with our premium fleet of vehicles. 
              From economy cars to luxury sedans, find the perfect ride for your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cars"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-all duration-300 transform hover:scale-105"
              >
                Browse Cars
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">Find Your Perfect Car</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Pickup Location
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Downtown</option>
                    <option>Airport</option>
                    <option>City Center</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Drop-off Location
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>Same as pickup</option>
                    <option>Downtown</option>
                    <option>Airport</option>
                    <option>City Center</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Return Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline h-4 w-4 mr-1" />
                  Passengers
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>1-2 Passengers</option>
                  <option>3-4 Passengers</option>
                  <option>5+ Passengers</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Available Cars
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-bounce hidden lg:block">
        <div className="w-4 h-4 bg-accent-500 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-32 left-10 animate-pulse hidden lg:block">
        <div className="w-6 h-6 bg-white rounded-full opacity-40"></div>
      </div>
    </div>
  );
};

export default Hero;