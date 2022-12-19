import { Module } from '@nestjs/common';
import { CustomerCartService } from './customer_cart.service';
import { CustomerCartController } from './customer_cart.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer_Cart } from './customer_cart.model';
import { Customer } from 'src/customer/customer.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Customer_Cart, Customer]), JwtModule.register({})],
  controllers: [CustomerCartController],
  providers: [CustomerCartService]
})
export class CustomerCartModule {}
