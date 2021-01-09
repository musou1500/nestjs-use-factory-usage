import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app2')
export class App2Controller {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
