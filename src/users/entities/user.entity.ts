import { Address } from "src/adresses/entities/adress.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;
}
