import stylistic from "@stylistic/eslint-plugin";

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
const config = [
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/jsx-child-element-spacing": "off",
      "@stylistic/jsx-closing-bracket-location": [
        1,
        { selfClosing: "props-aligned", nonEmpty: "after-props" },
      ],
      "@stylistic/jsx-closing-bracket-location": [
        1,
        { selfClosing: "after-props", nonEmpty: "line-aligned" },
      ],
      "@stylistic/jsx/jsx-closing-tag-location": ["error", "line-aligned"],
      "@stylistic/jsx-curly-brace-presence": [
        "error",
        {
          props: "always",
          children: "never",
          propElementValues: "always",
        },
      ],
      "@stylistic/jsx-curly-newline": ["error", "consistent"],
      "@stylistic/jsx-curly-spacing": [
        "error",
        "never",
        { allowMultiline: false },
      ],
      "@stylistic/jsx-equals-spacing": ["error", "never"],
      "@stylistic/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "@stylistic/jsx-function-call-newline": ["error", "multiline"],
      "@stylistic/jsx-indent": ["error", 2],
      "@stylistic/jsx-indent-props": ["error", 2],
      "@stylistic/jsx-max-props-per-line": ["error"],
      "@stylistic/jsx-newline": [
        "error",
        { prevent: true, allowMultilines: true },
      ],
      "@stylistic/jsx-one-expression-per-line": [
        "error",
        {
          allow: "single-child",
        },
      ],
      "@stylistic/jsx-pascal-case": [
        "error",
        {
          allowAllCaps: true,
          allowNamespace: true,
        },
      ],
      "@stylistic/jsx-props-no-multi-spaces": "error",
      "@stylistic/jsx-quotes": ["error", "prefer-single"],
      "@stylistic/jsx-self-closing-comp": "error",
      "@stylistic/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandLast: true,
          multiline: "last",
          reservedFirst: true,
        },
      ],
      "@stylistic/jsx-tag-spacing": [
        "error",
        { beforeClosing: "proportional-always" },
      ],
      "@stylistic/jsx-wrap-multilines": [
        "error",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
          propertyValue: "parens",
        },
      ],
    },
  },
];

export default config;
