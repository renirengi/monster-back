import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Doll extends BaseEntity {
  constructor(
    character: string | string[],
    description: string,
    galleryImagesLinks: string[],
    gender: string[],
    modelNumber: string,
    series: string,
    type: string,
    year: string,
    exclusive: string[],
    reissue: boolean,
    video: string,
  ) {
    super();
    this.character = character;
    this.description = description;
    this.galleryImagesLinks = galleryImagesLinks;
    this.gender = gender;
    this.modelNumber = modelNumber;
    this.series = series;
    this.year = year;
    this.type = type;
    this.exclusive = exclusive;
    this.reissue = reissue;
    this.video = video;
  }
  @PrimaryGeneratedColumn({})
  id: number;
  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
    array: true,
    nullable: true,
  })
  character: string[] | string;

  @Column({
    type: 'varchar',
    length: 5000,
    unique: true,
    update: false,
    insert: true,
    array: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 1000,
    unique: true,
    update: true,
    insert: true,
    array: true,
  })
  galleryImagesLinks: string[];

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
    array: true,
    nullable: true,
  })
  gender: string[];

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
    array: false,
  })
  modelNumber: string;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
    array: false,
    nullable: true,
  })
  series: string;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
    array: false,
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
    array: false,
  })
  year: string;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
    array: true,
    nullable: true,
  })
  exclusive: string[];

  @Column({
    type: 'boolean',
    unique: true,
    update: true,
    insert: true,
    nullable: true,
  })
  reissue: boolean;

  @Column({
    type: 'varchar',
    length: 200,
    unique: true,
    update: true,
    insert: true,
    array: false,
    nullable: true,
  })
  video: string;
}
