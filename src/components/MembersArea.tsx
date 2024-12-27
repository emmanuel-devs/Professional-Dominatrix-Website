import React from 'react';
import { Lock, BookOpen, Calendar, FileText, Shield } from 'lucide-react';

export default function MembersArea() {
  // Normally would check auth status
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-white mb-12">Members Area</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberFeatures.map((feature) => (
            <div key={feature.title} className="bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-red-700/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <button className="mt-4 px-4 py-2 bg-red-700 rounded text-white hover:bg-red-600 transition-colors">
                Access
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoginForm() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg">
        <div className="text-center">
          <Lock className="mx-auto h-12 w-12 text-red-600" />
          <h2 className="mt-6 text-3xl font-bold text-white">Members Access</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 text-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 text-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const memberFeatures = [
  {
    icon: <BookOpen className="h-6 w-6 text-red-500" />,
    title: "Training Protocols",
    description: "Access exclusive training materials and educational content."
  },
  {
    icon: <Calendar className="h-6 w-6 text-red-500" />,
    title: "Priority Booking",
    description: "Book sessions before they're available to the public."
  },
  {
    icon: <FileText className="h-6 w-6 text-red-500" />,
    title: "Private Blog",
    description: "Read exclusive articles and personal insights."
  },
  {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    title: "Verified Status",
    description: "Skip basic screening once verified."
  }
];