// import { EntityStatus } from '@utils/enums/entity-status.enum';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../category/category.enity';

@Entity('productos')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  ProductID: number;

  @ManyToOne((type) => Category, {
    cascade: true,
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'id_categoria' })
  Categoria: number;

  @Column({ type: 'text', nullable: false })
  codigo: string;

  //   @Column({ type: 'varchar', length: 150, nullable: false })
  //   NombreComercial: string;

  //   @Column({ type: 'varchar', length: 150, nullable: true })
  //   Sucuarsal: string;

  //   @Column({ type: 'text', nullable: false })
  //   Direccion: string;

  //   @Column({ type: 'varchar', length: 10, nullable: false })
  //   Telefono: string;

  //   @Column({ type: 'varchar', length: 150, nullable: false })
  //   Correo: string;

  //   @Column({ type: 'varchar', length: 13, nullable: false })
  //   Ruc: string;

  //   @Column({ type: 'boolean', default: EntityStatus.ACTIVE })
  //   Estado: boolean;

  //   @Column({
  //     type: 'timestamp',
  //     nullable: true,
  //   })
  //   Fecha: string;
}
