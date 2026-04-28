/* ==============================================
   PORTFOLIO JS — Mahendra Baghel
   All 14 interactive elements
   ============================================== */

/* ── DATA ─────────────────────────────────── */
const PROJECTS = [
  {
    slug: 'sky-nz',
    title: 'Sky NZ',
    subtitle: 'Cross-Platform OTT in React Native',
    tag: 'OTT · React Native',
    year: '2025 – Present',
    stack: ['React Native', 'react-native-tvos', 'TypeScript', 'React Navigation'],
    desc: 'A single React Native codebase serving iOS, Android, and 4+ TV platforms simultaneously — without forking into chaos.',
    outcome: 'One codebase. Four+ device classes. Consistent UX and dramatically reduced maintenance overhead.',
    context: 'Sky NZ wanted a unified streaming experience across iOS, Android mobile, Android TV, and other CTV targets — without maintaining four separate codebases.',
    role: 'Senior engineer / co-lead on the React Native build, focused on shared mobile-and-TV navigation, focus management, and performance.',
    approach: [
      'Architected a shared React Navigation layer handling touch input on mobile and D-pad / remote input on TV from the same component tree.',
      'Solved hard TV-specific edge cases — modal/background simultaneous key event handling, focus restoration, and platform quirks across Tizen, webOS, Android TV, and Fire OS.',
      'Optimized rendering and memory use for resource-constrained TV devices.'
    ],
    client: 'Sky New Zealand (via Accedo.tv)'
  },
  {
    slug: 'sbs',
    title: 'SBS On Demand',
    subtitle: 'End-to-End CTV Delivery',
    tag: 'CTV · Tech Lead',
    year: '2024',
    stack: ['React', 'Tizen', 'webOS', 'JavaScript', 'Set-Top Boxes'],
    desc: "Complete CTV rebuild for Australia's public broadcaster — shipped in 6 months across Samsung, LG, and more.",
    outcome: "A complete cross-platform CTV application delivered in 6 months, now serving SBS On Demand's audience across Australia.",
    context: "SBS On Demand needed a complete rebuild of their CTV experience across Samsung, LG, and other TV platforms — under an aggressive timeline.",
    role: 'Tech Lead. Owned the project end-to-end: architecture, sprint planning, code reviews, team coordination, and final delivery.',
    approach: [
      'Designed a single codebase running across Samsung Tizen, LG webOS, additional CTV platforms, and set-top boxes.',
      'Established TV-first patterns for focus, navigation, performance budgets, and analytics — patterns that became internal best practice.',
      'Coordinated a distributed team across multiple time zones through to launch.'
    ],
    client: 'SBS Australia (via Accedo.tv)'
  },
  {
    slug: 'paramount',
    title: 'Paramount+',
    subtitle: 'Multi-Platform OTT Architecture',
    tag: 'OTT · Architecture',
    year: '2023 – 2024',
    stack: ['React', 'JavaScript', 'CTV Runtimes', 'STB'],
    desc: 'Core platform architecture for Paramount+ across multiple CTV and set-top-box targets, built to scale to regional clients.',
    outcome: 'A reusable architecture that became the foundation for additional client engagements, multiplying the value of the original investment.',
    context: 'Paramount+ needed a single application capable of running across many CTV and set-top-box platforms while supporting multiple regional clients on shared core code.',
    role: 'Senior Architect. Owned the core platform functionality and engineering process.',
    approach: [
      'Built a single-codebase application running across multiple CTV and STB platforms.',
      'Defined how shared modules and platform abstractions should evolve so that other regional clients could reuse the same core safely.',
      'Drove the engineering process — how development happens, how features are added, and how the platform stays healthy as it scales.'
    ],
    client: 'Paramount+ (via Accedo.tv)'
  },
  {
    slug: 'zs-health',
    title: 'Healthcare Territory Platform',
    subtitle: 'Maps-Powered Field Operations SaaS',
    tag: 'Enterprise · SaaS',
    year: '2021 – 2022',
    stack: ['Angular 12', 'React', 'Google Maps API', 'TypeScript'],
    desc: 'Google Maps–powered territory management for pharma field operations. Angular 8 → 12 migration boosted performance by 20%+.',
    outcome: "A platform that became the front-line tool for several pharma clients' field-force optimization decisions.",
    context: 'Pharmaceutical companies needed a way to manage field operations geographically — mapping sales territories, MR routes, and assigned doctor locations.',
    role: 'Senior Full Stack Developer.',
    approach: [
      'Built a Google Maps–powered SaaS interface for drawing and managing sales territories and visualizing MR locations.',
      'Surfaced market-coverage analytics to distinguish high vs low-performing territories.',
      'Led Angular 8 → 12 migration, improving performance by 20%+.'
    ],
    client: 'ZS Associates'
  },
  {
    slug: 'dbs-connect',
    title: 'DBS Connect',
    subtitle: 'Internal Banking Platform',
    tag: 'Enterprise · FinTech',
    year: '2022 – 2023',
    stack: ['React', 'TypeScript', 'REST APIs', 'CI/CD'],
    desc: "Custom component library and multi-stage CI/CD pipeline for Credit Agricole CIB's corporate banking platform.",
    outcome: 'Reduced duplicated effort across product teams and gave the bank a consistent baseline for new internal applications.',
    context: 'A strategic internal banking platform used by relationship managers to serve corporate customers — needing a faster, more consistent way to spin up new product modules.',
    role: 'Senior Full Stack Developer.',
    approach: [
      'Built a custom React component library standardizing UI elements bank-wide.',
      'Created starter templates that accelerated new product kickoff.',
      'Set up an automated CI/CD pipeline with multi-stage quality gates and reporting.'
    ],
    client: 'Credit Agricole CIB'
  },
  {
    slug: 'etk-finland',
    title: 'ETK Finland',
    subtitle: 'Tax & Finance Portal',
    tag: 'Public Sector',
    year: '2019 – 2021',
    stack: ['Angular', 'Redux', 'JavaScript'],
    desc: "End-to-end front-end for Finland's compliance-critical tax and financial workflow portal.",
    outcome: 'Multiple production modules shipped for a compliance-critical government system.',
    context: 'A comprehensive portal for managing Finnish tax and financial workflows — a domain where compliance and reliability are non-negotiable.',
    role: 'Senior Front-End Developer.',
    approach: [
      'Built end-to-end front-end modules for tax processing and financial workflows.',
      'Implemented Redux for predictable state management across large, complex forms.',
      'Migrated legacy systems to modern JavaScript frameworks for scalability and security.'
    ],
    client: 'Accenture (Finnish public sector)'
  },
  {
    slug: 'bombardier',
    title: 'Bombardier',
    subtitle: 'Incident Management Portal',
    tag: 'Enterprise',
    year: '2016 – 2018',
    stack: ['AngularJS'],
    desc: "Internal incident tracking portal built from scratch for Bombardier's cross-team operations.",
    outcome: "A production-grade portal integrated into Bombardier's internal incident-management workflow.",
    context: 'Bombardier needed an internal tool for cross-team incident management — tracking, updating, and sharing progress of operational incidents in real time.',
    role: 'Front-End Developer.',
    approach: [
      'Designed and built the portal from the ground up using AngularJS.',
      'Built reusable components for ticket views, escalation workflows, and progress timelines.',
      'Designed cross-team collaboration features for transparent ownership and resolution flow.'
    ],
    client: 'Bombardier (via TCS)'
  },
  {
    slug: 'goldprice',
    title: 'GoldPrice.org',
    subtitle: 'E-commerce Platform',
    tag: 'E-commerce',
    year: '2017 – 2018',
    stack: ['AngularJS', 'Data pipelines'],
    desc: 'Large-scale gold pricing retail platform with live-updating data aggregated from multiple sources.',
    outcome: 'One of the largest gold-pricing retail platforms of its kind, with real-time pricing feeds.',
    context: 'A large retail/e-commerce platform anchored on real-time gold price data scraped and aggregated from multiple sources.',
    role: 'Front-End Developer.',
    approach: [
      'Worked across the storefront and pricing surfaces with live-updating data.',
      'Gained hands-on knowledge of e-commerce architecture — catalog, pricing, performance, and front-end SEO.'
    ],
    client: 'GoldPrice.org (via TCS)'
  }
];

