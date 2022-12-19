import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './venue.model';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepasitory: typeof Venue){}

  async create(createVenueDto: CreateVenueDto) {
    const venue = await this.venueRepasitory.create(createVenueDto)
    return venue;
  }

  async findAll() {
    const venue = await this.venueRepasitory.findAll({include:{all:true}})
    return venue;
  }

  async findOne(id: number) {
    const venue = await this.venueRepasitory.findOne({where:{id}, include:{all:true}})
    return venue;
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const venue = await this.venueRepasitory.findByPk(id)
    if(!venue) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.venueRepasitory.update(updateVenueDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const venue = await this.venueRepasitory.findByPk(id);
    if (!venue) {
      console.log(venue);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.venueRepasitory.destroy({ where: { id } });
    return venue;
  }
}
