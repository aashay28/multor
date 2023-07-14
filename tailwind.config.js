/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        bannerImage: "url('./assets/images/bannerImage.jpeg')",
      }),
    },
  },
  plugins: [],
};
