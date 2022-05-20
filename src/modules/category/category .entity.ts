import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categorias')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'idCategoria' })
  CategoryID: number;

  @Column({ type: 'text', nullable: false, name: 'categoria' })
  Categoria: string;

  @Column({
    type: 'timestamp',
    nullable: false,
    name: 'fecha',
  })
  Fecha: Date;
}
