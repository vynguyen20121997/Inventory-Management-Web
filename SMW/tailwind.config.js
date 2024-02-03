import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorMain: '#008AFF',
        textColorMain: '#fff',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss', daisyui],
};
