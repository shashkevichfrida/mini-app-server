import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { ProductService } from '../product/product.service';
import { ProductModule } from '../product/product.module';
import { EventModule } from '../event/event.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), ProductModule, EventModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
