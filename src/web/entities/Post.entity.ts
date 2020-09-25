import { Column, Entity } from 'typeorm';
import { BaseEntity } from './Base.entity';

@Entity()
export class Post extends BaseEntity {
  @Column()
  public title!: string;

  @Column()
  public content!: string;
}
