import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat } from './seat.model';
import { Ticket } from 'src/ticket/ticket.model';
import { Seat_Type } from 'src/seat_type/seat_type.model';
import { Venue } from 'src/venue/venue.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Seat, Ticket, Seat_Type, Venue]),  JwtModule.register({})],
  controllers: [SeatController],
  providers: [SeatService]
})
export class SeatModule {}
