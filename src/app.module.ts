import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doll } from './doll/entities';
import { DollModule } from './doll/doll.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Fcnjhbj2006*',
      database: 'dolls',
      entities: [Doll],
      // synchronize: true,
      autoLoadEntities: true,
    }),
    DollModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
