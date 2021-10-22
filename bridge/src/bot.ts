const {
	AkairoClient,
	CommandHandler,
	ListenerHandler,
	Command,
} = require("discord-akairo");
const { Intents } = require("discord.js");
import { createConnection } from "typeorm";
import { Channel } from "./entity/Channel";
import { Message } from "./entity/Message";
import { Role } from "./entity/Role";
import { Server } from "./entity/Server";
import { join } from "path";

class MyClient extends AkairoClient {
	constructor() {
		super(
			{
				ownerID: [],
			},
			{
				disableMentions: "everyone",
				intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
				http: {
					api: process.env.endpoint,
					cdn: process.env.endpoint,
				},
			}
		);

		this.commandHandler = new CommandHandler(this, {
			handleEdits: true,
			directory: __dirname + "/commands/",
			prefix: "?", // or ['?', '!']
			allowMention: true,
			classToHandle: Command,
			commandUtil: true,
			argumentDefaults: {
				reply: true,
				stopWord: "done",
				prompt: {
					timeout: "Time ran out, command has been cancelled.",
					ended: "Too many retries, command has been cancelled.",
					cancel: "Command has been cancelled.",
					retries: 4,
					time: 30000,
				},
			},
		});
		MyClient.commandhandler = this.commandHandler;
		this.listenerHandler = new ListenerHandler(this, {
			directory: __dirname + "/listeners/",
		});
		this.commandHandler.loadAll();
		this.commandHandler.useListenerHandler(this.listenerHandler);
		this.listenerHandler.loadAll();
	}
}

const client = new MyClient();
client.login(process.env.token).then((x: any) => {
	console.log(x);
	createConnection().then(async (connection) => {});
});
console.log(client.user);
