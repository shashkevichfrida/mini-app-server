import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductDto } from './product.dto';


@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
      ) {}

      async create(data: ProductDto) {
        const product = this.productRepository.create(data);
        await this.productRepository.save(product);
        return product;
    }

    async delete(id: number) {
        await this.productRepository.delete({ id });
        return { deleted: true };
    }


    async getAll() {
        return await this.productRepository.find();
    }

    async update(id: number, data: Partial<ProductDto>) {
        await this.productRepository.update({ id }, data);
    }

    async getById(id: number) {
        return await this.productRepository.findOne({ where: { id: id } });
    }
}