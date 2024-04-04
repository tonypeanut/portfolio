/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens:{
        'cellphone':'475px',
        'tablet':'640px',
        'laptop':'1024px',
        'desktop':'1280px',
      },
    },
  },
  plugins: [require("daisyui")],
}

