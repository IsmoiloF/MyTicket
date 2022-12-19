import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './status.model';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepository: typeof Status){}
  async create(createStatusDto: CreateStatusDto) {
    const status = await this.statusRepository.create(createStatusDto)
    return status;
  }

  async findAll() {
    const status = await this.statusRepository.findAll({include:{all:true}})
    return status;
  }

  async findOne(id: number) {
    const status = await this.statusRepository.findOne({where:{id},include:{all:true
    }})
    return status;
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const l = await this.statusRepository.findByPk(id)
    if(!l) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.statusRepository.update(updateStatusDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const l = await this.statusRepository.findByPk(id);
    if (!l) {
      console.log(l);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.statusRepository.destroy({ where: { id } });
    return l;
  }
}
