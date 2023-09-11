import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doll } from './doll/entities';
import { DollModule } from './doll/doll.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Fcnjhbj2006*',
      database: 'dolls',
      entities: [Doll, User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    DollModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
