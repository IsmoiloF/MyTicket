import { Module } from '@nestjs/common';
import { DeliverMethodService } from './deliver_method.service';
import { DeliverMethodController } from './deliver_method.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deliver_Method } from './deliver.method.model';
import { Booking } from 'src/booking/booking.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Deliver_Method, Booking]), JwtModule.register({})],
  controllers: [DeliverMethodController],
  providers: [DeliverMethodService]
})
export class DeliverMethodModule {}
