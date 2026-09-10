/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        deep: 'var(--deep)',
        navy: 'var(--navy)',
        surface: 'var(--surface)',
        ivory: 'var(--ivory)',
        blue: 'var(--blue)',
        gold: 'var(--gold)',
        line: 'var(--line)',
        muted: 'var(--muted)',
        success: 'var(--success)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

