import { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { skillsData, frontendSkills, architectureSkills } from '../../data/portfolioData';

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// Skill tag component
const SkillTag = ({ skill }) => (
    <span className="px-4 py-2 bg-white border border-charcoal rounded-lg font-mono text-sm hover:bg-charcoal hover:text-white transition-colors cursor-default">
        {skill}
    </span>
);

// Skill category component
const SkillCategory = ({ title, skills, dotColor }) => (
    <div className="mb-8">
        <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <span className={`w-3 h-3 ${dotColor} rounded-full border border-charcoal`} />
            {title}
        </h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
            ))}
        </div>
    </div>
);

const Skills = () => {
    const chartData = {
        labels: skillsData.labels,
        datasets: [
            {
                label: 'Skill Proficiency',
                data: skillsData.data,
                fill: true,
                backgroundColor: 'rgba(204, 255, 0, 0.4)',
                borderColor: '#121212',
                pointBackgroundColor: '#121212',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#121212'
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            r: {
                angleLines: { color: 'rgba(0,0,0,0.1)' },
                grid: { color: 'rgba(0,0,0,0.05)' },
                pointLabels: {
                    font: {
                        family: 'Space Grotesk',
                        size: 12,
                        weight: 'bold'
                    },
                    color: '#121212'
                },
                ticks: { display: false }
            }
        }
    };

    return (
        <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-grotesk text-5xl font-bold">THE SKILL MATRIX</h2>
                <p className="mt-4 text-gray-600">
                    Balancing leadership with deep technical expertise.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Radar Chart */}
                <div className="bg-white rounded-full p-6 border border-gray-100 shadow-xl relative aspect-square max-w-md mx-auto flex items-center justify-center">
                    <div className="chart-container" style={{ height: '100%', width: '100%' }}>
                        <Radar data={chartData} options={chartOptions} />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-full animate-spin-slow pointer-events-none" />
                </div>

                {/* Skill Tags */}
                <div>
                    <SkillCategory
                        title="Frontend Arsenal"
                        skills={frontendSkills}
                        dotColor="bg-lime-acid"
                    />
                    <SkillCategory
                        title="Architecture & Lead"
                        skills={architectureSkills}
                        dotColor="bg-lavender-digi"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
