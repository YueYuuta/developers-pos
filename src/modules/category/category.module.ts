import { Module } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

@Module({ imports: [CategoryRepository] })
export class CategoryModule {}
