import React from 'react';
import { HistoricalPeriod } from '../data/history';

interface HistoryNavigationProps {
  periods: HistoricalPeriod[];
}

const HistoryNavigation: React.FC<HistoryNavigationProps> = ({ periods }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md mb-8">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto py-4">
          <ul className="flex space-x-6 md:space-x-8 min-w-max">
            {periods.map((period) => (
              <li key={period.id}>
                <button
                  onClick={() => scrollToSection(period.id)}
                  className="text-sm md:text-base font-medium text-gray-700 hover:text-emerald-700 transition-colors whitespace-nowrap"
                >
                  {period.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoryNavigation;