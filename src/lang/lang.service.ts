import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { Lang } from './lang.model';

@Injectable()
export class LangService {
  constructor(@InjectModel(Lang) private langRepository: typeof Lang){}
  async create(createLangDto: CreateLangDto) {
    const lang = await this.langRepository.create(createLangDto)
    return lang;
  }

  async findAll() {
    const lang = await this.langRepository.findAll({include:{all:true}})
    return lang;
  }

  async findOne(id: number) {
    const lang = await this.langRepository.findOne({where:{id},include:{all:true}})
    return lang;
  }

  async update(id: number, updateLangDto: UpdateLangDto) {
    const l = await this.langRepository.findByPk(id)
    if(!l) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.langRepository.update(updateLangDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const l = await this.langRepository.findByPk(id);
    if (!l) {
      console.log(l);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.langRepository.destroy({ where: { id } });
    return l;
  }
}
