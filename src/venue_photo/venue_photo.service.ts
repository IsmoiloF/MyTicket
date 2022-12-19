import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Venue_Type } from 'src/venue_type/venue_type.model';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { Venue_Photo } from './venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(Venue_Photo) private venuePRepository: typeof Venue_Photo){}
  async create(createVenuePhotoDto: CreateVenuePhotoDto) {
    const venueP = await this.venuePRepository.create(createVenuePhotoDto)
    return venueP;
  }

  async findAll() {
    const venueP = await this.venuePRepository.findAll({include:{all:true}})
    return venueP;
  }

  async findOne(id: number) {
    const venueP = await this.venuePRepository.findOne({where:{id}, include:{all:true}})
    return venueP;
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const venueP = await this.venuePRepository.findByPk(id)
    if(!venueP) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.venuePRepository.update(updateVenuePhotoDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const venueP = await this.venuePRepository.findByPk(id);
    if (!venueP) {
      console.log(venueP);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.venuePRepository.destroy({ where: { id } });
    return venueP;
  }
}
