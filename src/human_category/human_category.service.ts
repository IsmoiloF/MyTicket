import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { Human_Category } from './human_category.model';

@Injectable()
export class HumanCategoryService {
  constructor(@InjectModel(Human_Category) private customerHCRepasitory: typeof Human_Category){}

  async create(createHumanCategoryDto: CreateHumanCategoryDto) {
    const humanC = await this.customerHCRepasitory.create(createHumanCategoryDto)
    return humanC;
  }

  async findAll() {
    const humanC = await this.customerHCRepasitory.findAll({include:{all:true}})
    return humanC;
  }

  async findOne(id: number) {
    const humanC = await this.customerHCRepasitory.findOne({where:{id},include:{all:true}})
    return humanC;
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    const humanC = await this.customerHCRepasitory.findByPk(id)
    if(!humanC) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.customerHCRepasitory.update(updateHumanCategoryDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const humanC = await this.customerHCRepasitory.findByPk(id);
    if (!humanC) {
      console.log(humanC);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.customerHCRepasitory.destroy({ where: { id } });
    return humanC;
  }
}
