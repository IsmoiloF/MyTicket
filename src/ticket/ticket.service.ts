import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepasitory: typeof Ticket){}

  async create(createTicketDto: CreateTicketDto) {
    const ticket = await this.ticketRepasitory.create(createTicketDto)
    return ticket;  
  }
  async findAll() {
    const ticket = await this.ticketRepasitory.findAll({include:{all:true}})
    return ticket; 
  }

  async findOne(id: number) {
    const ticket = await this.ticketRepasitory.findOne({where:{id}, include:{all:true}})
    return ticket; 
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const seatT = await this.ticketRepasitory.findByPk(id)
    if(!seatT) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.ticketRepasitory.update(updateTicketDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const ticket = await this.ticketRepasitory.findByPk(id);
    if (!ticket) {
      console.log(ticket);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.ticketRepasitory.destroy({ where: { id } });
    return ticket;
  }
}
