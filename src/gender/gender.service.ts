import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './gender.model';

@Injectable()
export class GenderService {
  constructor(@InjectModel(Gender) private genderRepository: typeof Gender){}
  async create(createGenderDto: CreateGenderDto) {
    const gender = await this.genderRepository.create(createGenderDto)
    return gender;
  }

  async findAll() {
    const gender = await this.genderRepository.findAll({include:{all:true}})
    return gender;
  }

  async findOne(id: number) {
    const gender = await this.genderRepository.findOne({where:{id},include:{all:true}})
    return gender;
  }

  async update(id: number, updateGenderDto: UpdateGenderDto) {
    const g = await this.genderRepository.findByPk(id)
    if(!g) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.genderRepository.update(updateGenderDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const g = await this.genderRepository.findByPk(id);
    if (!g) {
      console.log(g);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.genderRepository.destroy({ where: { id } });
    return g;
  }
}
