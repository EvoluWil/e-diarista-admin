import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as passport from 'passport';
import * as methodOverride from 'method-override';
import * as exphbs from 'express-handlebars';
import * as session from 'express-session';
import flash = require('connect-flash');

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main' }));

  app.use(methodOverride('_method'));

  app.use(
    session({
      secret: 'e-diarista',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());

  await app.listen(3000);
}
bootstrap();
