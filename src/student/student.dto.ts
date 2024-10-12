import { ApiProperty } from '@nestjs/swagger';

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
  productsId: number[];

  @ApiProperty()
  eventsId: number[];

  @ApiProperty()
  money: number;
}
