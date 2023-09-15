import { User } from 'src/user/entities';
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
  constructor(email: string, birthDate: Date) {
    super();
    this.email = email;
    this.birthDate = birthDate;
  }
  @PrimaryGeneratedColumn({})
  id: number;

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
    length: 1000,
    unique: true,
    update: true,
    insert: true,
  })
  birthDate: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
