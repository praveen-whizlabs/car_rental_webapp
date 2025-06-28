import React, { useState } from 'react';
import { User, Car, Calendar, Settings, LogOut, Bell, CreditCard, MapPin } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  };

  const bookings = [
    {
      id: '1',
      carName: 'BMW 3 Series',
      startDate: '2024-01-15',
      endDate: '2024-01-18',
      status: 'confirmed',
      totalPrice: 267
    },
    {
      id: '2',
      carName: 'Tesla Model 3',
      startDate: '2024-01-22',
      endDate: '2024-01-25',
      status: 'pending',
      totalPrice: 285
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'bookings', label: 'My Bookings', icon: Car },
    { id: 'profile', label: 'Profile', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                    <p className="text-3xl font-bold text-primary-900">12</p>
                  </div>
                  <Car className="h-12 w-12 text-primary-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Spent</p>
                    <p className="text-3xl font-bold text-success-600">$2,450</p>
                  </div>
                  <CreditCard className="h-12 w-12 text-success-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Days Driven</p>
                    <p className="text-3xl font-bold text-accent-600">48</p>
                  </div>
                  <Calendar className="h-12 w-12 text-accent-500" />
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                          <Car className="h-6 w-6 text-primary-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{booking.carName}</h4>
                          <p className="text-sm text-gray-600">
                            {booking.startDate} to {booking.endDate}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${booking.totalPrice}</p>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          booking.status === 'confirmed' 
                            ? 'bg-success-100 text-success-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">All Bookings</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-900">{booking.carName}</h4>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        booking.status === 'confirmed' 
                          ? 'bg-success-100 text-success-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Start Date</p>
                        <p className="font-semibold">{booking.startDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">End Date</p>
                        <p className="font-semibold">{booking.endDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Total Price</p>
                        <p className="font-semibold">${booking.totalPrice}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Booking ID</p>
                        <p className="font-semibold">#{booking.id}</p>
                      </div>
                    </div>
                    <div className="flex space-x-3 mt-4">
                      <button className="px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors">
                        View Details
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Download Receipt
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Profile Settings</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-6 mb-8">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{user.name}</h4>
                  <p className="text-gray-600">{user.email}</p>
                  <button className="text-primary-900 font-medium mt-2">Change Photo</button>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="City, State"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <Bell className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Booking Confirmed</h4>
                    <p className="text-gray-600 text-sm">Your BMW 3 Series booking has been confirmed for Jan 15-18.</p>
                    <p className="text-gray-500 text-xs mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <Bell className="h-6 w-6 text-yellow-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Payment Reminder</h4>
                    <p className="text-gray-600 text-sm">Payment for Tesla Model 3 booking is due in 24 hours.</p>
                    <p className="text-gray-500 text-xs mt-1">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <Bell className="h-6 w-6 text-green-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Special Offer</h4>
                    <p className="text-gray-600 text-sm">Get 20% off on your next luxury car rental!</p>
                    <p className="text-gray-500 text-xs mt-1">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your car rentals and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              {/* User Info */}
              <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-gray-200">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-600">Premium Member</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-100 text-primary-900'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
                
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors mt-6">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;