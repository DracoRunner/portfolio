import React, { useEffect } from 'react';
import {
    Navbar,
    Hero,
    Ticker,
    BentoGrid,
    Projects,
    Experience,
    Skills,
    Footer
} from './components';

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('vis');
                }
            });
        }, { threshold: 0.06 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="font-sans bg-[var(--bg)] text-[var(--ink)]">
            <Navbar />
            <main>
                <Hero />
                <Ticker />
                <BentoGrid />
                <Projects />
                <Experience />
                <Skills />
                <Footer />
            </main>
        </div>
    );
}

export default App;
