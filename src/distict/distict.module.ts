import { Module } from '@nestjs/common';
import { DistictService } from './distict.service';
import { DistictController } from './distict.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from './distickt.model';
import { Booking } from 'src/booking/booking.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([District, Booking]), JwtModule.register({})],
  controllers: [DistictController],
  providers: [DistictService]
})
export class DistictModule {}
