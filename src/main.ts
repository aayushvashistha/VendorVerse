import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
var path = require ('path');

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable view engine debugging
  app.engine('ejs', require('ejs').__express);
  app.set('view engine', 'ejs');
  app.setBaseViewsDir(join(__dirname, '..', '/src/view'));

  await app.listen(3000);
}

bootstrap();
