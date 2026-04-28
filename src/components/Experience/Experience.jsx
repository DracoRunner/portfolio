import React, { useState } from 'react';
import { experienceContent } from '../../content/portfolioContent';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="sec sec-alt border-b border-[var(--border)] px-6 md:px-16 py-24" id="experience">
      <div className="sec-header mb-14 reveal">
        <div className="inline-block text-[0.7rem] font-bold tracking-[0.2em] uppercase bg-[var(--green)] text-[var(--ink)] px-3 py-1 rounded-[4px] mb-5">
          {experienceContent.eyebrow}
        </div>
        <h2 className="sec-h2-font text-[clamp(2rem,4vw,3.2rem)] mb-4">{experienceContent.title}</h2>
        <p className="text-[1.05rem] leading-[1.78] text-[var(--ink-2)] max-w-[580px]">{experienceContent.intro}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 mt-14 reveal">
        <div className="flex flex-col gap-1.5">
          {experienceContent.items.map((item, i) => (
            <button 
              key={i} 
              className={`text-left p-4 md:px-5 md:py-4.5 rounded-[var(--radius)] border-[1.5px] transition-all ${activeTab === i ? "bg-[var(--ink)] border-[var(--ink)]" : "border-transparent hover:bg-[var(--bg-alt)]"}`}
              onClick={() => setActiveTab(i)}
            >
              <div className={`exp-tab-role-font text-[0.9rem] mb-1 ${activeTab === i ? "text-[var(--green)]" : "text-[var(--ink)]"}`}>
                {item.role}
              </div>
              <div className={`text-[0.75rem] ${activeTab === i ? "text-white/45" : "text-[var(--ink-3)]"}`}>
                {item.company}
              </div>
            </button>
          ))}
        </div>

        <div>
          {experienceContent.items.map((item, i) => (
            <div key={i} className={`p-10 bg-white border border-[var(--border)] rounded-[var(--radius)] ${activeTab === i ? "block" : "hidden"}`}>
              <div className="inline-flex px-3.5 py-1 bg-[var(--green)] rounded-full text-[0.72rem] font-bold text-black mb-6">
                {item.period}
              </div>
              <div className="exp-title-font text-[clamp(1.4rem,2.5vw,1.9rem)] mb-1 text-[var(--ink)]">
                {item.role}
              </div>
              <div className="text-[0.9rem] text-[var(--ink-3)] font-medium mb-5">
                {item.company}
              </div>
              <div className="text-[0.96rem] leading-[1.8] text-[var(--ink-2)] mb-7">
                {item.body}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {item.kpis.map((kpi, j) => (
                  <div key={j} className="p-4.5 bg-[var(--bg)] border border-[var(--border)] rounded-[10px]">
                    <div 
                      className="exp-kpi-val-font text-[1.5rem] mb-1 text-[var(--ink)]"
                      dangerouslySetInnerHTML={{ __html: kpi.val }}
                    />
                    <div className="text-[0.78rem] text-[var(--ink-3)] leading-[1.45]">{kpi.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
