import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ReadProductDto } from './dto/read-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly _productRepository: ProductRepository) {}

  async getById(ProductID: number): Promise<ReadProductDto> {
    try {
      const product: Product = await this._productRepository.findOne(ProductID);
      return plainToClass(ReadProductDto, product);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async getAll(): Promise<ReadProductDto[]> {
    try {
      const products: Product[] = await this._productRepository.find();
      return products.map((product: Product) =>
        plainToClass(ReadProductDto, product),
      );
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
