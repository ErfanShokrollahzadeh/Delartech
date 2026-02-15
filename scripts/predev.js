const fs = require("fs");
const path = require("path");

const major = Number(process.versions.node.split(".")[0]);
if (major >= 23) {
  console.warn(
    `Warning: Node.js ${process.versions.node} may be unstable with this Next.js version. Recommended: Node 20 LTS.`,
  );
}

const webpackCacheDir = path.join(__dirname, "..", ".next", "cache", "webpack");

try {
  if (fs.existsSync(webpackCacheDir)) {
    fs.rmSync(webpackCacheDir, { recursive: true, force: true });
    console.log("Cleared stale webpack cache.");
  }
} catch (error) {
  console.warn("Unable to clear webpack cache:", error.message);
}
