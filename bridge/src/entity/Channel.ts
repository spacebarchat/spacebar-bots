import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Channel {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	instanzOne_GuildID: number;
	@Column()
	instanzOne_ChannelID: number;

	@Column()
	instanzTwo_GuildID: number;
	@Column()
	instanzTwo_ChannelID: number;

	@Column()
	Deleted: boolean;

	@Column()
	instanzID: number;
}
