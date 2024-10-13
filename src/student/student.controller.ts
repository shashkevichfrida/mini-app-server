import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Post, Req } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './student.dto';
import { EventService } from '../event/event.service';
import { ProductService } from '../product/product.service';

@ApiTags('student')
@Controller('student')
export class StudentController {
  constructor(
    private studentService: StudentService,
    private eventService: EventService,
    private productService: ProductService,
  ) {}

  @Get('getOne')
  @ApiCreatedResponse({ type: StudentDto })
  async getOne(@Req() req) {
    const student = await this.studentService.getOne();

    return {
      statusCode: HttpStatus.OK,
      message: 'Student found successfully',
      student,
    };
  }

  @Get('getStudentRateByCourse/:course/:level/:countOfFriends')
  async getStudentsForRate(
    @Param('course') course: number,
    @Param('level') level: string,
    @Param('countOfFriends') getStudentsForRate: number,
  ) {
    const students = await this.studentService.getStudentsForRate(
      course,
      level,
      getStudentsForRate,
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Students found successfully',
      students,
    };
  }

  @Get('getStudentMoney/:id')
  async getStudentMoney(@Param('id') id: number) {
    const money = await this.studentService.getStudentMoney(id);

    return {
      statusCode: HttpStatus.OK,
      message: 'Money found successfully',
      money,
    };
  }

  @Post('replenishmentBalance/:id/:money')
  async replenishmentBalance(
    @Param('id') id: number,
    @Param('money') money: number,
  ) {
    if (await this.studentService.replenishmentBalance(id, money)) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Money replenishment successfully',
      };
    }
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Money not replenishment',
    };
  }

  @Post('withdrawBalance/:id/:money')
  async withdrawBalance(
    @Param('id') id: number,
    @Param('money') money: number,
  ) {
    if (await this.studentService.withdrawBalance(id, Number(money))) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Money withdraw successfully',
      };
    }
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Money not withdraw',
    };
  }

  @Post('addEvent/:id/:id')
  async addEvent(@Param('id') id: number, @Param('id') idUser: number) {
    const event = await this.eventService.getById(id);
    await this.studentService.addEvent(event, idUser);
  }

  @Post('addProduct/:id/:id')
  async addProduct(@Param('id') id: number, @Param('id') idUser: number) {
    const product = await this.productService.getById(id);
    this.studentService.addProduct(product, idUser);
  }
}
