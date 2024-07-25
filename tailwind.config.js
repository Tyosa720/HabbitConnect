/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4D8CF0',
        secondary: '#FFB74D',
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
        info: '#2196F3',
        background: '#1D1E22',
        text: '#ECEDEE',
        gold: '#f4be7e',
      },
    },
  },
  plugins: [],
};