/* Column span pattern for bento grid */
const SPAN_PATTERN = [7, 5, 5, 7, 4, 4, 4, 6, 6];

/* ── 1. CUSTOM CURSOR ─────────────────────── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  let mx = -200, my = -200, cx = -200, cy = -200;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, [data-tv-focusable], .bento-card, .skill-chip, .accent-btn'))
      cursor.classList.add('hovered');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('a, button, [data-tv-focusable], .bento-card, .skill-chip, .accent-btn'))
      cursor.classList.remove('hovered');
  });

  (function tick() {
    cx += (mx - cx) * 0.11;
    cy += (my - cy) * 0.11;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(tick);
  })();
}

/* ── 2. LENIS SMOOTH SCROLL ───────────────── */
function initLenis() {
  if (typeof Lenis === 'undefined') return;
  const lenis = new Lenis({ lerp: 0.08 });
  const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  window._lenis = lenis;
}

/* ── 3. KINETIC TYPOGRAPHY ────────────────── */
function initKineticType() {
  const title = document.querySelector('.hero-title');
  if (!title) return;
  const text = title.innerText;
  title.innerHTML = '';
  let charIdx = 0;
  text.split(' ').forEach((word, wi) => {
    const wordEl = document.createElement('span');
    wordEl.className = 'word';
    [...word].forEach(ch => {
      const c = document.createElement('span');
      c.className = 'char';
      c.textContent = ch === ' ' ? '\u00a0' : ch;
      const delay = 0.42 + wi * 0.13 + charIdx * 0.035;
      c.style.animation = `charReveal 0.72s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards`;
      wordEl.appendChild(c);
      charIdx++;
    });
    title.appendChild(wordEl);
    if (wi < text.split(' ').length - 1) {
      const sp = document.createElement('span');
      sp.innerHTML = '\u00a0';
      title.appendChild(sp);
    }
  });
}

