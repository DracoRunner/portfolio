import { contactInfo } from '../../data/portfolioData';

const Footer = () => {
    return (
        <footer id="contact" className="bg-charcoal text-white py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <p className="font-mono text-lime-acid mb-4">READY TO SCALE?</p>

                <h2 className="font-grotesk text-6xl md:text-8xl font-bold mb-12 hover:text-lime-acid transition-colors cursor-pointer">
                    <a href={`mailto:${contactInfo.email}`}>SAY HELLO.</a>
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-lime-acid rounded-full animate-pulse" />
                        Available for new roles
                    </div>
                    <a
                        href={contactInfo.linkedin}
                        className="hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={`https://wa.me/${contactInfo.phoneWhatsapp.replace(/\s/g, '')}`}
                        className="hover:text-white transition-colors flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-lime-acid">WhatsApp:</span> {contactInfo.phoneWhatsapp}
                    </a>
                    <a href={`tel:${contactInfo.phoneSG.replace(/\s/g, '')}`} className="hover:text-white transition-colors flex items-center gap-1">
                        <span className="text-lime-acid">SG:</span> {contactInfo.phoneSG}
                    </a>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                        {contactInfo.email}
                    </a>
                </div>

                <p className="mt-20 text-xs opacity-30">
                    © 2025 Mahendra Baghel. Designed with Code.
                </p>
            </div>

            {/* Background gradient elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-[500px] h-[500px] bg-lime-acid rounded-full blur-[120px] absolute -top-20 -left-20" />
                <div className="w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] absolute bottom-0 right-0" />
            </div>
        </footer>
    );
};

export default Footer;
