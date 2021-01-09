import { Injectable, Provider, Scope } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private message: string, private cnt: number) {}
  getHello(): string {
    return JSON.stringify({ message: this.message, cnt: this.cnt });
  }
}

let instCount = 0;

export const MESSAGE_TOKEN = 'MESSAGE_TOKEN';

export const APP_SERVICE: Provider = {
  provide: AppService,
  useFactory: (message: string) => new AppService(message, instCount++),
  inject: [MESSAGE_TOKEN],
  // scope: Scope.TRANSIENT,
};
