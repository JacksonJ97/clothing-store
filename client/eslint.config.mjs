import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTS from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const config = defineConfig([
  ...nextVitals,
  ...nextTS,
  prettier,
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default config;
