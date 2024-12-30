const newman = require("newman");

const runNewman = () => {
  console.log("[RUNNING] Running Newman Script");

  return newman.run({
    collection: "collections/FikriOmar.postman_collection.json",
    environment: "environtments/FikriOmar-env.json",
    reporters: ["cli", "htmlextra"],
  });
};

module.exports = runNewman;
