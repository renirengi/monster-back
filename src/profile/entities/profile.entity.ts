import { User } from 'src/user/entities';
import { v4 as uuidv4 } from 'uuid';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Profile extends BaseEntity {
  constructor(email: string, birthDate: Date, id: string = uuidv4()) {
    super();
    this.email = email;
    this.birthDate = birthDate;
    this.id = id;
  }
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({
    type: 'varchar',
    length: 5000,
    unique: true,
    update: true,
    insert: true,
  })
  email: string;

  @Column({
    type: 'date',
  })
  birthDate: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
