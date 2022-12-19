import { Module } from '@nestjs/common';
import { CustomerAdressService } from './customer_adress.service';
import { CustomerAdressController } from './customer_adress.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer_Adress } from './customer_adress.model';
import { District } from 'src/distict/distickt.model';
import { Region } from 'src/region/region.model';
import { Country } from 'src/country/country.model';
import { Customer } from 'src/customer/customer.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Customer_Adress, District, Region, Country, Customer,]), JwtModule.register({})],
  controllers: [CustomerAdressController],
  providers: [CustomerAdressService]
})
export class CustomerAdressModule {}
