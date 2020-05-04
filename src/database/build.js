const runDbBuild = require("./db_build.js");

runDbBuild((err, res) => {
  if (err) {
    return process.stdout.write("Build failed");
  }
  process.stdout.write("Build succeeded");
  console.info("Build succeeded");
});
