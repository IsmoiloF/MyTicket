import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { Venue_Type } from './venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(Venue_Type) private venueTRepository: typeof Venue_Type){}

  async create(createVenueTypeDto: CreateVenueTypeDto) {
    const venueT = await this.venueTRepository.create(createVenueTypeDto)
    return venueT;
  }

  async findAll() {
    const venueT = await this.venueTRepository.findAll({include:{all:true}})
    return venueT;
  }

  async findOne(id: number) {
    const venueT = await this.venueTRepository.findOne({where:{id},include:{all:true}})
    return venueT;
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const venueT = await this.venueTRepository.findByPk(id)
    if(!venueT) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.venueTRepository.update(updateVenueTypeDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const venueT = await this.venueTRepository.findByPk(id);
    if (!venueT) {
      console.log(venueT);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.venueTRepository.destroy({ where: { id } });
    return venueT;
  }
}
