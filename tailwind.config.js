/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#520DC2',
        'lavender': '#E0CFFC',
        'gradient1': '#140330',
        'gradient2': '#3D0A91',
        'btn-text-color': '#344054'
      },
      padding: {
        '1/10': '10%',
      },
      margin: {
        '1/10': '10%',
      },
      maxHeight: {
        'banner-limit': '50vw'
      },
      minHeight: {
        'banner-img': '50vw'
      },
      lineHeight: {
        'mini-snug': '1.1'
      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      }
    },
    fontFamily: {
      'inter': ["Inter", "sans-serif"],
      'jakarta': ["Plus Jakarta Sans", "sans-serif"],
    }
  },
  plugins: [],
}
