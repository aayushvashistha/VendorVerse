import { Controller, Get, HttpCode, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(@Req() request: Request): string {
    console.log(request.headers);
    
    return this.appService.getHello();
  }
}
