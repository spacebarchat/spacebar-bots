import { Shard } from "./Shard";
import { Collection, ShardingManager, ShardingManagerOptions } from "discord.js";
import { Credentials } from "./config";

export interface ClientManagerOptions {
	file: string;
	applications: Credentials[];
	sharding?: ShardingManagerOptions;
}

export class ClientManager extends ShardingManager {
	// @ts-ignore
	public shards!: Collection<number, Shard>;

	constructor(public options: ClientManagerOptions) {
		super(options.file, options.sharding);
	}

	// @ts-ignore
	createShard(options: { id?: number; token: string; endpoint: string }): Shard {
		if (!options.id) options.id = this.shards.size; // @ts-ignore
		const shard = new Shard({ manager: this as unknown as ShardingManager, ...options });
		this.shards.set(options.id, shard);
		this.emit("shardCreate", shard);
		return shard;
	}

	// @ts-ignore
	async spawn() {
		console.log(`[Manager] spawning ${this.options.applications.length} clients`);
		await Promise.all(this.options.applications.map((x) => this.createShard(x).spawn()));
		return this.shards;
	}
}
