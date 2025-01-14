module.exports = {
    extends: ['next', 'next/core-web-vitals'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
    },
};
