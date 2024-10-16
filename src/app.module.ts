import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomConfigModule } from './config.module';
import { Student } from './student/student.entity';
import {StudentService} from "./student/student.service";
import { Event } from './event/event.entity';
import { EventModule } from './event/event.module';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    
    StudentModule,
    EventModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'users.db',
      entities: [Student, Event, Product],
      synchronize: true,
      logging: true,
    }),
    CustomConfigModule,
  ],
  controllers: [AppController],
  providers: [
  AppService
  ],
})
export class AppModule {}
