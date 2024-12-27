import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-white mb-4">
          <span className="block">Enter the Realm of</span>
          <span className="block text-red-600 mt-2">Mistress Victoria</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
          Where dominance meets sophistication. Experience the art of submission under the guidance of an experienced professional.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 bg-red-700 hover:bg-red-600 rounded-md text-white font-medium transition-colors">
            Book Session
          </button>
          <button className="px-8 py-3 border border-red-700 hover:border-red-600 rounded-md text-white font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white opacity-75" />
      </div>
    </div>
  );
}