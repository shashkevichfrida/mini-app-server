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
  constructor(private studentService: StudentService) {}

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

  @Get('getStudentRateByCourse')
  async getStudentsForRate(
    @Param('course') course: string,
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

  @Post('replenishmentBalance')
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

  @Post('withdrawBalance')
  async withdrawBalance(
    @Param('id') id: number,
    @Param('money') money: number,
  ) {
    if (await this.studentService.withdrawBalance(id, money)) {
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
}
