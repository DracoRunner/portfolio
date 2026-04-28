import React from 'react';
import { aboutContent } from '../../content/portfolioContent';

const BentoGrid = () => {
  return (
    <section className="sec bg-white border-b border-[var(--border)] px-6 md:px-16 py-24" id="about">
      <div className="sec-header mb-14 reveal">
        <div className="inline-block text-[0.7rem] font-bold tracking-[0.2em] uppercase bg-[var(--green)] text-[var(--ink)] px-3 py-1 rounded-[4px] mb-5">
          {aboutContent.eyebrow}
        </div>
        <h2 className="sec-h2-font text-[clamp(2rem,4vw,3.2rem)] mb-4">{aboutContent.title}</h2>
        <p className="text-[1.05rem] leading-[1.78] text-[var(--ink-2)] max-w-[580px]">{aboutContent.intro}</p>
      </div>

      <div className="stats-grid-container reveal">
        {aboutContent.stats.map((stat, i) => {
          const isGreen = stat.variant === 'green';
          const isDark = stat.variant === 'dark';
          const isLocation = stat.isLocation;

          return (
            <div 
              key={i} 
              className={`
                p-9 flex flex-col gap-2
                ${isGreen ? "bg-[var(--green)] text-[var(--ink)]" : "bg-white"}
                ${isDark ? "bg-[var(--ink)] text-white" : ""}
                ${!isGreen && !isDark ? "bg-white" : ""}
              `}
            >
              {isLocation ? (
                <>
                  <div className="text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[var(--ink-3)] mb-1">
                    {stat.label}
                  </div>
                  <div className="logo-font text-[1.5rem] font-extrabold flex items-center gap-2">
                    <span className="badge-dot w-[9px] h-[9px] bg-[var(--green)] rounded-full shadow-[0_0_0_3px_rgba(184,255,79,0.25)] animate-pulse"></span>
                    {stat.value}
                  </div>
                  <div className="text-[0.9rem] leading-[1.65] text-[var(--ink-2)] mt-1">{stat.body}</div>
                </>
              ) : (
                <>
                  {stat.num && (
                    <div className={`sbox-num-font text-[clamp(2.5rem,5vw,4rem)] ${isDark ? "text-white" : "text-[var(--ink)]"}`}>
                      {stat.num}
                    </div>
                  )}
                  <div className={`text-[0.8rem] font-semibold tracking-[0.06em] uppercase ${isGreen ? "text-black/60" : isDark ? "text-white/45" : "text-[var(--ink-3)]"}`}>
                    {stat.label}
                  </div>
                  {stat.body && (
                    <div className={`text-[0.9rem] leading-[1.65] mt-1 ${isGreen ? "text-black/65" : isDark ? "text-white/50" : "text-[var(--ink-2)]"}`}>
                      {stat.body}
                    </div>
                  )}
                  {stat.platforms && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {stat.platforms.map((p, j) => (
                        <span key={j} className="inline-flex items-center gap-1.5 px-3 py-1 border-[1.5px] border-[var(--border)] rounded-full text-[0.74rem] font-medium text-[var(--ink-2)]">
                          <span className="w-1.5 h-1.5 bg-[var(--green)] rounded-full"></span>
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                  {stat.chips && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {stat.chips.map((c, j) => (
                        <span key={j} className={`px-2.5 py-1 rounded-[5px] text-[0.72rem] font-medium ${isDark ? "bg-white/10 text-white/70" : "bg-black/5 text-[var(--ink-2)]"}`}>
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BentoGrid;
