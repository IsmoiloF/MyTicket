import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Deliver_Method } from './deliver.method.model';
import { CreateDeliverMethodDto } from './dto/create-deliver_method.dto';
import { UpdateDeliverMethodDto } from './dto/update-deliver_method.dto';

@Injectable()
export class DeliverMethodService {
  constructor(@InjectModel(Deliver_Method) private deliverMRepository: typeof Deliver_Method){}
  async create(createDeliverMethodDto: CreateDeliverMethodDto) {
    const deliver = await this.deliverMRepository.create(createDeliverMethodDto)
    return deliver;
  }

  async findAll() {
    const deliver = await this.deliverMRepository.findAll({include:{all:true}})
    return deliver;
  }

  async findOne(id: number) {
    const deliver = await this.deliverMRepository.findOne({where:{id}, include:{all:true}})
    return deliver;
  }

  async update(id: number, updateDeliverMethodDto: UpdateDeliverMethodDto) {
    const d = await this.deliverMRepository.findByPk(id)
    if(!d) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.deliverMRepository.update(updateDeliverMethodDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const d = await this.deliverMRepository.findByPk(id);
    if (!d) {
      console.log(d);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.deliverMRepository.destroy({ where: { id } });
    return d;
  }
}
