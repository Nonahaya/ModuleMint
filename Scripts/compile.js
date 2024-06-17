const path = require("path")
const esbuild = require("esbuild")
esbuild.buildSync({
    entryPoints:[path.join(__dirname,"../main.ts")],
    minify:true,
    platform:"node",
    bundle:true,
    outfile:path.join(__dirname,"../dist/core.js"),
    
})