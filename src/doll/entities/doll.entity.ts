import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Doll extends BaseEntity {
  constructor(
    description: string,
    galleryImagesLinks: string[],
    modelNumber: string,
    series: string,
    year: string,
    type: string,
    character: string[],
    gender: string[],
    exclusive: string,
    reissue: boolean,
    video: string,
  ) {
    super();
    this.description = description;
    this.galleryImagesLinks = galleryImagesLinks;
    this.modelNumber = modelNumber;
    this.series = series;
    this.year = year;
    this.type = type;
    this.character = character;
    this.gender = gender;
    this.exclusive = exclusive;
    this.reissue = reissue;
    this.video = video;
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
  })
  modelNumber: string;

  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
    //nullable: true,
  })
  series: string;

  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
  })
  year: string;

  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
    ///array: true,
    nullable: true,
  })
  character: string[];

  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
    //array: true,
    nullable: true,
  })
  gender: string[];

  @Column({
    type: 'varchar',
    length: 200,
    update: true,
    insert: true,
    nullable: true,
  })
  exclusive: string;

  @Column({
    type: 'boolean',
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
    nullable: true,
  })
  video: string;
}
