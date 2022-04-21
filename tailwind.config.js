module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'media',
  plugins: [require('@tailwindcss/forms')],
};
