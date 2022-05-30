const path = require("path");
const solc = require("solc");
const fsExtra = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fsExtra.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fsExtra.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;

fsExtra.ensureDirSync(buildPath);

for (let contract in output) {
  fsExtra.outputJsonSync(
    path.resolve(buildPath, `${contract.replace(":", "")}.json`),
    output[contract]
  );
}
