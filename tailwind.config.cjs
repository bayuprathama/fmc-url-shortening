/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(var(--cyan))',
        'dark-violet': 'hsl(var(--dark-violet))',
        red: 'hsl(var(--red))',
        'neutral-gray': 'hsl(var(--neutral-gray))',
        'grayish-violet': 'hsl(var(--grayish-violet))',
        'very-dark-blue': 'hsl(var(--very-dark-blue))',
        'very-dark-violet': 'hsl(var(--very-dark-violet))',
      },
      fontSize: {
        semixl: '1.125rem',
      },
      fontFamily: {
        poppins: 'Poppins, sans',
      },
      backgroundImage: {
        'menu-open': "url('/images/menu-ham.svg')",
        'menu-close': "url('/images/menu-x.svg')",
        'brand-recognition': "url('/images/icon-brand-recognition.svg')",
        'detailed-records': "url('/images/icon-detailed-records.svg')",
        'fully-customizable': "url('/images/icon-fully-customizable.svg')",
        'boost-desktop': "url('/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('/images/bg-boost-mobile.svg')",
        'shorten-desktop': "url('/images/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('/images/bg-shorten-mobile.svg')",
        illustration: "url('/images/illustration-working.svg')",
      },
      maxWidth: {
        1110: '1110px',
      },
    },
  },
  plugins: [],
}
