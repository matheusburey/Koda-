export default {
  content: [
    './node_modules/preline/preline.js',
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00a0f0',
        'primary-light': '#00a0f0',
        'primary-dark': '#00a0f0',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin'),
  ],
}
