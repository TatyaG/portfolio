import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        night: '#fff8f8',
        panel: '#fffdfd',
      },
    },
  },
  plugins: [],
}