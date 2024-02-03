import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        colorMain: '#008AFF',
        textColorMain: '#fff',
      },
      fontFamily: {
        display: 'Jaldi, sans-serif',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss', daisyui],
};
