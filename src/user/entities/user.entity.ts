import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Collection } from '../../collection/entities/index';

@Entity()
export class User extends BaseEntity {
  constructor(username: string, password: string) {
    super();
    this.username = username;
    this.password = password;
  }
  @PrimaryGeneratedColumn({})
  id: number;
  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
  })
  username: string;
  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
  })
  password: string;

  @OneToMany(() => Collection, (collection) => collection.user)
  collections: Collection[];
}
