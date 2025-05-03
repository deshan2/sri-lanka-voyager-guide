import React from 'react';
import HistoryHero from '../components/HistoryHero';
import HistoryTimeline from '../components/HistoryTimeline';
import HistorySections from '../components/HistorySections';
import HistoryNavigation from '../components/HistoryNavigation';
import { historicalPeriods } from '../data/sriLankaHistory';

const SriLankaHistory: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <HistoryHero />
      <div className="container mx-auto px-4 py-8 md:py-12">
        <HistoryNavigation periods={historicalPeriods} />
        <HistoryTimeline periods={historicalPeriods} />
        <HistorySections periods={historicalPeriods} />
      </div>
    </div>
  );
};

export default SriLankaHistory;