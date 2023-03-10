/** @format */

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint', 'prettier'], //定义了该eslint文件所依赖的插件
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 1, //  eslint-plugin-prettier 使用prettier作为eslint规则
    semi: ['error', 'never'], // 禁止使用分号
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  parserOptions: {
    sourceType: 'module',
  },
}