/* ── 4. MARQUEE (CSS handles animation) ──── */
// No JS needed — pure CSS animation.

/* ── 5. MAGNETIC BUTTONS ─────────────────── */
function initMagnetic() {
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * 0.28;
      const dy = (e.clientY - r.top  - r.height / 2) * 0.28;
      btn.style.transform = `translate(${dx}px,${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

/* ── 6. BENTO GRID RENDER ────────────────── */
function renderBento(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map((p, i) => {
    const span = SPAN_PATTERN[i % SPAN_PATTERN.length];
    const delay = ['reveal-d1','reveal-d2','reveal-d3'][i % 3];
    return `
      <article class="bento-card span-${span} reveal ${delay}" role="listitem" data-tv-focusable tabindex="0" aria-label="${p.title} — ${p.subtitle}">
        <div class="card-tag">${p.tag}</div>
        <div class="card-year">${p.year}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          <div class="card-chips">${p.stack.slice(0,3).map(s => `<span class="chip">${s}</span>`).join('')}</div>
          <button class="card-link" data-slug="${p.slug}" aria-label="View ${p.title} case study">View case study →</button>
        </div>
        <div class="card-bg-num" aria-hidden="true">0${i + 1}</div>
      </article>`;
  }).join('');
  initScrollReveals();
  initMagnetic();
}

/* ── 7. SCROLL REVEALS ───────────────────── */
function initScrollReveals() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

/* ── 8. PARALLAX BACKGROUNDS ────────────── */
function initParallax() {
  const sections = document.querySelectorAll('[data-parallax]');
  if (!sections.length) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        const offset = (rect.top / window.innerHeight) * 30;
        s.style.backgroundPositionY = `calc(50% + ${offset}px)`;
      }
    });
  }, { passive: true });
}

/* ── 9. ANIMATED COUNTERS ────────────────── */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dur = 1800;
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = (Number.isInteger(target) ? Math.floor(target * ease) : (target * ease).toFixed(0)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

/* ── 10 & 11. ROTATING BADGE ─────────────── */
function initBadge() {
  const svg = document.querySelector('.badge-ring svg');
  if (!svg) return;
  window.addEventListener('scroll', () => {
    svg.style.transform = `rotate(${window.scrollY * 0.07}deg)`;
  }, { passive: true });
}

/* ── 12. ACCENT COLOR TOGGLE ─────────────── */
function initAccentSwitcher() {
  const saved = localStorage.getItem('mb-accent') || 'green';
  applyAccent(saved);
  document.querySelectorAll('.accent-btn').forEach(btn => {
    const c = btn.dataset.color;
    if (c === saved) btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('.accent-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyAccent(c);
      localStorage.setItem('mb-accent', c);
    });
  });
}
function applyAccent(color) {
  document.documentElement.removeAttribute('data-accent');
  if (color !== 'green') document.documentElement.setAttribute('data-accent', color);
}

/* ── 13. TV REMOTE EASTER EGG ────────────── */
function initTVMode() {
  let active = false, idx = 0;
  let focusables = [];

  function enter() {
    active = true;
    document.body.classList.add('tv-active');
    focusables = [...document.querySelectorAll('[data-tv-focusable]')];
    moveTo(0);
  }
  function exit() {
    active = false;
    document.body.classList.remove('tv-active');
    focusables.forEach(f => f.classList.remove('tv-focused'));
  }
  function moveTo(i) {
    focusables.forEach(f => f.classList.remove('tv-focused'));
    idx = Math.max(0, Math.min(i, focusables.length - 1));
    const el = focusables[idx];
    if (!el) return;
    el.classList.add('tv-focused');
    // scroll target into center view
    const r = el.getBoundingClientRect();
    const targetY = window.scrollY + r.top + r.height / 2 - window.innerHeight / 2;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  }

  document.addEventListener('keydown', e => {
    if (!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Escape','Enter'].includes(e.key)) return;
    if (e.key === 'Escape') { if (active) { exit(); } return; }
    e.preventDefault();
    if (!active) { enter(); return; }
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') moveTo(idx + 1);
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') moveTo(idx - 1);
    else if (e.key === 'Enter' && focusables[idx]) focusables[idx].click();
  });
}

/* ── 14. HOVER-REVEAL SKILL CHIPS ──────────── */
// Handled entirely in CSS via .chip-reveal visibility.

/* ── CASE STUDY OVERLAY ───────────────────── */
function initCaseStudies() {
  const overlay = document.getElementById('cs-overlay');
  const content = document.getElementById('cs-content');
  const closeBtn = document.getElementById('cs-close');

  function open(slug) {
    const p = PROJECTS.find(x => x.slug === slug);
    if (!p || !content || !overlay) return;
    content.innerHTML = `
      <span class="cs-tag">${p.tag}</span>
      <h1 class="cs-title">${p.title}</h1>
      <p class="cs-subtitle">${p.subtitle}</p>
      <div class="cs-meta">
        <div class="cs-meta-item"><label>Client</label><span>${p.client}</span></div>
        <div class="cs-meta-item"><label>Year</label><span>${p.year}</span></div>
        <div class="cs-meta-item"><label>Stack</label><span>${p.stack.slice(0,2).join(', ')}</span></div>
      </div>
      <h2 class="cs-h2">Context</h2>
      <p class="cs-text">${p.context}</p>
      <h2 class="cs-h2">Role</h2>
      <p class="cs-text">${p.role}</p>
      <h2 class="cs-h2">Approach</h2>
      <ul class="cs-list">${p.approach.map(a => `<li>${a}</li>`).join('')}</ul>
      <h2 class="cs-h2">Outcome</h2>
      <p class="cs-outcome">${p.outcome}</p>
      <h2 class="cs-h2">Full Stack</h2>
      <div class="cs-stack">${p.stack.map(s => `<span class="cs-chip">${s}</span>`).join('')}</div>
    `;
    overlay.classList.add('open');
    overlay.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  // Event delegation — works for dynamically rendered bento cards too
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-slug]');
    if (btn) { e.preventDefault(); open(btn.dataset.slug); }
  });
}

/* ── NAV SCROLL SPY ──────────────────────── */
function initNavLinks() {
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      const y = window.scrollY + target.getBoundingClientRect().top - 90;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    });
  });
}

/* ── VIEW ALL TOGGLE ─────────────────────── */
function initViewAll() {
  const btn = document.getElementById('view-all-btn');
  const panel = document.getElementById('all-work');
  if (!btn || !panel) return;
  let shown = false;
  btn.addEventListener('click', e => {
    e.preventDefault();
    shown = !shown;
    panel.style.display = shown ? 'block' : 'none';
    btn.textContent = shown ? '← Show Less' : 'View All 8 Projects →';
    if (shown) {
      renderBento('bento-all', PROJECTS);
      setTimeout(initScrollReveals, 60);
    }
  });
}

/* ── INIT ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initLenis();
  initKineticType();
  initScrollReveals();
  initCounters();
  initBadge();
  initParallax();
  initMagnetic();
  initTVMode();
  initAccentSwitcher();
  initCaseStudies();
  initNavLinks();
  initViewAll();
  renderBento('bento-featured', PROJECTS.slice(0, 4));
});
