import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './student.dto';



@ApiTags('student')
@Controller('student')
export class StudentController {
  constructor(
    private studentService: StudentService,
  ) {}

  @Post('getOne')
  @ApiCreatedResponse({ type: StudentDto })
  async getOne() {
    const student = await this.studentService.getOne();

    return {
      statusCode: HttpStatus.OK,
      message: 'Student found successfully',
      student
    };
  }

  @Post('getRandomStudents')
  async getRandomStudents() {
    
    const students = await this.studentService.getRandomStudents();

    return {
      statusCode: HttpStatus.OK,
      message: 'Students found successfully',
      students
    };
  }

  @Post('getStudentEvents')
  async getStudentEvents(@Param('id') id: number) {
    const data = await this.studentService.getStudentEvents(id);

    return {
      statusCode: HttpStatus.OK,
      message: 'Events found successfully',
      data
    };
  }

  @Post('getStudentRateByCourse')
  async getStudentRateByCourse(@Param('course') course: string, @Param('level') level: string) {
    const students = await this.studentService.getStudentRateByCourse(course, level);

    return {
      statusCode: HttpStatus.OK,
      message: 'Students found successfully',
      students
    };
  }

  @Post('getStudentMoney')
  async getStudentMoney(@Param('id') id: number) {
    const money = await this.studentService.getStudentMoney(id);

    return {
      statusCode: HttpStatus.OK,
      message: 'Money found successfully',
      money
    };
  }
}