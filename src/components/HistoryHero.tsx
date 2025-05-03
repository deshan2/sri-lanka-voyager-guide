import React from 'react';
import { Landmark } from 'lucide-react';

const HistoryHero: React.FC = () => {
  return (
    <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("/lovable-uploads/history.jpeg',
          backgroundPosition: 'center 30%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-6">
        <Landmark className="w-12 h-12 mb-4 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
          Sri Lanka
        </h1>
        <p className="text-xl md:text-2xl font-light italic mb-6">
          The Pearl of the Indian Ocean
        </p>
        <p className="max-w-3xl text-base md:text-lg leading-relaxed">
          Discover the rich tapestry of Sri Lankan history spanning over 2,500 years, 
          from ancient kingdoms and colonial rule to modern independence and beyond.
        </p>
      </div>
    </div>
  );
};

export default HistoryHero;