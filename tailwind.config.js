/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4326c4',
        primary10: '#f2f0fb',
        primary20: '#d9d3f3',
        primary30: '#b3a8e7',
        primary40: '#8e7cdb',
        primary50: '#6851cf',
        primary60: '#351e9c',
        primary70: '#281675',
        primary80: '#1a0f4e',
        primary90: '#0d0727',
        primary100: '#070417',

        danger: '#ff3c2b',
        danger10: '#fff2f0',
        danger20: '#ffd8d4',
        danger30: '#ffb1aa',
        danger40: '#ff8a7f',
        danger50: '#ff6355',
        danger60: '#cc3022',
        danger70: '#992419',
        danger80: '#651711',
        danger90: '#320b08',
        danger100: '#1e0604',

        gray: '#dcdae4',
        gray10: '#fcfcfd',
        gray20: '#f8f7f9',
        gray30: '#f1f0f4',
        gray40: '#eae8ee',
        gray50: '#e3e1e9',
        gray60: '#b0aeb6',
        gray70: '#848288',
        gray80: '#57575b',
        gray90: '#2b2b2d',
        gray100: '#19191b',
        neutralBlack: '#15131b',

        orange10: '#fff7f0',
        orange: '#ff8d24',
      },
    },
  },
  plugins: [],
};
