const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass-panel border-b border-gray-200">
            <div className="font-grotesk font-bold text-xl tracking-tighter">MB.</div>

            <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
                <button
                    onClick={() => scrollToSection('about')}
                    className="hover:text-lime-600 transition-colors"
                >
                    ABOUT
                </button>
                <button
                    onClick={() => scrollToSection('experience')}
                    className="hover:text-lime-600 transition-colors"
                >
                    EXPERIENCE
                </button>
                <button
                    onClick={() => scrollToSection('skills')}
                    className="hover:text-lime-600 transition-colors"
                >
                    SKILLS
                </button>
            </div>

            <div className="flex items-center gap-4">
                <a
                    href="/assets/resume.pdf"
                    download="Mahendra_Baghel_Resume.pdf"
                    className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-charcoal text-charcoal font-bold rounded-full text-xs hover:bg-charcoal hover:text-white transition-all duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    RESUME
                </a>
                <button
                    onClick={() => scrollToSection('contact')}
                    className="px-5 py-2 bg-charcoal text-white font-bold rounded-full text-xs hover:bg-lime-acid hover:text-charcoal transition-all duration-300"
                >
                    LET'S TALK
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
