module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended', 'eslint:recommended'],
  rules: {
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
