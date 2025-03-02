import styleConfig from "./rules/style.mjs";
import tsParser from "@typescript-eslint/parser";

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
    ignores: ["**/node_modules/**", "**/dist/**", "**/*yarn/**", "**/build/**"],
  },
  styleConfig,
];
export default config;
