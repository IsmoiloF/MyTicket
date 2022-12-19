import { Module } from '@nestjs/common';
import { SeatTypeService } from './seat_type.service';
import { SeatTypeController } from './seat_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Seat_Type } from './seat_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Seat_Type]), JwtModule.register({})],
  controllers: [SeatTypeController],
  providers: [SeatTypeService]
})
export class SeatTypeModule {}
