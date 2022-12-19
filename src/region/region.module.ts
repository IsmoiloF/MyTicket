import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from './region.model';
import { Ticket } from 'src/ticket/ticket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[(SequelizeModule.forFeature([Region, Ticket])), JwtModule.register({})],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}
