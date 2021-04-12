module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    rules: {
        'generator-star-spacing': 'off',
        'no-tabs': 0,
        'quotes': [
          2,
          'single',
          {
            'avoidEscape': true,
            'allowTemplateLiterals': true
          }
        ],
        'semi': [
          2,
          'never',
          {
            'beforeStatementContinuationChars': 'never'
          }
        ],
        'no-delete-var': 2,
        'prefer-const': [
          2,
          {
            'ignoreReadBeforeAssign': false
          }
        ]
      },
  }