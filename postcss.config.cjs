const tailwindcss = require("@tailwindcss/postcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwindcss({ config: "./tailwind.config.js" }), // explicitly point to config
    autoprefixer,
  ],
};
