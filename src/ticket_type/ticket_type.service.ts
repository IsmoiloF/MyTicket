import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { Ticket_Type } from './ticket_type.model';

@Injectable()
export class TicketTypeService {
  constructor(@InjectModel(Ticket_Type) private ticketTRepository: typeof Ticket_Type){}
  async create(createTicketTypeDto: CreateTicketTypeDto) {
    const ticketT = await this.ticketTRepository.create(createTicketTypeDto)
    return ticketT;
  }

  async findAll() {
    const ticketT = await this.ticketTRepository.findAll({include:{all:true}})
    return ticketT;
  }

  async findOne(id: number) {
    const ticketT = await this.ticketTRepository.findOne({where:{id},include:{all:true}})
    return ticketT;
  }

  async update(id: number, updateTicketTypeDto: UpdateTicketTypeDto) {
    const l = await this.ticketTRepository.findByPk(id)
    if(!l) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.ticketTRepository.update(updateTicketTypeDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const l = await this.ticketTRepository.findByPk(id);
    if (!l) {
      console.log(l);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.ticketTRepository.destroy({ where: { id } });
    return l;
  }
}
