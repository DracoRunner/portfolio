import {
    ThreeBackground,
    Navbar,
    Hero,
    BentoGrid,
    Experience,
    Skills,
    Footer
} from './components';

function App() {
    return (
        <div className="font-inter">
            {/* 3D Background */}
            <ThreeBackground />

            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="relative pt-20">
                <Hero />
                <BentoGrid />
                <Experience />
                <Skills />
                <Footer />
            </main>
        </div>
    );
}

export default App;
