module.exports = {
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './styles/**/*.css', // Add this if ProjectSection.css uses Tailwind classes
    ],
    theme: {
      extend: {
        colors: {
            'primary-color': 'var(--primary-color)',
            'primary-color-dark': 'var(--primary-color-dark)',
          }
      },
    },
    plugins: [],
  };