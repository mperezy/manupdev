import js from '@eslint/js';
import globals from 'globals';
import nextPlugin from '@next/eslint-plugin-next';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tsEslint.configs.recommended,
      nextPlugin.flatConfig.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    ignores: ['**/*.css'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true },
      ],
      'linebreak-style': ['error', 'unix'],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      semi: ['error', 'always'],
      eqeqeq: ['error', 'always'],

      'max-len': [
        'error',
        {
          code: 80,
          ignoreComments: true,
        },
      ],

      'no-console': 'error',

      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: true,
        },
      ],

      'eol-last': ['error', 'always'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
    },
  }
);
