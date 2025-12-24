/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'grotesk': ['Space Grotesk', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                'clay': '#FDFBF7',
                'charcoal': '#121212',
                'lime-acid': '#CCFF00',
                'lavender-digi': '#E6E6FA',
                'glass-white': 'rgba(255, 255, 255, 0.4)',
                'glass-border': 'rgba(255, 255, 255, 0.6)',
            },
            boxShadow: {
                'neo': '8px 8px 0px 0px rgba(18, 18, 18, 1)',
                'neo-sm': '4px 4px 0px 0px rgba(18, 18, 18, 1)',
                'neo-lg': '12px 12px 0px 0px rgba(18, 18, 18, 1)',
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'ticker': 'ticker 20s linear infinite',
            },
            keyframes: {
                ticker: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}
