import {Entity, Column, PrimaryGeneratedColumn, getRepository} from "typeorm";
import {BaseEntity} from './Base.entity'
import {validate, validateOrReject, Contains, IsInt, Length, IsEmail, IsDate, Min, Max} from "class-validator";


@Entity()
export class User extends BaseEntity {
    

    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar",{length: 64, nullable: true})
    first?: string;

    @Column("varchar",{length: 64, nullable: true})
    last?: string;

    @Column("varchar",{length: 64, nullable: true})
    @IsEmail()
    email?: string;

    @Column("varchar",{length: 64, nullable: true})
    hash?: string;

    constructor(first?: string, last?: string, email?: string, hash?: string) {
        super()
        this.first = first;
        this.last = last;
        this.email = email;
        this.hash = hash;
    }
}