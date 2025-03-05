import styleConfig from "./rules/style.mjs";
import restrictConfig from "./rules/restrict.mjs";
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
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
    ignores: ["**/node_modules/**", "**/dist/**", "**/*yarn/**", "**/build/**"],
  },
  styleConfig,
  ...restrictConfig,
];
export default config;
