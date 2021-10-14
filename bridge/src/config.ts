import writeFileAtomic from "write-file-atomic";
import fs from "fs";
import path from "path";
const configPath = path.join(__dirname, "..", "config.json");

export interface Config {
	applications: Credentials[];
	bridges: Bridge[];
}

export interface Bridge {
	from_guild: string;
	to_guild: string;
	excluded: {
		messages: boolean;
		users: string[];
		channels: string[] | boolean;
		emojis: string[] | boolean;
	};
	// TODO: additional bridging options
}

export interface Credentials {
	endpoint: string;
	token: string;
}

var config: Config = {
	applications: [],
	bridges: [],
};

try {
	config = JSON.parse(fs.readFileSync(configPath, { encoding: "utf8" }));
} catch (error) {
	console.error(`Please create a config file`);
	process.exit();
}

export default config;

export function save() {
	return writeFileAtomic(configPath, JSON.stringify(config, null, "\t"), { encoding: "utf8" });
}
