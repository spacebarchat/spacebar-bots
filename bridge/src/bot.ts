import { Client } from "discord.js";

const client = new Client({
	intents: 32767,
	http: {
		api: process.env.endpoint,
		cdn: process.env.endpoint,
	},
});

client.on("ready", () => {
	console.log(`Client ready ${client.user?.tag} on ${client.options.http?.api}`);
});
// client.on("debug", console.log);
client.on("error", console.log);

client.login(process.env.token);
