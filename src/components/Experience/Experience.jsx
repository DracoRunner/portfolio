import { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { experienceData } from '../../data/portfolioData';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Role item component
const RoleItem = ({ item, isActive, onClick }) => (
    <div
        onClick={onClick}
        className={`p-6 border-2 border-charcoal rounded-2xl cursor-pointer transition-all duration-300 hover:bg-gray-50 ${isActive ? 'bg-charcoal text-white ring-4 ring-lime-acid/30' : 'bg-white text-charcoal'
            }`}
    >
        <div className="flex justify-between items-center">
            <div>
                <h4 className={`font-bold text-lg ${isActive ? 'text-lime-acid' : 'text-charcoal'}`}>
                    {item.role}
                </h4>
                <p className="text-sm font-mono opacity-80">{item.company}</p>
            </div>
            <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
        </div>
    </div>
);

// Detail card component
const DetailCard = ({ experience, isAnimating }) => {
    const chartData = {
        labels: experience.impactLabels,
        datasets: [
            {
                label: 'Impact Metric (%)',
                data: experience.impactData,
                backgroundColor: [
                    experience.color === '#FDFBF7' ? '#121212' : experience.color,
                    '#121212'
                ],
                borderColor: '#121212',
                borderWidth: 2,
                borderRadius: 8,
                barPercentage: 0.6
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#121212',
                titleColor: '#CCFF00',
                padding: 10,
                titleFont: { family: 'Space Grotesk' },
                bodyFont: { family: 'Inter' }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: { display: false }
            },
            x: {
                grid: { display: false },
                ticks: { font: { family: 'Inter', weight: '600' } }
            }
        }
    };

    return (
        <div
            className={`bg-clay border-2 border-charcoal rounded-3xl p-8 shadow-neo transition-all duration-300 ${isAnimating ? 'opacity-50 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
        >
            <span className="font-mono text-xs font-bold bg-charcoal text-white px-2 py-1 rounded mb-4 inline-block">
                {experience.period}
            </span>

            <h3 className="font-grotesk text-3xl font-bold leading-tight mb-1">
                {experience.role}
            </h3>

            <p className="text-lg text-gray-500 font-bold mb-6">
                {experience.company} • {experience.location}
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
                {experience.desc}
            </p>

            {/* Chart Container */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-400">
                    Key Impact Metrics
                </h4>
                <div className="chart-container h-48">
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleRoleClick = (index) => {
        if (index === activeIndex) return;

        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <section id="experience" className="py-20 bg-white border-y border-charcoal">
            <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left: Role List */}
                    <div className="w-full md:w-1/2">
                        <h2 className="font-grotesk text-5xl font-bold mb-10">
                            CAREER <br /> TIMELINE
                        </h2>

                        <div className="space-y-4">
                            {experienceData.map((item, index) => (
                                <RoleItem
                                    key={item.id}
                                    item={item}
                                    isActive={index === activeIndex}
                                    onClick={() => handleRoleClick(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Details & Viz */}
                    <div className="w-full md:w-1/2 sticky top-24 h-fit">
                        <DetailCard
                            experience={experienceData[activeIndex]}
                            isAnimating={isAnimating}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
