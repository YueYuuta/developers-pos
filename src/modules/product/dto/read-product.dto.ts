import { ReadCategoryDto } from '@src/modules/category/dto/read-category.dto';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class ReadProductDto {
  @Expose()
  readonly ProductID: number;
  @Expose()
  @Type(type => ReadCategoryDto)
  readonly Category: ReadCategoryDto;
  @Expose()
  readonly Codigo: string;
  @Expose()
  readonly Descripcion: string;
  @Expose()
  readonly Imagen: string;
  @Expose()
  readonly PrecioCompra: number;
  @Expose()
  readonly PrecioSinIva: number;
  @Expose()
  readonly PrecioVenta: number;
  @Expose()
  readonly Ventas: number;
  @Expose()
  readonly IvaProducto: string;
  @Expose()
  readonly Fecha: Date;
}
