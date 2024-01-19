import { Doll } from '../../doll/entities';
import { User } from '../../user/entities/index';
import { v4 as uuidv4 } from 'uuid';
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
  constructor(name: string, id: string = uuidv4()) {
    super();
    this.name = name;
    this.id = id;
  }
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

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
