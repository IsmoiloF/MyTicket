import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue } from './venue.model';
import { Venue_Type } from 'src/venue_type/venue_type.model';
import { Region } from 'src/region/region.model';
import { District } from 'src/distict/distickt.model';
import { Seat } from 'src/seat/seat.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Venue, Venue_Type, Region, District, Seat]), JwtModule.register({}),
  ],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
