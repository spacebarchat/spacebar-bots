import { Listener } from "discord-akairo";
import { Message, WebhookClient } from "discord.js";
//import fetch from "node-fetch";

class ReadyListener extends Listener {
	constructor() {
		super("messageCreate", {
			emitter: "client",
			event: "messageCreate",
		});
	}

	exec(message: Message) {
		console.log(message.content);
	}
}

module.exports = ReadyListener;
