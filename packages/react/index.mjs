import tsParser from "@typescript-eslint/parser";
import baseConfig from "@ninejuan/code-guideline-base";
import reactConfig from "./rules/style.mjs";

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
const config = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    files: ["**/*.{jsx,tsx}"],
    settings: { react: { version: "detect" } },
    ignores: ["**/.next/**", "**/next-env.d.ts"],
  },
  ...baseConfig,
  ...reactConfig,
];

export default config;
