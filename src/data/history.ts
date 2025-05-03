export interface HistoricalEvent {
    title: string;
    description: string;
  }
  
  export interface HistoricalPeriod {
    id: string;
    title: string;
    timeframe: string;
    image: string;
    keyEvents: HistoricalEvent[];
  }