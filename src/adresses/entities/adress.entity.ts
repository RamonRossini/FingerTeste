import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cep: string;

    @Column()
    logradouro: string;

    @Column()
    numero: string;

    @Column()
    bairro: string;
    
    @Column()
    cidade: string;
    
    @Column()
    estado: string;

    @Column({nullable: true})
    complemento: string;

    @OneToOne(() => User, {onDelete: 'NO ACTION'})
    user: User;
}
