import {
  IsBoolean,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'La variable "Category" es requerida!' })
  @IsNumber()
  Category: number;

  @IsNotEmpty({ message: 'La variable "Codigo" es requerida!' })
  @IsString()
  Codigo: string;

  @IsNotEmpty({ message: 'La variable "Descripcion" es requerida!' })
  @IsString()
  Descripcion: string;

  @IsOptional()
  @IsString()
  Imagen: string;

  @IsNotEmpty({ message: 'La variable "PrecioCompra" es requerida!' })
  @IsNumber()
  PrecioCompra: number;

  @IsOptional()
  @IsNumber()
  PrecioSinIva: number;

  @IsNotEmpty({ message: 'La variable "PrecioVenta" es requerida!' })
  @IsNumber()
  PrecioVenta: number;

  //   Ventas: number;
  @IsNotEmpty({ message: 'La variable "IvaProducto" es requerida!' })
  @IsString()
  IvaProducto: string;
}
