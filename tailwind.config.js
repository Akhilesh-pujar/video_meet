/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient radial': 'radial gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'consic-gradient(from 100deg at 50% 50%, var(--tw-gradient-stops))',

      },
      colors:{
        prime:'#212527',
        secondary:'#343840',
        buttonPrimary:'#d90429'
      }
    },
  },
  plugins: [],
}

