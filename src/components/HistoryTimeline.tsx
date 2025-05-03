import React from 'react';
import { HistoricalPeriod } from '../data/history';

interface HistoryTimelineProps {
  periods: HistoricalPeriod[];
}

const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ periods }) => {
  return (
    <div className="mb-12 py-6 overflow-hidden">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute h-1 bg-emerald-200 top-7 left-0 right-0 z-0"></div>
        
        {/* Timeline points */}
        <div className="relative flex justify-between items-center">
          {periods.map((period, index) => (
            <div 
              key={period.id} 
              className="flex flex-col items-center z-10"
            >
              <div className="bg-white p-1 rounded-md mb-2">
                <span className="text-xs font-medium text-gray-600 whitespace-nowrap">
                  {period.timeframe}
                </span>
              </div>
              <div 
                className={`w-4 h-4 rounded-full border-2 border-emerald-600 ${
                  index === 0 ? 'bg-emerald-600' : 'bg-white'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;