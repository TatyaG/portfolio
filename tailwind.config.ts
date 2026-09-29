import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        night: '#09090f',
        panel: '#0e0e17',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}