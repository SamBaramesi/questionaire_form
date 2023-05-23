/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {

      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      warning: 'rgb(var(--color-warning) / <alpha-value>)',
      succes: 'rgb(var(--color-succes) / <alpha-value>)',

    }
  },
  plugins: [],
}

