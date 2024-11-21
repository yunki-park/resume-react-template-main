module.exports = {
  webpack: {
    style: {
      postcss: {
        mode: 'extends',
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  },
};
