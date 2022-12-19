import { Module } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { HumanCategoryController } from './human_category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Human_Category } from './human_category.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Human_Category]), JwtModule.register({})],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService]
})
export class HumanCategoryModule {}
