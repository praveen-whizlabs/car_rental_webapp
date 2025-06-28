import React from 'react';
import { Shield, Clock, MapPin, Headphones, Star, CreditCard } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'All our vehicles come with comprehensive insurance coverage for your peace of mind.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'Convenient pickup and drop-off locations across the city for your convenience.'
    },
    {
      icon: Headphones,
      title: 'Expert Service',
      description: 'Professional customer service team ready to help you find the perfect vehicle.'
    },
    {
      icon: Star,
      title: 'Premium Fleet',
      description: 'Well-maintained, premium vehicles from top brands for a superior driving experience.'
    },
    {
      icon: CreditCard,
      title: 'Easy Payment',
      description: 'Secure and flexible payment options including credit cards and digital wallets.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose DriveWave?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide exceptional car rental services with premium vehicles, 
            competitive pricing, and outstanding customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-primary-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;