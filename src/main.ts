import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Student')
    .setDescription('The student API description')
    .setVersion('1.0')
    .addTag('student')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // app.enableCors();
  app.enableCors({
    origin: '*', // Разрешить запросы с любых источников
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные HTTP-методы
    credentials: true, // Разрешить отправку куки
  });

  await app.listen(3001);
}
bootstrap();
