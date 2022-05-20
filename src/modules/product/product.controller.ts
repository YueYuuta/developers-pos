import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ReadProductDto } from './dto/read-product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly _productService: ProductService) {}

  @Get(':id')
  async getByID(
    @Param('id', ParseIntPipe) ProductID: number,
  ): Promise<ReadProductDto> {
    console.log('este es el id', ProductID);
    const product: ReadProductDto = await this._productService.getById(
      ProductID,
    );
    return product;
  }

  @Get()
  async getAll(): Promise<ReadProductDto[]> {
    const products: ReadProductDto[] = await this._productService.getAll();
    return products;
  }
}
