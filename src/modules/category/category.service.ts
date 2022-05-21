import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Category } from './category .entity';
import { CategoryRepository } from './category.repository';

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
}
