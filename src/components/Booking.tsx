import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);

  return (
    <section id="booking" className="py-24 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white">Request a Session</h2>
          <p className="mt-4 text-xl text-gray-400">Begin your journey with a proper introduction</p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-xl p-6 sm:p-10">
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-12 w-12 text-red-600" />
            <span className="ml-3 text-lg text-gray-300">Secure & Confidential</span>
          </div>

          <form className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Preferred Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Previous Experience
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                  >
                    <option>None</option>
                    <option>Some Experience</option>
                    <option>Experienced</option>
                    <option>Very Experienced</option>
                  </select>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Preferred Session Type
                  </label>
                  <select
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                  >
                    <option>Initial Consultation</option>
                    <option>Private Session</option>
                    <option>Training Program</option>
                    <option>Special Request</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                    placeholder="Please share your interests and any specific requests..."
                  ></textarea>
                </div>
              </>
            )}

            <div className="flex justify-between pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 border border-red-700 rounded text-white hover:bg-red-700/20 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                type="button"
                onClick={() => step === 1 ? setStep(2) : alert('Form submitted!')}
                className="px-6 py-2 bg-red-700 rounded text-white hover:bg-red-600 transition-colors ml-auto"
              >
                {step === 1 ? 'Next' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}