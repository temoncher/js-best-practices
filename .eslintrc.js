/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  extends: ['temoncher/javascript'],
  rules: {
    'array-element-newline': 0,
    'no-console': 1,
  },
};
