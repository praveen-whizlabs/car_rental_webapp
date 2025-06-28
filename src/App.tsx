import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BookingProvider } from './contexts/BookingContext';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/cars/:id" element={<CarDetails />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/booking/confirm" 
                element={
                  <ProtectedRoute>
                    <BookingConfirmation />
                  </ProtectedRoute>
                } 
              />
              <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-primary-900">About Page - Coming Soon</h1></div>} />
              <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-primary-900">Contact Page - Coming Soon</h1></div>} />
            </Routes>
          </div>
        </Router>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;