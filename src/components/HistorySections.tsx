import React from 'react';
import { HistoricalPeriod } from '../data/history';

interface HistorySectionsProps {
  periods: HistoricalPeriod[];
}

const HistorySection: React.FC<{ period: HistoricalPeriod; index: number }> = ({ period, index }) => {
  return (
    <section 
      id={period.id} 
      className="mb-16 scroll-mt-24"
    >
      <div className={`flex flex-col md:flex-row gap-8 ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}>
        <div className="md:w-1/3">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={period.image} 
              alt={period.title} 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">{period.title}</h2>
          <p className="text-sm font-medium text-emerald-700 mb-4">{period.timeframe}</p>
          
          <div className="prose prose-emerald max-w-none">
            {period.keyEvents.map((event, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HistorySections: React.FC<HistorySectionsProps> = ({ periods }) => {
  return (
    <div className="py-4">
      {periods.map((period, index) => (
        <HistorySection key={period.id} period={period} index={index} />
      ))}
      
      <div className="mt-16 p-8 bg-emerald-50 rounded-lg border border-emerald-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cultural Heritage</h2>
        <p className="mb-4 text-gray-700">
          Sri Lanka's rich cultural heritage is reflected in its architecture, art, dance, and literature.
          The country has eight UNESCO World Heritage Sites, including Sigiriya, Anuradhapura, Polonnaruwa, 
          Dambulla Cave Temple, and Galle Fort.
        </p>
        <p className="text-gray-700">
          The island nation has a strong Buddhist identity (over 70% of the population), though it is home 
          to many religions including Hinduism, Islam, and Christianity, contributing to its diverse cultural landscape.
        </p>
      </div>
    </div>
  );
};

export default HistorySections;