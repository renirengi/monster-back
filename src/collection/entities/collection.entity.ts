import { Doll } from '../../doll/entities';
import { User } from '../../user/entities/index';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Collection extends BaseEntity {
  constructor(name: string) {
    super();
    this.name = name;
  }
  @PrimaryGeneratedColumn({})
  id: number;

  @Column({
    type: 'varchar',
    length: 5000,
    update: true,
    insert: true,
  })
  name: string;

  @ManyToOne(() => User, (user) => user.collections)
  user: User;

  @ManyToMany(() => Doll)
  @JoinTable()
  dolls: Doll[];
}