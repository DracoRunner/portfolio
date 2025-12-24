import { personalInfo, contactInfo } from '../../data/portfolioData';

// Stat card component
const StatCard = ({ children, className = '' }) => (
    <div className={`rounded-3xl border-2 border-charcoal shadow-neo hover-card ${className}`}>
        {children}
    </div>
);

// Summary card
const SummaryCard = () => (
    <StatCard className="md:col-span-2 lg:col-span-2 row-span-2 bg-white p-8 flex flex-col justify-between">
        <div>
            <div className="w-12 h-12 bg-lavender-digi rounded-full flex items-center justify-center text-2xl mb-4">
                🚀
            </div>
            <h3 className="font-grotesk text-2xl font-bold mb-2">Engineering Vision</h3>
            <p className="text-gray-600 leading-relaxed">
                Proven ability to bridge technical excellence with strategic thinking. I don&apos;t just write
                code; I optimize workflows, mentor teams, and architect solutions that scale.
            </p>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
            <span className="px-3 py-1 border border-charcoal rounded-full text-xs font-bold">
                Problem Solving
            </span>
            <span className="px-3 py-1 border border-charcoal rounded-full text-xs font-bold">
                Team Leadership
            </span>
            <span className="px-3 py-1 border border-charcoal rounded-full text-xs font-bold">
                Agile
            </span>
        </div>
    </StatCard>
);

// Years Experience card
const YearsCard = () => (
    <StatCard className="bg-lime-acid p-6 flex flex-col items-center justify-center text-center">
        <span className="font-grotesk text-6xl font-bold">{personalInfo.yearsExperience}</span>
        <span className="font-mono text-sm mt-2 font-bold uppercase tracking-widest">
            Years Experience
        </span>
    </StatCard>
);

// Location card
const LocationCard = () => (
    <StatCard className="bg-white p-6 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-[-20px] right-[-20px] w-20 h-20 bg-lavender-digi rounded-full opacity-50" />
        <h4 className="font-bold text-gray-500 text-sm">CURRENT BASE</h4>
        <div className="mt-auto">
            <p className="font-grotesk text-3xl font-bold">{contactInfo.location}</p>
            <p className="text-xs text-gray-500">Available for Opportunities</p>
        </div>
    </StatCard>
);

// Core Focus card
const FocusCard = () => (
    <StatCard className="bg-charcoal text-white p-6 flex flex-col justify-center">
        <h4 className="text-lime-acid font-bold text-sm mb-4">CORE FOCUS</h4>
        <ul className="space-y-2 font-mono text-sm">
            <li className="flex items-center gap-2">
                <span>⚡</span> Perf. Optimization
            </li>
            <li className="flex items-center gap-2">
                <span>🧩</span> Micro-Frontends
            </li>
            <li className="flex items-center gap-2">
                <span>🔐</span> Secure Auth
            </li>
        </ul>
    </StatCard>
);

// Contact mini card
const ContactMiniCard = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <StatCard
            className="md:col-span-2 bg-lavender-digi p-6 flex items-center justify-between cursor-pointer"
            onClick={scrollToContact}
        >
            <div>
                <h3 className="font-grotesk text-2xl font-bold">Let&apos;s Collaborate</h3>
                <p className="text-sm opacity-70">{contactInfo.email}</p>
            </div>
            <div className="w-12 h-12 bg-white rounded-full border border-charcoal flex items-center justify-center text-xl">
                ➔
            </div>
        </StatCard>
    );
};

const BentoGrid = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <div className="mb-12">
                <h2 className="font-grotesk text-4xl md:text-6xl font-bold mb-4">THE STATS</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                    A data-driven summary of my professional journey. Focused on reducing time-to-market and
                    enhancing user experience through technical excellence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
                <SummaryCard />
                <YearsCard />
                <LocationCard />
                <FocusCard />
                <ContactMiniCard />
            </div>
        </section>
    );
};

export default BentoGrid;
