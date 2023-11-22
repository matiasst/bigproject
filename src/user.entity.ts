import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;
}