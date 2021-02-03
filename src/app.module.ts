import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [QuestModule, UserModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
