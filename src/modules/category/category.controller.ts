import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ReadCategoryDto } from './dto/read-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly _categoryService: CategoryService) {}
  @Get()
  async getAll(): Promise<ReadCategoryDto[]> {
    const categories: ReadCategoryDto[] = await this._categoryService.getAll();
    return categories;
  }
}
