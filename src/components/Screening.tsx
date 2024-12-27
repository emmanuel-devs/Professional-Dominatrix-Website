import React from 'react';
import { Shield, AlertCircle, CheckCircle } from 'lucide-react';

export default function Screening() {
  return (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold text-white">Screening Process</h2>
          <p className="mt-4 text-xl text-gray-400">Your safety and privacy are paramount</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Required Information</h3>
            <ul className="space-y-3 text-gray-300">
              {requiredInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Safety Protocols</h3>
            <ul className="space-y-3 text-gray-300">
              {safetyProtocols.map((item, index) => (
                <li key={index} className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-red-700/10 border border-red-700/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Important Notice</h3>
          <p className="text-gray-300">
            All information provided during screening is handled with strict confidentiality and stored securely. 
            Screening is mandatory for all new clients and must be completed at least 48 hours before your first session.
          </p>
        </div>
      </div>
    </section>
  );
}

const requiredInfo = [
  "Valid government-issued ID",
  "Professional email address",
  "Recent reference (if available)",
  "Brief introduction letter",
  "Completed health questionnaire"
];

const safetyProtocols = [
  "All information is encrypted and stored securely",
  "48-hour minimum screening period",
  "Verified references check",
  "Consent and boundaries discussion",
  "Emergency protocols in place"
];