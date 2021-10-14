import { Shard as DJSShard, ShardingManager } from "discord.js";
import { ClientManager } from "./ClientManager";

// @ts-ignore
export class Shard extends DJSShard {
	// @ts-ignore
	manager!: ClientManager;

	constructor(opts: { manager: ClientManager; id: number; token: string; endpoint: string }) {
		// @ts-ignore
		super(opts.manager, opts.id);

		this.env = {
			...(this.env as any),
			token: opts.token,
			endpoint: opts.endpoint,
			SHARD_COUNT: this.manager.options.applications.length,
		};
	}
}
