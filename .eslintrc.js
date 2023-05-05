module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'object-curly-spacing': 0,
    'no-control-regex': 0,
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
  },
};
