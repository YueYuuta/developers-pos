import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ReadProductDto } from './dto/read-product.dto';
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

  @Get(':desde/:hasta')
  async getAll(
    @Param('desde', ParseIntPipe) desde: number,
    @Param('hasta', ParseIntPipe) hasta: number,
  ): Promise<ReadProductDto[]> {
    const products: ReadProductDto[] = await this._productService.getAll(
      desde,
      hasta,
    );
    return products;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() product: CreateProductDto) {
    const data = await this._productService.create(product);

    return {
      status: HttpStatus.CREATED,
      data,
      message: `Producto creado correctamente`,
    };
  }
}
