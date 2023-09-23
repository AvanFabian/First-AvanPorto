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
          "hero-mountain": "url('/assets/heromountain.jpg')",
          "hero-planet": "url('/assets/wallpaper/planethome.jpg')", 
          "hero-planet2": "url('/assets/wallpaper/planethome2.jpg')", 
          "spacestar": "url('/assets/wallpaper/spacestar.jpg')",
          "starwpp": "url('/assets/wallpaper/starwpp.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
