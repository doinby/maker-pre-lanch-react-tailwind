module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: true,
  theme: {
    fontFamily: {
      body: ['Manrope', 'sans-serif'],
    },
    fontSize: {
      h1: ['48px', {lineHeight: '56px', fontWeight: '800'}],
      h2: ['40px', {lineHeight: '55px', fontWeight: '800'}],
      h3: ['32px', {lineHeight: '44px', fontWeight: '800'}],
      h4: ['18px', {lineHeight: '25px', fontWeight: '800'}],
      body: ['15px', {lineHeight: '25px', fontWeight: '500'}],
    },
    colors: {
      primary: '#3EE9E5',
      secondary: '#093F68',
      black: '#080C20',
      white: '#FFFFFF',
      gray: '#777F98',
      error: '#FF2965',
    },

    extend: {
      backgroundImage: {
        'illustration-hero-left': "url('../images/illustration-hero-left.svg')",
        'illustration-hero-right':
          "url('../images/illustration-hero-right.svg')",
        'illustration-hero-mobile':
          "url('../images/illustration-hero-mobile.svg')",
      },
    },
  },
  plugins: [],
};
