import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Car, Menu, X, User, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/cars', label: 'Cars' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary-900 rounded-lg group-hover:bg-primary-800 transition-colors">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary-900">DriveWave</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-900 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary-900 transition-colors"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary-900 transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-900 hover:bg-gray-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary-900 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img
                        src={user?.avatar}
                        alt={user?.name}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span>{user?.name}</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md mt-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-900 hover:bg-gray-50 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="h-4 w-4" />
                      <span>Login</span>
                    </Link>
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 px-3 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors mt-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;