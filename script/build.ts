import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["server/index.ts"],
  outfile: "dist/index.cjs",
  platform: "node",
  format: "cjs",
  bundle: true,
  external: ["compression", "express"],
  logLevel: "info",
});

console.log("Server build completed successfully!");
