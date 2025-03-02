import typescript from "@typescript-eslint/eslint-plugin";

/**
 * @type {import('eslint').Linter.Config}
 */
const tsConfig = {
  plugins: { "@typescript-eslint": typescript },
  files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
  rules: {
    "@typescript-eslint/no-explicit-any": ["off", {}],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
  },
};

export default [tsConfig];
