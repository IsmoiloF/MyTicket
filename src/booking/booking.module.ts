import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './booking.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment_Method } from 'src/payment_method/payment_method.model';
import { Deliver_Method } from 'src/deliver_method/deliver.method.model';
import { Discoun_Coupoc } from 'src/discoun_coupoc/discoun_coupon.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Booking, Payment_Method, Deliver_Method, Discoun_Coupoc]), JwtModule],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
