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
import { EventService } from './event.service';
import { EventDto } from './event.dto';

@ApiTags('event')
@Controller('event')
export class EventController {
  constructor(
    private eventService: EventService,
  ) {}

  // @Post('createEvent')
  // @ApiCreatedResponse({ type: EventDto })
  // async create(@Body() data: EventDto, @Req() req) {
  //   const event = await this.eventService.create(data);
  //
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'Event found successfully',
  //     event
  //   };
  // }

  // @Delete('delete/:id')
  // async delete(@Param('id') id: number) {
  //   await this.eventService.delete(id);
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'Event deleted successfully',
  //   };
  // }




  @Post('categories/:category')
  async getByCategory(@Param('category') category: string) {
    const data = await this.eventService.getByCategory(category);
    return {
      statusCode: HttpStatus.OK,
      message: 'Events found successfully',
      data,
    };
  }

  @Post('all')
  async getAll() {
    const data = await this.eventService.getAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Events found successfully',
      data,
    };
  }

  // @Patch('update/:id')
  // async update(@Param('id') id: number, @Body() data: Partial<EventDto>) {
  //   await this.eventService.update(id, data);
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'Event updated successfully',
  //   };
  // }

  @Get(':id')
  async getById(@Param('id') id: number) {
    const data = await this.eventService.getById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Events found successfully',
      data,
    };
  }
}