import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './distickt.model';
import { CreateDistictDto } from './dto/create-distict.dto';
import { UpdateDistictDto } from './dto/update-distict.dto';

@Injectable()
export class DistictService {
  constructor(@InjectModel(District) private districtRepository: typeof District){}

  async create(createDistictDto: CreateDistictDto) {
    const district = await this.districtRepository.create(createDistictDto)
    return district;
  }

  async findAll() {
    const district = await this.districtRepository.findAll({include:{all:true}})
    return district;
  }

  async findOne(id: number) {
    const district = await this.districtRepository.findOne({include:{all:true}})
    return district;
  }

  async update(id: number, updateDistictDto: UpdateDistictDto) {
    const d = await this.districtRepository.findByPk(id)
    if(!d) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.districtRepository.update(updateDistictDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const d = await this.districtRepository.findByPk(id);
    if (!d) {
      console.log(d);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.districtRepository.destroy({ where: { id } });
    return d;
  }
}
