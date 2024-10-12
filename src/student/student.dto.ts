import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from '../product/product.dto';
import { EventDto } from '../event/event.dto';
export class StudentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  faculty: string;

  @ApiProperty()
  level: string;

  @ApiProperty()
  course: number;

  @ApiProperty()
  products: ProductDto[];

  @ApiProperty()
  events: EventDto[];

  @ApiProperty()
  money: number;
}
