import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './customer.model';
import { JwtModule } from '@nestjs/jwt';
import { Customer_Adress } from 'src/customer_adress/customer_adress.model';
import { Customer_Cart } from 'src/customer_cart/customer_cart.model';
import { Cart } from 'src/cart/cart.model';

@Module({
  imports:[SequelizeModule.forFeature([Customer, Customer_Adress, Customer_Cart, Cart]),
  JwtModule.register({})],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports:[CustomerService]
})
export class CustomerModule {}
