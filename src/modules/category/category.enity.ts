// import { EntityStatus } from '@utils/enums/entity-status.enum';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categorias')
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'idCategoria' })
  CategoryID: number;

  @Column({ type: 'text', nullable: false })
  categoria: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  fecha: string;
}
