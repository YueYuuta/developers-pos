import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CategoryService } from '../category/category.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ReadProductDto } from './dto/read-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    private readonly _productRepository: ProductRepository,
    private readonly _categoryService: CategoryService,
  ) {}

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

  async create(productoCreate: CreateProductDto): Promise<Product> {
    //:Todo
    //validar que exista la categoria
    const category = await this._categoryService.getByID(
      productoCreate.Category,
    );
    if (!category) {
      throw new NotFoundException(
        `La categoria con el id: ${productoCreate.Category} no existe!`,
      );
    }
    //validar que el nombre/descripcion del producto no este repetido
    const product = await this.ValidateDescription(productoCreate.Descripcion);
    if (product) {
      throw new ConflictException(
        `La descripcion ${productoCreate.Descripcion} ya existe!`,
      );
    }

    //calcular los valores (precio sin iva, porcentaje de ganancia,el valor de ganancia)
    if (productoCreate.IvaProducto === 'S') {
      const precioSinIva = productoCreate.PrecioVenta / 1.12; //pv 60
      productoCreate.PrecioSinIva = precioSinIva;
    } else {
      productoCreate.PrecioSinIva = productoCreate.PrecioVenta;
    }

    const ganancia = productoCreate.PrecioVenta - productoCreate.PrecioCompra;
    const porcentajeGanancia = (ganancia / productoCreate.PrecioCompra) * 100;
    console.log(productoCreate, 'body procesado para la base ');
    console.log(ganancia, 'esta es la ganancia ');
    console.log(porcentajeGanancia, 'esta es el porcentajeGanancia ');
    const productoIntance = new Product();
    Object.assign(productoIntance, productoCreate);
    return await productoIntance.save();
  }

  async ValidateDescription(Description: string): Promise<ReadProductDto> {
    try {
      const product: Product = await this._productRepository.findOne({
        where: { Descripcion: Description },
      });
      return plainToClass(ReadProductDto, product);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
