import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly dolls: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }
  createDoll(doll: any) {
    this.dolls.push(doll);
    return `My name is #${doll}`;
  }
}
