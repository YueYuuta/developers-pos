import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Category } from './category .entity';
import { CategoryRepository } from './category.repository';
import { ReadCategoryDto } from './dto/read-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly _categoryRepository: CategoryRepository) {}

  async getByID(CategoryID: number): Promise<Category> {
    try {
      const category: Category = await this._categoryRepository.findOne(
        CategoryID,
      );
      return category;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async getAll(): Promise<ReadCategoryDto[]> {
    try {
      const categories: Category[] = await this._categoryRepository.find();

      return categories.map((category: Category) =>
        plainToClass(ReadCategoryDto, category),
      );
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
