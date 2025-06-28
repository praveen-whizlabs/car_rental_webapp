import React, { createContext, useContext, useState } from 'react';
import { Car } from '../types';

interface BookingDetails {
  car: Car | null;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  returnLocation: string;
  totalDays: number;
  totalPrice: number;
}

interface BookingContextType {
  bookingDetails: BookingDetails;
  setBookingDetails: (details: Partial<BookingDetails>) => void;
  clearBooking: () => void;
  calculateTotal: (car: Car, pickupDate: string, returnDate: string) => number;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const initialBookingDetails: BookingDetails = {
  car: null,
  pickupDate: '',
  returnDate: '',
  pickupLocation: 'Downtown',
  returnLocation: 'Downtown',
  totalDays: 0,
  totalPrice: 0
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookingDetails, setBookingDetailsState] = useState<BookingDetails>(initialBookingDetails);

  const setBookingDetails = (details: Partial<BookingDetails>) => {
    setBookingDetailsState(prev => ({ ...prev, ...details }));
  };

  const clearBooking = () => {
    setBookingDetailsState(initialBookingDetails);
  };

  const calculateTotal = (car: Car, pickupDate: string, returnDate: string): number => {
    if (!pickupDate || !returnDate) return 0;
    
    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);
    const timeDiff = returnD.getTime() - pickup.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return daysDiff > 0 ? daysDiff * car.pricePerDay : 0;
  };

  const value = {
    bookingDetails,
    setBookingDetails,
    clearBooking,
    calculateTotal
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};