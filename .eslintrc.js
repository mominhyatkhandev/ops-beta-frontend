module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  exclude: ["./tsconfig.json"],
  extends: [
    "next/core-web-vitals",
    "standard-with-typescript",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "google",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.js", "*.tsx", ".ts"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
  ],
  parserOptions: {
    project: true,
    tsconfigRootDir: "@/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-undef": 0,
    "linebreak-style": 0,
    semi: 0,
    quotes: 0,
    "@typescript-eslint/consistent-type-definitions": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "no-explicit-any": 0,
    "no-trailing-spaces": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "require-jsdoc": 0,
    "quote-props": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "eol-last": 0,
    "no-lone-blocks": 0,
    "operator-linebreak": 0,
    indent: 0,
    "@typescript-eslint/no-explicit-any": 0,
    "spaced-comment": 0,
    "@typescript-eslint/consistent-type-imports": 0,
    "@typescript-eslint/triple-slash-reference": 0,
    "@typescript-eslint/promise-function-async": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
