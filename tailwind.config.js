/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["**/*.{html,js}"],
  theme: {
    extend: {},

  },
  plugins: [],
  layers: {
    components: {
      base: [],
      components: ['nav-after', 'card'], // 컴포넌트 클래스 정의
      utilities: [],
    },
  },
}

  