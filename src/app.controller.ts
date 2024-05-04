import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    console.log(request.headers);
    
    return this.appService.getHello();
  }

  @Get('/hello')
  getHello1(): string {
    return this.appService.getHello1();
  }
}
