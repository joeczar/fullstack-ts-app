import {
  BaseEntity as BE,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Entity
} from 'typeorm';

@Entity()
export class BaseEntity extends BE {
  @PrimaryGeneratedColumn()
  public id!: number;

  @CreateDateColumn()
  public created_at!: Date;
}
