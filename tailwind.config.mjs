/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'lidar-dark': '#19355D',
        'lidar-blue': '#116EAB',
        'glass': 'rgba(25, 53, 93, 0.08)',
        'glass-light': 'rgba(255,255,255,0.7)',
        primary: '#0066cc',
        secondary: '#003366',
        accent: '#00aaff',
        light: '#f5f9ff',
        dark: '#1a1a2e',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
        'cyber': ['Poppins', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 20px #00FAC7' },
          '100%': { 'box-shadow': '0 0 30px #116EAB' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}