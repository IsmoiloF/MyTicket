import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
// import { Booking } from 'src/booking/booking.model';
import { Cart } from './cart.model';
import { Deliver_Method } from 'src/deliver_method/deliver.method.model';
import { Discoun_Coupoc } from 'src/discoun_coupoc/discoun_coupon.model';
import { Customer } from 'src/customer/customer.model';
import { Ticket } from 'src/ticket/ticket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Cart, Customer, Ticket]), JwtModule.register({})],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
