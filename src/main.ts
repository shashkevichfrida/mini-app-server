import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {StudentService} from "./student/student.service";
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const config = new DocumentBuilder()
    .setTitle('Student')
    .setDescription('The student API description')
    .setVersion('1.0')
    .addTag('student')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
bootstrap();
