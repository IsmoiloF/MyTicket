import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { Event_Type } from './event_type.model';

@Injectable()
export class EventTypeService {
  constructor(@InjectModel(Event_Type) private customerEventTRepasitory: typeof Event_Type){}

  async create(createEventTypeDto: CreateEventTypeDto) {
    const event_t = await this.customerEventTRepasitory.create(createEventTypeDto)
    return event_t;
  }

  async findAll() {
    const event_t = await this.customerEventTRepasitory.findAll({include:{all:true}})
    return event_t;
  }

  async findOne(id: number) {
    const event_t = await this.customerEventTRepasitory.findAll({where:{id} ,include:{all:true}})
    return event_t;
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const newEvent = await this.customerEventTRepasitory.findByPk(id)
    if(!newEvent) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.customerEventTRepasitory.update(UpdateEventTypeDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const event = await this.customerEventTRepasitory.findByPk(id);
    if (!event) {
      console.log(event);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.customerEventTRepasitory.destroy({ where: { id } });
    return event;
  }
}
