import { Doll } from 'src/doll/entities';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Character extends BaseEntity {
  constructor(
    character: string,
    gender: string,
    art: string,
    icon: string,
    plot: string,
  ) {
    super();
    this.character = character;
    this.gender = gender;
    this.art = art;
    this.icon = icon;
    this.plot = plot;
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
  character: string;

  @Column({
    type: 'varchar',
    length: 1000,
    unique: true,
    update: true,
    insert: true,
  })
  gender: string;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
  })
  art: string;

  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
  })
  icon: string;

  @Column({
    type: 'varchar',
    length: 5000,
    update: true,
    insert: true,
  })
  plot: string;

  @ManyToMany(() => Doll)
  @JoinTable()
  dolls: Doll[];
}
