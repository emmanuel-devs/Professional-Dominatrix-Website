import React from 'react';
import { Crown } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Crown className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-serif text-white">Mistress Victoria</span>
            </div>
            <p className="mt-4 text-gray-400">
              Elevating the art of dominance through sophistication and expertise.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#booking" className="text-base text-gray-300 hover:text-white">
                  Booking
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Mistress Victoria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}