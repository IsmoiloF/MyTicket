import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ticket } from './ticket.model';
import { Event } from 'src/event/event.model';
import { Ticket_Type } from 'src/ticket_type/ticket_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Ticket, Event, Ticket_Type]), JwtModule.register({})],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
