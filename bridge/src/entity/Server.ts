import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Server extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	instanzOne_GuildID: number;

	@Column()
	instanzTwo_GuildID: number;

	@Column()
	isActive: boolean;

	@Column()
	instanzID1: number;

	@Column()
	instanzID2: number;
}
