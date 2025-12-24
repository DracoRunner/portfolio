import { personalInfo } from '../../data/portfolioData';

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-20 lg:px-32 relative">
            <div className="max-w-5xl">
                <p className="font-mono text-sm mb-4 animate-fade-in text-gray-600">
                    Based in Singapore • {personalInfo.yearsExperience} Years Exp.
                </p>

                <h1 className="font-grotesk text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 text-charcoal">
                    MAHENDRA <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-gray-600">
                        BAGHEL
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="px-6 py-3 bg-lime-acid border-2 border-charcoal shadow-neo rounded-xl font-bold text-lg rotate-1">
                        {personalInfo.title}
                    </div>

                    <p className="text-xl md:text-2xl max-w-2xl font-light text-gray-800 leading-relaxed">
                        Architecting scalable frontend ecosystems. Specializing in{' '}
                        <span className="font-bold underline decoration-lime-acid decoration-4">React</span>,{' '}
                        <span className="font-bold underline decoration-lime-acid decoration-4">Angular</span>, and
                        high-performance applications.
                    </p>
                </div>
            </div>

            {/* Scrolling Ticker */}
            <div className="absolute bottom-10 left-0 w-full rotate-[-2deg] bg-charcoal text-white py-3 z-0 pointer-events-none opacity-90">
                <div className="ticker-wrap">
                    <div className="ticker font-grotesk font-bold text-2xl">
                        REACT • ANGULAR • TYPESCRIPT • PERFORMANCE • ARCHITECTURE • MICRO-FRONTENDS • SCALABILITY •
                        REACT • ANGULAR • TYPESCRIPT • PERFORMANCE • ARCHITECTURE • MICRO-FRONTENDS • SCALABILITY •
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
