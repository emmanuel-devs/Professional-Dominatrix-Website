import React from 'react';
import { Shield, Star, Lock, Crown, Heart } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-white">Exclusive Services</h2>
          <p className="mt-4 text-xl text-gray-400">Curated experiences for the discerning submissive</p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-purple-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity blur"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-red-700/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-sm text-red-400">
                  Starting from {service.pricing}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-serif text-white mb-6">Member Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberBenefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start space-x-4">
                {benefit.icon}
                <div>
                  <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-red-700 hover:bg-red-600 rounded-md text-white font-medium transition-colors">
            Request Service Details
          </button>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <Shield className="w-6 h-6 text-red-500" />,
    title: "Initial Consultation",
    description: "A formal introduction to establish compatibility and discuss your journey into submission.",
    pricing: "$200"
  },
  {
    icon: <Star className="w-6 h-6 text-red-500" />,
    title: "Private Sessions",
    description: "Bespoke one-on-one sessions tailored to your specific desires and boundaries.",
    pricing: "$400/hour"
  },
  {
    icon: <Crown className="w-6 h-6 text-red-500" />,
    title: "Long-term Training",
    description: "Comprehensive development programs for dedicated submissives seeking deeper exploration.",
    pricing: "Custom Packages"
  },
  {
    icon: <Lock className="w-6 h-6 text-red-500" />,
    title: "Elite Experiences",
    description: "Exclusive, elaborate scenarios for the truly devoted. By invitation only.",
    pricing: "Upon Application"
  },
  {
    icon: <Heart className="w-6 h-6 text-red-500" />,
    title: "Couples Sessions",
    description: "Guide your partner into the world of power exchange under expert supervision.",
    pricing: "$600/hour"
  }
];

const memberBenefits = [
  {
    icon: <Lock className="w-6 h-6 text-red-500" />,
    title: "Priority Booking",
    description: "Exclusive access to premium time slots"
  },
  {
    icon: <Shield className="w-6 h-6 text-red-500" />,
    title: "Private Content",
    description: "Access to training guides and protocols"
  },
  {
    icon: <Star className="w-6 h-6 text-red-500" />,
    title: "Special Events",
    description: "Invitation to private gatherings"
  },
  {
    icon: <Crown className="w-6 h-6 text-red-500" />,
    title: "Loyalty Rewards",
    description: "Exclusive rates for regular sessions"
  }
];