module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true,
    commonjs: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-console": "error",
  },
};
