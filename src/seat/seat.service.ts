import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './seat.model';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepasitory: typeof Seat){}

  async create(createSeatDto: CreateSeatDto) {
    console.log(1);
    const seat = await this.seatRepasitory.create(createSeatDto)
    return seat;
  }

  async findAll() {
    const seat = await this.seatRepasitory.findAll({include:{all:true}})
    return seat;
  }

  async findOne(id: number) {
    const seat = await this.seatRepasitory.findOne({where:{id}, include:{all:true}})
    return seat;
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.seatRepasitory.findByPk(id)
    if(!seat) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.seatRepasitory.update(updateSeatDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const seat = await this.seatRepasitory.findByPk(id);
    if (!seat) {
      console.log(seat);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.seatRepasitory.destroy({ where: { id } });
    return seat;
  }
}
