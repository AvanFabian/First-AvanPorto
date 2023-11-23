import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "hero-planet": "url('/assets/wallpaper/planethome.webp')", 
          "black-hole": "url('/assets/wallpaper/blackhole.webp')",
          "black-hole2": "url('/assets/wallpaper/blackhole2.webp')",
          "sunset" : "url('/assets/wallpaper/sunset.webp')",
          "sunset2" : "url('/assets/wallpaper/sunset2.webp')",
          "dataran-planet" : "url('/assets/wallpaper/dataranplanet.webp')",
      },
    },
  },
  plugins: [],
}
export default config
