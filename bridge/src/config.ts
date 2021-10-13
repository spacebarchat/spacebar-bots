import writeFileAtomic from "write-file-atomic";
import fs from "fs";
import path from "path";
const configPath = path.join(__dirname, "..", "config.json");

export interface Config {
	applications: {
		endpoint: string;
	}[];
}

var config: Config = {
	applications: [],
};

try {
	config = JSON.parse(fs.readFileSync(configPath, { encoding: "utf8" }));
} catch (error) {}

export default config;

export function save() {
	return writeFileAtomic(configPath, JSON.stringify(config, null, "\t"), { encoding: "utf8" });
}
