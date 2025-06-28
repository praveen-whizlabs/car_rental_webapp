export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  type: 'sedan' | 'suv' | 'luxury' | 'economy' | 'sports';
  transmission: 'automatic' | 'manual';
  fuel: 'petrol' | 'diesel' | 'electric' | 'hybrid';
  seats: number;
  pricePerDay: number;
  image: string;
  rating: number;
  features: string[];
  available: boolean;
  location: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface Booking {
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  pickupLocation: string;
  dropoffLocation: string;
}