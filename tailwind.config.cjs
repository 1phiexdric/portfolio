const { default: plugin } = require("@sveltejs/adapter-auto");

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/posts/**/*.{md,svx}'],
    theme:{},
    plugins: [
        require('@tailwindcss/typography')
    ]
}