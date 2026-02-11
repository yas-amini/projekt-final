import js from "@eslint/js"; // Core ESLint rules for JS
import globals from "globals"; // Predefined global variables (like browser or node)
import reactHooks from "eslint-plugin-react-hooks"; // Lint rules for React Hooks
import reactRefresh from "eslint-plugin-react-refresh"; // Vite + React Fast Refresh rules
import { defineConfig, globalIgnores } from "eslint/config"; // ESLint config helpers

// Export ESLint configuration
export default defineConfig([
  // Ignore dist folder globally
  globalIgnores(["dist"]),

  {
    // Target JS and JSX files
    files: ["**/*.{js,jsx}"],

    // Base rules to extend
    extends: [
      js.configs.recommended, // Recommended JS rules
      reactHooks.configs.flat.recommended, // Recommended React Hooks rules
      reactRefresh.configs.vite, // Vite + React refresh rules
    ],

    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020 features
      globals: globals.browser, // Browser globals (window, document, etc.)
      parserOptions: {
        ecmaVersion: "latest", // Allow latest JS syntax
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: "module", // Use ES modules (import/export)
      },
    },

    rules: {
      // Error for unused vars, but ignore vars starting with uppercase or underscore
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
]);
