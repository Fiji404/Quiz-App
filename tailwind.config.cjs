/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx', './index.html'],
    theme: {
        extend: {
            keyframes: {
                originate: {
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                }
            },
            animation: {
                originate: 'originate 400ms ease-in-out forwards'
            },
            colors: {
                accent: 'rgb(235, 235, 235)'
            }
        }
    },
    plugins: []
};
