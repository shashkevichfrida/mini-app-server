import {
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
  import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
  

  @ApiTags('product')
  @Controller('product')
  export class ProductController {
    constructor(
      private productService: ProductService,
    ) {}

    // @Post('create')
    // @ApiOperation({
    //     summary: 'Create event',
    //   })
    //   async create(@Body() data: ProductDto, @Req() req) {
    //     const product = await this.productService.create(data);
    //     return {
    //         statusCode: HttpStatus.OK,
    //         message: 'Product found successfully',
    //         product
    //       };
    //   }



  // @Delete(':id')
  // @ApiOperation({
  //   summary: 'Delete event',
  // })
  // async delete(@Param('id') id: number) {
  //   await this.productService.delete(id);
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'Product deleted successfully',
  //   };
  // }


  @Post('all')
  async getAll() {
    const data = await this.productService.getAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Products found successfully',
      data,
    };
  }

  // @Patch(':update/id')
  // async update(@Param('id') id: number, data: Partial<ProductDto>) {
  //   await this.productService.update(id, data);
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'Product updated successfully',
  //   };
  // }

  @Get(':id')
  async getById(id: number) {
    const data = await this.productService.getById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Product found successfully',
      data,
    };
  }
}
  