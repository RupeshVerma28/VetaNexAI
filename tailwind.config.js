/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#16312e', teal: { 50: '#eef9f7', 100: '#d7f0ec', 500: '#148276', 600: '#0b6b62', 700: '#07554f' } },
      boxShadow: { soft: '0 10px 35px rgba(18, 72, 66, .10)' }
    }
  },
  plugins: []
}
