import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Default user for demo purposes
const defaultUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'demo@drivewave.com',
  phone: '+1 (555) 123-4567',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
};

// Demo credentials
const demoCredentials = {
  email: 'demo@drivewave.com',
  password: 'demo123'
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const savedUser = localStorage.getItem('drivewave_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check demo credentials
    if (email === demoCredentials.email && password === demoCredentials.password) {
      setUser(defaultUser);
      localStorage.setItem('drivewave_user', JSON.stringify(defaultUser));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('drivewave_user');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};