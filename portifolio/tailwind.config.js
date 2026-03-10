/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaria: 'var(--primaria)',
        secundaria: 'var(--secundaria)',
        escuro: 'var(--bg-escuro)',
        card: 'var(--bg-card)', 
        claro: 'var(--text-claro)',
        nav: 'var(--bg-nav)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        // Adicione esta linha: órbita de 25 segundos, linear e infinita
        orbit: 'orbit 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1.5rem)' },
        },
        // Adicione estes keyframes:
        orbit: {
          // Gira o container e move o ícone para fora (raio), mantendo o ícone em pé com contra-rotação
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
        },
      }
    },
  },
  plugins: [],
}