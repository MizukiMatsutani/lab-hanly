module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 0, // console.log を置いても怒られないように
    camelcase: 0 // キャメルケースで変数書いても怒られないように
  }
}
