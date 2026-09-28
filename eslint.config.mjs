import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    extends: [
      'plugin:react/recommended',
    ],
    rules: {
      // tus reglas personalizadas aquí
    },
  },
];
