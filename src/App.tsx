import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Screening from './components/Screening';
import MembersArea from './components/MembersArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Screening />
        <Booking />
        <MembersArea />
      </main>
      <Footer />
    </div>
  );
}

export default App;