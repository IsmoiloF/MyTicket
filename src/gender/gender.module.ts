import { Module } from '@nestjs/common';
import { GenderService } from './gender.service';
import { GenderController } from './gender.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gender } from './gender.model';
import { Human_Category } from 'src/human_category/human_category.model';
import { Customer } from 'src/customer/customer.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Gender, Human_Category, Customer]), JwtModule.register({})],
  controllers: [GenderController],
  providers: [GenderService]
})
export class GenderModule {}
