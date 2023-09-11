import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

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
}
