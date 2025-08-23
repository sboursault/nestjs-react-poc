import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scenario } from './scenario.entity';
import { ScenarioModule } from './scenario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Scenario],
      synchronize: true,
    }),
    ScenarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
