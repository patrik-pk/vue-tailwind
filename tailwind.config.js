/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#520DC2',
        'whiteText': '#E0CFFC',
        'gradient1': '#140330',
        'gradient2': '#3D0A91',
        'btnColor': '#344054'
      },
      padding: {
        '1/10': '10%',
      },
    },
    fontFamily: {
      'inter': ["Inter", "sans-serif"],
      'jakarta': ["Plus Jakarta Sans", "sans-serif"],
    }
  },
  plugins: [],
}
