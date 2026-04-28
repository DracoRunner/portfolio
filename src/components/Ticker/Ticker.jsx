import React from 'react';
import { tickerItems } from '../../content/portfolioContent';

const Ticker = () => {
  const repeatedItems = [...tickerItems, ...tickerItems]; // Double for seamless loop

  return (
    <div className="ticker-container" aria-hidden="true">
      <div className="ticker-track">
        {repeatedItems.map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-6 px-7 text-[0.72rem] font-semibold tracking-[0.14em] uppercase whitespace-nowrap ${i % 3 === 0 ? "text-white/90" : "text-white/40"}`}>
            {item} <span className="badge-dot w-1 h-1 bg-[var(--green)] rounded-full"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
