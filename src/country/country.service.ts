import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './country.model';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryRepository: typeof Country){}
  async create(createCountryDto: CreateCountryDto) {
    const country = await this.countryRepository.create(createCountryDto)
    return country;
  }

  async findAll() {
    const country = await this.countryRepository.findAll({include:{all:true}})
    return country;
  }

  async findOne(id: number) {
    const country = await this.countryRepository.findOne({where:{id}, include:{all:true}})
    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    const c = await this.countryRepository.findByPk(id)
    if(!c) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.countryRepository.update(updateCountryDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const c = await this.countryRepository.findByPk(id);
    if (!c) {
      console.log(c);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.countryRepository.destroy({ where: { id } });
    return c;
  }
}
