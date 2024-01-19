import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('character')
@ApiTags('character')
export class CharacterController {}
