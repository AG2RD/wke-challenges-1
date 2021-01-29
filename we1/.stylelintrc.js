module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  formatter: 'verbose',
  plugins: ['stylelint-scss'],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep', 'host'],
      },
    ],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
  },
  syntax: 'scss',
};
