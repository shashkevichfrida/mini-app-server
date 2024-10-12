
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    money: number

    @ApiProperty()
    image: string

}