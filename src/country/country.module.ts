import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Country } from './country.model';
import { Customer_Adress } from 'src/customer_adress/customer_adress.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Country, Customer_Adress]), JwtModule  ],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}
