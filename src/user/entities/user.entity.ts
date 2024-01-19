import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Collection } from '../../collection/entities/index';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User extends BaseEntity {
  constructor(username: string, password: string, id: string = uuidv4()) {
    super();
    this.username = username;
    this.password = password;
    this.id = id;
  }
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

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
