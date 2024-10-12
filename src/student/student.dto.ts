
import { ApiProperty } from '@nestjs/swagger';
export class StudentDto {

    @ApiProperty()
    id: string;

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
    event: string

    @ApiProperty()
    money: number
}