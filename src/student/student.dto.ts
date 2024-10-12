
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
    sport: string

    @ApiProperty()
    club: string

    @ApiProperty()
    mer: string

    @ApiProperty()
    merCategories: string

    @ApiProperty()
    money: number
}