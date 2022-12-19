import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Status } from './status.model';
import { Cart } from 'src/cart/cart.model';
import { Booking } from 'src/booking/booking.model';
import { Ticket } from 'src/ticket/ticket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Status, Cart, Booking, Ticket]), JwtModule.register({})],
  controllers: [StatusController],
  providers: [StatusService]
})
export class StatusModule {}
