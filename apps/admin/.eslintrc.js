module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
