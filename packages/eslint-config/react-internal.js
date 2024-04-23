const { resolve } = require("node:path");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
const base = require("./base");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...base,
  extends: [
    ...base.extends,
    "universe/native",
  ],
  env: {
    node:false,
    browser: true,
  },
};
