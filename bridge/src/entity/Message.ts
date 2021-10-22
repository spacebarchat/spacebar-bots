import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Message {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	instanzOne_GuildID: number;
	@Column()
	instanzOne_MSGID: number;

	@Column()
	instanzTwo_GuildID: number;
	@Column()
	instanzTwo_MSGID: number;

	@Column()
	Deleted: boolean;

	@Column()
	instanzID: number;
}
