import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from 'src/event/event.model';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { Seat_Type } from './seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(Seat_Type) private seatRRepository: typeof Seat_Type){}
  async create(createSeatTypeDto: CreateSeatTypeDto) {
    const seatT = await this.seatRRepository.create(createSeatTypeDto)
    return seatT;
  }

  async findAll() {
    const seatT = await this.seatRRepository.findAll({include:{all:true}})
    return seatT;
  }

  async findOne(id: number) {
    const seatT = await this.seatRRepository.findOne({where:{id}, include:{all:true}})
    return seatT;
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const seatT = await this.seatRRepository.findByPk(id)
    if(!seatT) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.seatRRepository.update(updateSeatTypeDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const seatT = await this.seatRRepository.findByPk(id);
    if (!seatT) {
      console.log(seatT);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.seatRRepository.destroy({ where: { id } });
    return seatT;
  }
}

