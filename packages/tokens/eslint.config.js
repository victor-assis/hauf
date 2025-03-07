
import baseConfig from '../../eslint.config.mjs'
import jsoncParser from 'jsonc-eslint-parser'


export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncParser,
    },
  },
];
