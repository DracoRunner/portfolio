import React from 'react';
import { skillsContent } from '../../content/portfolioContent';

const Skills = () => {
  return (
    <section className="sec bg-white border-b border-[var(--border)] px-6 md:px-16 py-24" id="skills">
      <div className="sec-header mb-14 reveal">
        <div className="inline-block text-[0.7rem] font-bold tracking-[0.2em] uppercase bg-[var(--green)] text-[var(--ink)] px-3 py-1 rounded-[4px] mb-5">
          {skillsContent.eyebrow}
        </div>
        <h2 className="sec-h2-font text-[clamp(2rem,4vw,3.2rem)] mb-4">{skillsContent.title}</h2>
        <p className="text-[1.05rem] leading-[1.78] text-[var(--ink-2)] max-w-[580px]">{skillsContent.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[var(--border)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden gap-[1px] mt-14 reveal">
        {skillsContent.categories.map((cat, i) => (
          <div key={i} className="bg-white p-8">
            <div className="inline-block text-[0.7rem] font-bold tracking-[0.16em] uppercase text-black bg-[var(--green)] px-2.5 py-0.5 rounded-[4px] mb-4.5">
              {cat.label}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill, j) => (
                <span 
                  key={j} 
                  className="sk-chip-transition px-3 py-1.5 border-[1.5px] border-[var(--border)] rounded-[7px] text-[0.8rem] text-[var(--ink-2)] hover:bg-[var(--green)] hover:border-[var(--green)] hover:text-black cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
