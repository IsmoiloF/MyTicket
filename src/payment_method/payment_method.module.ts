import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { PaymentMethodController } from './payment_method.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment_Method } from './payment_method.model';
import { Booking } from 'src/booking/booking.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Payment_Method, Booking]), JwtModule.register({})],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService]
})
export class PaymentMethodModule {}
