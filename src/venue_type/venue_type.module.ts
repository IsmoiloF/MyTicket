import { Module } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { VenueTypeController } from './venue_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue_Type } from './venue_type.model';
import { Venue } from 'src/venue/venue.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Venue_Type, Venue]), JwtModule.register({})],
  controllers: [VenueTypeController],
  providers: [VenueTypeService]
})
export class VenueTypeModule {}
