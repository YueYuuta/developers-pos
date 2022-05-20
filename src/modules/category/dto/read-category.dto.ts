import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadCategoryDto {
  @Expose()
  readonly CategoryID: number;

  @Expose()
  readonly Categoria: string;

  @Expose()
  readonly Fecha: string;
}
