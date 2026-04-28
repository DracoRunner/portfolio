import React, { useState } from 'react';
import { projectsContent } from '../../content/portfolioContent';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = showAll ? projectsContent : projectsContent.slice(0, 4);

  const openCS = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeCS = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section className="sec border-b border-[var(--border)] px-6 md:px-16 py-24" id="work">
        <div className="sec-header mb-14 reveal">
          <div className="inline-block text-[0.7rem] font-bold tracking-[0.2em] uppercase bg-[var(--green)] text-[var(--ink)] px-3 py-1 rounded-[4px] mb-5">
            Featured Work
          </div>
          <h2 className="sec-h2-font text-[clamp(2rem,4vw,3.2rem)] mb-4">Shipped to millions.<br />Across every screen.</h2>
          <p className="text-[1.05rem] leading-[1.78] text-[var(--ink-2)] max-w-[580px]">
            Eight production projects spanning OTT streaming, enterprise SaaS, fintech, and public-sector platforms. Click any project to read the full case study.
          </p>
        </div>

        <div className="proj-list-container reveal">
          {visibleProjects.map((p, i) => (
            <div 
              key={p.slug} 
              className="proj-row bg-white p-8 md:px-10 grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto] gap-8 items-start cursor-pointer hover:bg-[#fafaf8] transition-colors"
              onClick={() => openCS(p)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openCS(p)}
            >
              <div className="proj-row-num-font text-[0.78rem] text-[var(--ink-3)] pt-1">{p.num}</div>
              <div>
                <div className="inline-flex px-2.5 py-1 bg-[rgba(184,255,79,0.18)] rounded-[4px] text-[0.68rem] font-bold tracking-[0.06em] uppercase text-[#3a5c00] mb-2.5">
                  {p.tag}
                </div>
                <div className="proj-row-num-font text-[1.25rem] tracking-[-0.02em] mb-1.5 text-[var(--ink)]">
                  {p.title}
                </div>
                <div className="text-[0.9rem] text-[var(--ink-2)] leading-[1.65] max-w-[560px]">
                  {p.desc}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {p.stack.map((s, j) => (
                    <span key={j} className="px-2.5 py-1 border border-[var(--border)] rounded-[5px] text-[0.72rem] text-[var(--ink-3)]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex flex-col items-end">
                <div className="text-[0.78rem] text-[var(--ink-3)] whitespace-nowrap pt-1 text-right mb-4">{p.year}</div>
                <div className="proj-row-arrow-btn flex items-center justify-center w-9 h-9 border-[1.5px] border-[var(--border)] rounded-full text-[var(--ink-3)] text-[0.9rem]">
                  →
                </div>
              </div>
            </div>
          ))}
          <div 
            className="bg-[var(--bg)] p-5 text-center text-[0.82rem] font-semibold text-[var(--ink-3)] cursor-pointer hover:bg-[var(--bg-alt)] hover:text-[var(--ink)] transition-colors tracking-[0.03em]"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? '↑ Show less' : `Show all ${projectsContent.length} projects ↓`}
          </div>
        </div>
      </section>

      {/* Case Study Overlay */}
      {selectedProject && (
        <div className="cs-overlay-fixed open" role="dialog" aria-modal="true">
          <div className="sticky top-0 bg-[rgba(245,243,239,0.95)] backdrop-blur-[14px] border-b border-[var(--border)] flex items-center justify-between px-6 md:px-16 py-4 z-10">
            <button onClick={closeCS} className="flex items-center gap-2 text-[0.82rem] font-semibold text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors">
              ← Back to work
            </button>
            <button onClick={closeCS} className="px-4 py-1.5 bg-[var(--ink)] text-white rounded-full text-[0.78rem] font-semibold hover:bg-[#333] transition-colors">
              Close
            </button>
          </div>
          <div className="max-w-[760px] mx-auto px-6 py-20">
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase bg-[var(--green)] text-black px-3 py-1 rounded-[4px] mb-6">
              {selectedProject.tag}
            </span>
            <h1 className="cs-title-font text-[clamp(2.2rem,5vw,3.5rem)] mb-2 text-[var(--ink)]">
              {selectedProject.title}
            </h1>
            <p className="text-[1.1rem] text-[var(--ink-2)] mb-12 leading-[1.6]">
              {selectedProject.sub}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 bg-[var(--border)] border border-[var(--border)] rounded-[var(--radius)] overflow-hidden mb-12 gap-[1px]">
              <div className="bg-white p-5">
                <div className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)] mb-1.5">Client</div>
                <div className="text-[0.92rem] font-semibold text-[var(--ink)]">{selectedProject.client}</div>
              </div>
              <div className="bg-white p-5">
                <div className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)] mb-1.5">Year</div>
                <div className="text-[0.92rem] font-semibold text-[var(--ink)]">{selectedProject.year}</div>
              </div>
              <div className="bg-white p-5">
                <div className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[var(--ink-3)] mb-1.5">Engagement</div>
                <div className="text-[0.92rem] font-semibold text-[var(--ink)]">{selectedProject.tag.split('·').pop().trim()}</div>
              </div>
            </div>

            <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[var(--ink-3)] mt-10 mb-3.5">Context</span>
            <p className="text-[1rem] leading-[1.82] text-[var(--ink-2)] mb-8">{selectedProject.context}</p>

            <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[var(--ink-3)] mt-10 mb-3.5">My Role</span>
            <p className="text-[1rem] leading-[1.82] text-[var(--ink-2)] mb-8">{selectedProject.role}</p>

            <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[var(--ink-3)] mt-10 mb-3.5">Approach</span>
            <ul className="list-none flex flex-col gap-3 mb-8">
              {selectedProject.approach.map((a, j) => (
                <li key={j} className="flex gap-3 text-[0.96rem] text-[var(--ink-2)] leading-[1.7]">
                  <span className="text-[var(--ink)] font-bold">→</span>
                  {a}
                </li>
              ))}
            </ul>

            <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[var(--ink-3)] mt-10 mb-3.5">Outcome</span>
            <div 
              className="p-6 bg-[var(--ink)] text-white rounded-[var(--radius)] text-[1rem] leading-[1.75] mb-8"
              dangerouslySetInnerHTML={{ __html: selectedProject.outcome }}
            />

            <span className="block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[var(--ink-3)] mt-10 mb-3.5">Full Stack</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedProject.stack.map((s, j) => (
                <span key={j} className="px-3 py-1 border-[1.5px] border-[var(--border)] rounded-[6px] text-[0.78rem] text-[var(--ink-2)]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
