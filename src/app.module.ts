import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_SERVICE, MESSAGE_TOKEN } from './app.service';
import { App2Controller } from './app2.controller';

@Module({
  imports: [],
  controllers: [AppController, App2Controller],
  providers: [APP_SERVICE, { provide: MESSAGE_TOKEN, useValue: 'hello!!' }],
})
export class AppModule {}
