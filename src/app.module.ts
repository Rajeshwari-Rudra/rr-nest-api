import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { UserModule } from './user/user.module';
import { LocationModule } from './location/location.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { User } from './user/entities/user.entity';
import { Location } from './location/entities/location.entity';
import { Connection } from 'typeorm';


@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3000,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User,Location],
      synchronize: true,
    }),QuestModule, UserModule, LocationModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
