import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../category/category .entity';

@Entity('productos')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  ProductID: number;

  @ManyToOne(type => Category, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'id_categoria' })
  category: number;

  @Column({ type: 'text', nullable: false, name: 'codigo' })
  Codigo: string;

  @Column({ type: 'text', nullable: false, name: 'descripcion' })
  Descripcion: string;

  @Column({ type: 'text', nullable: true, name: 'imagen' })
  Imagen: string;

  @Column({ type: 'float', nullable: true, name: 'precio_compra' })
  PrecioCompra: number;

  @Column({ type: 'float', nullable: true, name: 'precio_siniva' })
  PrecioSinIva: number;

  @Column({ type: 'float', nullable: true, name: 'precio_venta' })
  PrecioVenta: number;

  @Column({ type: 'int', nullable: true, name: 'ventas' })
  Ventas: number;

  @Column({ type: 'varchar', length: 1, nullable: true, name: 'iva_producto' })
  IvaProducto: string;

  @Column({
    type: 'timestamp',
    nullable: false,
    name: 'fecha',
  })
  Fecha: Date;
}
