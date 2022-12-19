import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer_Cart } from './customer_cart.model';
import { CreateCustomerCartDto } from './dto/create-customer_cart.dto';
import { UpdateCustomerCartDto } from './dto/update-customer_cart.dto';

@Injectable()
export class CustomerCartService {
  constructor(@InjectModel(Customer_Cart) private customerCRepasitory: typeof Customer_Cart){}

  async create(createCustomerCDto: CreateCustomerCartDto) {
    const newCustomerC = await this.customerCRepasitory.create(createCustomerCDto)
    return newCustomerC;
  }

  async findAll() {
    const newCustomerC = await this.customerCRepasitory.findAll({ include: { all: true } })
    return newCustomerC;
  }

  async findOne(id: number) {
    const newCustomerC = await this.customerCRepasitory.findAll({ where:{id} ,include: { all: true } })
    return newCustomerC;
  }

  async update(id: number, updateCustomerCartDto: UpdateCustomerCartDto) {
    const customerC = await this.customerCRepasitory.findByPk(id)
    if(!customerC) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.customerCRepasitory.update(updateCustomerCartDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const customerC = await this.customerCRepasitory.findByPk(id);
    if (!customerC) {
      console.log(customerC);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.customerCRepasitory.destroy({ where: { id } });
    return customerC;
  }
}
