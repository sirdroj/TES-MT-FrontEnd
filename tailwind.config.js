/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bordercolor1':'#9EADE6',
        'bordercolor2':'#74ECD5',
        "bggrey":"#F0F0F0",
        "marun":"#7B2737",
        "lightgrey":"#FAF7F7",
        "lightgrey2":"#F1F1F1",
        "darkbg0":"#262626",
        "darkbg1":"#2E2E2E",
        "darkbg2":"#3E3E3E",
        "selectRed":"#F22F54",
        "darkBluesidenav":"#262B3F",
        "darkBluesidenavgrey":"#222222",
        "darkBluesidenavHighlight":"#58648E",
        "logeRed":"#E7182C",
        "ice":"#f5f8fd",
        "maroonFlush":"#bf263f",
      },
    },
  },
  plugins: [],
  darkMode:"class",
}

