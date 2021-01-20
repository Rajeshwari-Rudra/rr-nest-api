import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Rajeshwari Rudravaram here.';
  }
  getAbout(): string {
    return 'You have visited the NestJS app created by Rajeshwari Rudravaram';
  }
}
