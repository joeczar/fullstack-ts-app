import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { BaseEntity } from './Base.entity';

//pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: true
  })
  name?: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}