import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Discoun_Coupoc } from './discoun_coupon.model';
import { CreateDiscounCoupocDto } from './dto/create-discoun_coupoc.dto';
import { UpdateDiscounCoupocDto } from './dto/update-discoun_coupoc.dto';

@Injectable()
export class DiscounCoupocService {
  constructor(@InjectModel(Discoun_Coupoc) private discounCRepository: typeof Discoun_Coupoc){}
  async create(createDiscounCoupocDto: CreateDiscounCoupocDto) {
    const discoun = await this.discounCRepository.create(createDiscounCoupocDto)
    return discoun;
  }

  async findAll() {
    const discoun = await this.discounCRepository.findAll({include:{all:true}})
    return discoun;
  }

  async findOne(id: number) {
    const discoun = await this.discounCRepository.findOne({where:{id}, include:{all:true}})
    return discoun;
  }

  async update(id: number, updateDiscounCoupocDto: UpdateDiscounCoupocDto) {
    const d = await this.discounCRepository.findByPk(id)
    if(!d) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.discounCRepository.update(updateDiscounCoupocDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const d = await this.discounCRepository.findByPk(id);
    if (!d) {
      console.log(d);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.discounCRepository.destroy({ where: { id } });
    return d;
  }
}
