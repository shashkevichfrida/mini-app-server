
import { ApiProperty } from '@nestjs/swagger';
export class EventDto {

    @ApiProperty()
    id: number;

    @ApiProperty()
    event: string;

    @ApiProperty()
    category: string;

}