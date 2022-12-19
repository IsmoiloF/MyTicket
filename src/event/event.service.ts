import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './event.model';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private customerEventRepasitory: typeof Event){}

  async create(createEventDto: CreateEventDto) {
    const newEvent = await this.customerEventRepasitory.create(createEventDto)
    return newEvent;
  }

  async findAll() {
    const newEvent = await this.customerEventRepasitory.findAll({include:{all:true}})
    return newEvent;
  }

  async findOne(id: number) {
    const newEvent = await this.customerEventRepasitory.findOne({where:{id} ,include:{all:true}})
    return newEvent;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const newEvent = await this.customerEventRepasitory.findByPk(id)
    if(!newEvent) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.customerEventRepasitory.update(updateEventDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const event = await this.customerEventRepasitory.findByPk(id);
    if (!event) {
      console.log(event);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.customerEventRepasitory.destroy({ where: { id } });
    return event;
  }
}
