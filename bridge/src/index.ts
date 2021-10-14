import path from "path";
import { ClientManager } from "./ClientManager";

import config from "./config";

const manager = new ClientManager({ file: path.join(__dirname, "bot.js"), applications: config.applications });

manager.on("shardCreate", (shard) => console.log(`Launched shard ${shard.id}`));

manager.spawn();
