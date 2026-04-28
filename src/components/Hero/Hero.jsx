import React from 'react';
import { heroContent } from '../../content/portfolioContent';

const Hero = () => {
  return (
    <section className="hero border-b border-[var(--border)] px-6 md:px-16 pt-28 pb-24" id="hero">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 border-[1.5px] border-[var(--border)] rounded-full text-[0.8rem] font-medium text-[var(--ink-2)] mb-11">
        <span className="badge-dot"></span>
        {heroContent.badge}
      </div>

      <h1 className="hero-name-font text-[clamp(4rem,10vw,9.5rem)] mb-12 uppercase">
        {heroContent.name}<br />
        <span className="green-highlight">{heroContent.surname}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-16">
        <div>
          <p className="text-[1rem] font-semibold tracking-[0.01em] text-[var(--ink-2)] mb-2">
            {heroContent.role}
          </p>
          <p 
            className="text-[1.15rem] leading-[1.78] text-[var(--ink-2)]"
            dangerouslySetInnerHTML={{ __html: heroContent.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
          <div className="flex gap-3 flex-wrap mt-8">
            <a href="#work" className="btn-lg btn-lg-solid rounded-full px-8 py-3.5 text-[0.92rem] font-semibold flex items-center gap-2">
              View My Work →
            </a>
            <a href="#contact" className="btn-lg btn-lg-green rounded-full px-8 py-3.5 text-[0.92rem] font-semibold flex items-center gap-2">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="text-[0.88rem] leading-[1.75] text-[var(--ink-3)]">
          {heroContent.rightText.map((text, i) => (
            <p 
              key={i} 
              className={i > 0 ? "mt-4" : ""}
              dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[var(--border)] pt-10">
        {heroContent.stats.map((stat, i) => (
          <div 
            key={i} 
            className={`
              hstat py-4 md:py-0
              ${i % 2 === 0 ? "pr-8" : "pl-8"}
              ${i < 2 ? "md:border-r border-[var(--border)]" : ""}
              ${i === 2 ? "md:pl-8 md:border-r border-[var(--border)]" : ""}
              ${i === 3 ? "md:pl-8" : ""}
            `}
          >
            <div className="hstat-num text-[2.4rem] mb-1">{stat.num}</div>
            <div className="text-[0.78rem] text-[var(--ink-3)] leading-[1.4]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
