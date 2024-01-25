import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { TokenDto } from './jwt/dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() authDto: AuthDto) {
    return this.authService.signUp(authDto.username, authDto.password);
  }

  @Post('/login')
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto.username, authDto.password);
  }

  @Post('/refresh')
  refresh(@Body() tokenDto: TokenDto) {
    return this.authService.refreshToken(tokenDto.token);
  }
}
