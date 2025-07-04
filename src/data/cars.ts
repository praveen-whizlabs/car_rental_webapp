import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    name: 'BMW 3 Series',
    brand: 'BMW',
    model: '3 Series',
    year: 2023,
    type: 'luxury',
    transmission: 'automatic',
    fuel: 'petrol',
    seats: 5,
    pricePerDay: 89,
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    features: ['GPS Navigation', 'Bluetooth', 'Air Conditioning', 'Leather Seats'],
    available: true,
    location: 'Downtown'
  },
  {
    id: '2',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    type: 'luxury',
    transmission: 'automatic',
    fuel: 'electric',
    seats: 5,
    pricePerDay: 95,
    image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    features: ['Autopilot', 'Premium Audio', 'Supercharging', 'Glass Roof'],
    available: true,
    location: 'Airport'
  },
  {
    id: '3',
    name: 'Toyota Camry',
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    type: 'sedan',
    transmission: 'automatic',
    fuel: 'hybrid',
    seats: 5,
    pricePerDay: 55,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    features: ['Fuel Efficient', 'Safety Features', 'Apple CarPlay', 'Backup Camera'],
    available: true,
    location: 'City Center'
  },
  {
    id: '4',
    name: 'Range Rover Evoque',
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2023,
    type: 'suv',
    transmission: 'automatic',
    fuel: 'petrol',
    seats: 5,
    pricePerDay: 120,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    features: ['All-Wheel Drive', 'Terrain Response', 'Premium Interior', 'Panoramic Roof'],
    available: true,
    location: 'Downtown'
  },
  {
    id: '5',
    name: 'Honda Civic',
    brand: 'Honda',
    model: 'Civic',
    year: 2023,
    type: 'economy',
    transmission: 'automatic',
    fuel: 'petrol',
    seats: 5,
    pricePerDay: 35,
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.4,
    features: ['Fuel Efficient', 'Honda Sensing', 'USB Ports', 'Bluetooth'],
    available: true,
    location: 'Airport'
  },
  {
    id: '6',
    name: 'Porsche 911',
    brand: 'Porsche',
    model: '911',
    year: 2023,
    type: 'sports',
    transmission: 'automatic',
    fuel: 'petrol',
    seats: 2,
    pricePerDay: 250,
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    features: ['Sport Mode', 'Premium Sound', 'Performance Tires', 'Carbon Fiber'],
    available: true,
    location: 'City Center'
  }
];