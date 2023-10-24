import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doll } from './doll/entities';
import { DollModule } from './doll/doll.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities';
import { CollectionModule } from './collection/collection.module';
import { Collection } from './collection/entities';
import { AuthModule } from './auth/auth.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Fcnjhbj2006*',
      database: 'dolls',
      entities: [Doll, User, Profile, Collection],
      synchronize: true,
      autoLoadEntities: true,
      migrations: ['dist/src/db/migrations/*.js'],
      // cli: {
      //   migrationsDir: 'src/db/migrations',
      // },
    }),
    DollModule,
    UserModule,
    ProfileModule,
    CollectionModule,
    AuthModule,
    CharacterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
