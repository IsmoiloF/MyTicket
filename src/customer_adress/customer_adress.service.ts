import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer_Adress } from './customer_adress.model';
import { CreateCustomerAdressDto } from './dto/create-customer_adress.dto';
import { UpdateCustomerAdressDto } from './dto/update-customer_adress.dto';

@Injectable()
export class CustomerAdressService {
  constructor(@InjectModel(Customer_Adress) private customerARepasitory: typeof Customer_Adress){}

  async create(createCustomerADto: CreateCustomerAdressDto) {
    const newCustomerA = await this.customerARepasitory.create(createCustomerADto)
    return newCustomerA;
  }

  async findAll() {
    const newCustomerA = await this.customerARepasitory.findAll({ include: { all: true } })
    return newCustomerA;
  }

  async findOne(id: number) {
    const newCustomerA = await this.customerARepasitory.findOne({ where:{id},include: { all: true } })
    return newCustomerA;
  }

  async update(id: number, updateCustomerAdressDto: UpdateCustomerAdressDto) {
    const customerA = await this.customerARepasitory.findByPk(id)
    if(!customerA) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.customerARepasitory.update(updateCustomerAdressDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const customerA = await this.customerARepasitory.findByPk(id);
    if (!customerA) {
      console.log(customerA);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.customerARepasitory.destroy({ where: { id } });
    return customerA;
  }
}
