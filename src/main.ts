import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { createConnection } from "typeorm";
import { User } from './user/entities/user.entity';
import { Quest } from './quest/entities/quest.entity';
import { Location } from './location/entities/location.entity';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

createConnection().then(connection => {
  // here you can start to work with your entities
}).catch(error => console.log(error));
