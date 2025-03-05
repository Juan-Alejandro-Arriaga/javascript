import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,

  //Regla de salto de línea al final de cada archivo
  {
    rules: {
      'eol-last': ['error', 'always'] 
    }
  }
];



