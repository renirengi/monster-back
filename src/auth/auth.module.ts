import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { RedisModule } from 'src/redis/redis.module';
import { AuthRedisStorage } from './auth.redis.storage';

@Module({
  imports: [
    UserModule,
    RedisModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1000s' },
    }),
  ],
  providers: [AuthService, AuthRedisStorage],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
