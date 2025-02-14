module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 4px var(--tw-shadow-color)',
        'lg': '4px 4px 8px var(--tw-shadow-color)',
        'sm': '1px 1px 2px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],
}
