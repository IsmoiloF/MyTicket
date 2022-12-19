import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepository: typeof Region){}
  async create(createRegionDto: CreateRegionDto) {
    const region = await this.regionRepository.create(createRegionDto)
    return region;
  }

  async findAll() {
    const region = await this.regionRepository.findAll({include:{all:true}})
    return region;
  }

  async findOne(id: number) {
    const region = await this.regionRepository.findOne({where:{id}, include:{all:true}})
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const l = await this.regionRepository.findByPk(id)
    if(!l) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.regionRepository.update(updateRegionDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const l = await this.regionRepository.findByPk(id);
    if (!l) {
      console.log(l);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.regionRepository.destroy({ where: { id } });
    return l;
  }
}
