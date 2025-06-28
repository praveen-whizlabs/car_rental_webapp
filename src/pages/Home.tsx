import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CarCard from '../components/CarCard';
import { cars } from '../data/cars';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const featuredCars = cars.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Featured Cars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Featured Vehicles get it now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular and premium vehicles, perfect for any occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/cars"
              className="inline-flex items-center px-8 py-4 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors group"
            >
              View All Cars
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-200">Premium Vehicles</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50k+</div>
              <div className="text-primary-200">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-200">City Locations</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Ready to Hit the Road?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to find the perfect vehicle for your next adventure.
              We're here to make your car rental experience exceptional.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-6 w-6 text-primary-900" />
                <span className="text-lg font-semibold">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-6 w-6 text-primary-900" />
                <span className="text-lg font-semibold">info@drivewave.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-6 w-6 text-primary-900" />
                <span className="text-lg font-semibold">Downtown, Airport</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/cars"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-900 text-primary-900 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Browse Cars
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;