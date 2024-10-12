import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {StudentService} from "./student/student.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const studentService = new StudentService('/Users/jovialgang/hackathon/mini-app-server/users.db');

}
bootstrap();
