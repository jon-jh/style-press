import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      // Disable the old requirement to import React in scope
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect", // auto-detect your React version
      },
    },
  },
  pluginReact.configs.flat.recommended,
]);
