import { buildDatabase } from "./db_build.js";

buildDatabase((err, res) => {
  if (err) {
    return process.stdout.write("Build failed");
  }
  process.stdout.write("Build succeeded");
  console.info("Build succeeded");
});
