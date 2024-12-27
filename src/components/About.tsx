import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4">
              <img
                className="object-cover rounded-lg shadow-2xl"
                src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80"
                alt="Aesthetic portrait"
              />
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              The Art of Dominance
            </h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 mb-6">
                With over a decade of experience in the art of dominance, I've cultivated a unique approach that combines psychological mastery with physical prowess. My sessions are more than just encounters; they're transformative experiences that will challenge your limits and expand your horizons.
              </p>
              <p className="text-gray-300 mb-6">
                I believe in creating a safe, consensual environment where boundaries are respected and desires are explored with intention and care. Every session is meticulously planned and executed with attention to detail, ensuring an unforgettable experience.
              </p>
              <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-400">
                "Power exchange is an art form, and consent is my canvas."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}