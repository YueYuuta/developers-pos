import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from '../category/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
})
export class ProductModule {}
