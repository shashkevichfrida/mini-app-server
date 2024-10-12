import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomConfigModule } from './config.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    

    StudentModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'students.db',
      entities: [Student],
      synchronize: true,
      logging: true,
    }),
    CustomConfigModule,
  ],
  controllers: [AppController],
  providers: [

  ],
})
export class AppModule {}
