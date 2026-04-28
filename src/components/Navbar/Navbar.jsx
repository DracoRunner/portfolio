import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 74;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="nav-sticky flex items-center justify-between px-6 md:px-16 py-4">
      <a href="#hero" onClick={scrollTo('hero')} className="logo-font text-[1.05rem]">MB.</a>
      
      <ul className="hidden md:flex gap-10 list-none">
        <li>
          <a href="#about" onClick={scrollTo('about')} className="text-[0.8rem] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#work" onClick={scrollTo('work')} className="text-[0.8rem] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors">
            Work
          </a>
        </li>
        <li>
          <a href="#experience" onClick={scrollTo('experience')} className="text-[0.8rem] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors">
            Experience
          </a>
        </li>
        <li>
          <a href="#skills" onClick={scrollTo('skills')} className="text-[0.8rem] font-medium tracking-[0.08em] uppercase text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors">
            Skills
          </a>
        </li>
      </ul>

      <div className="flex gap-2">
        <a href="#" className="btn-sm btn-sm-outline rounded-full px-5 py-2 text-[0.8rem] font-semibold">
          ↓ Resume
        </a>
        <a href="#contact" onClick={scrollTo('contact')} className="btn-sm btn-sm-solid rounded-full px-5 py-2 text-[0.8rem] font-semibold">
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
