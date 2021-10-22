import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Role {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	instanzOne_GuildID: number;
	@Column()
	instanzOne_RoleID: number;

	@Column()
	instanzTwo_GuildID: number;
	@Column()
	instanzTwo_RoleID: number;

	@Column()
	Deleted: boolean;

	@Column()
	instanzID: number;
}
