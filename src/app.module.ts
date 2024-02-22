import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './modules/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PersonModule, 
    TypeOrmModule.forRoot({
      "database": "./db.sql",
      "type": "sqlite",
      "synchronize": true,
      "entities": ["dist/**/*.model.js"]
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
