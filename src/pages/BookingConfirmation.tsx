import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Car, CreditCard, User, Check, ArrowLeft } from 'lucide-react';
import { useBooking } from '../contexts/BookingContext';
import { useAuth } from '../contexts/AuthContext';

const BookingConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const { bookingDetails, clearBooking } = useBooking();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: user?.name || ''
  });

  if (!bookingDetails.car) {
    navigate('/cars');
    return null;
  }

  const handleConfirmBooking = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setIsCompleted(true);
    
    // Clear booking after 3 seconds and redirect
    setTimeout(() => {
      clearBooking();
      navigate('/dashboard');
    }, 3000);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md">
          <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-success-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your {bookingDetails.car.name} has been successfully booked. 
            You'll receive a confirmation email shortly.
          </p>
          <div className="animate-pulse text-primary-900">
            Redirecting to dashboard...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center space-x-2 text-primary-900 hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h2>
            
            {/* Car Details */}
            <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <img
                src={bookingDetails.car.image}
                alt={bookingDetails.car.name}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-gray-900">{bookingDetails.car.name}</h3>
                <p className="text-gray-600 capitalize">{bookingDetails.car.type}</p>
                <p className="text-primary-900 font-semibold">${bookingDetails.car.pricePerDay}/day</p>
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-semibold">Pickup Date</div>
                  <div className="text-gray-600">{new Date(bookingDetails.pickupDate).toLocaleDateString()}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-semibold">Return Date</div>
                  <div className="text-gray-600">{new Date(bookingDetails.returnDate).toLocaleDateString()}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-semibold">Pickup Location</div>
                  <div className="text-gray-600">{bookingDetails.pickupLocation}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <div className="font-semibold">Return Location</div>
                  <div className="text-gray-600">{bookingDetails.returnLocation}</div>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Price Breakdown</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Daily Rate</span>
                  <span>${bookingDetails.car.pricePerDay}</span>
                </div>
                <div className="flex justify-between">
                  <span>Number of Days</span>
                  <span>{bookingDetails.totalDays}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${bookingDetails.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>${Math.round(bookingDetails.totalPrice * 0.1)}</span>
                </div>
                <div className="border-t border-gray-300 pt-2 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary-900">${bookingDetails.totalPrice + Math.round(bookingDetails.totalPrice * 0.1)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
            
            {/* Customer Info */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Customer Information
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold">Name</div>
                    <div className="text-gray-600">{user?.name}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">{user?.email}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-600">{user?.phone}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CreditCard className="inline h-4 w-4 mr-1" />
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails(prev => ({ ...prev, cardNumber: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={(e) => setPaymentDetails(prev => ({ ...prev, expiryDate: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    value={paymentDetails.cvv}
                    onChange={(e) => setPaymentDetails(prev => ({ ...prev, cvv: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={paymentDetails.cardholderName}
                  onChange={(e) => setPaymentDetails(prev => ({ ...prev, cardholderName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={isProcessing}
                className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  isProcessing
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-primary-900 text-white hover:bg-primary-800'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Payment...</span>
                  </div>
                ) : (
                  `Confirm Booking - $${bookingDetails.totalPrice + Math.round(bookingDetails.totalPrice * 0.1)}`
                )}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>🔒 Your payment information is secure and encrypted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;