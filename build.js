const ESBuild = require("esbuild");
const path = require("path");
const { rm } = require("fs/promises");

const resolveSrc = (...args) => path.resolve(__dirname, "src", ...args);
const resolveDist = (...args) => path.resolve(__dirname, "dist", ...args);

/**
 * Clear dist folder
 * @type {import("esbuild").Plugin}
 * */
const CleanPlugin = {
  name: "CleanPlugin",
  setup(build) {
    build.onStart(async () => {
      try {
        await rm(build.initialOptions.outdir, { recursive: true });
      } catch (e) {
        console.error("CleanPlugin: cannot clear dir");
      }
    });
  },
};

ESBuild.build({
  tsconfig: "./tsconfig.json",
  platform: "node",
  format: "cjs",
  charset: "utf8",

  allowOverwrite: true,
  sourcemap: true,
  minify: true,
  bundle: true,

  outdir: resolveDist(),
  sourceRoot: resolveSrc(),
  entryNames: "index",
  entryPoints: [resolveSrc("index.ts")],

  plugins: [CleanPlugin],
});
