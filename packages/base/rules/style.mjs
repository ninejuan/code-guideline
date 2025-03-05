import stylistic from "@stylistic/eslint-plugin";

/**
 * @type {import('eslint').Linter.Config}
 */
const styleConfig = {
  plugins: {
    "@stylistic": stylistic,
  },
  rules: {
    "@stylistic/array-bracket-newline": [
      "error",
      { multiline: true, minItems: 4 },
    ],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "array-element-newline": [
      "error",
      {
        ArrayExpression: "consistent",
        ArrayPattern: { minItems: 4 },
      },
    ],
    "@stylistic/arrow-parens": ["error", "as-needed"],
    "@stylistic/arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "@stylistic/block-spacing": ["error", "always"],
    "@stylistic/brace-style": [
      "error",
      "stroustrup",
      { allowSingleLine: true },
    ],
    "@stylistic/comma-dangle": ["error", "always-multiline"],
    "@stylistic/comma-spacing": ["error", { before: false, after: true }],
    "@stylistic/comma-style": ["error", "last"],
    "@stylistic/computed-property-spacing": [
      "error",
      "never",
      { enforceForClassMembers: true },
    ],
    "@stylistic/curly-newline": ["error", { minElements: 2 }],
    "@stylistic/dot-location": ["error", "property"],
    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/function-call-argument-newline": ["error", "consistent"],
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/function-paren-newline": ["error", { minItems: 4 }],
    "@stylistic/generator-star-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
    "@stylistic/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
      },
    ],
    "@stylistic/indent-binary-ops": ["error", 2],
  },
};

export default styleConfig;
