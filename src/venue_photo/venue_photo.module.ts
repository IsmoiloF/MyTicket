import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Venue_Photo } from './venue_photo.model';
import { Venue } from 'src/venue/venue.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Venue_Photo, Venue]), JwtModule.register({})],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService]
})
export class VenuePhotoModule {}
