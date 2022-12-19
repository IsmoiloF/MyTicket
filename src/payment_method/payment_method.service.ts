import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { Payment_Method } from './payment_method.model';

@Injectable()
export class PaymentMethodService {
  constructor(@InjectModel(Payment_Method) private paymentMRepository: typeof Payment_Method){}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    const payment = await this.paymentMRepository.create(createPaymentMethodDto)
    return payment;
  }

  async findAll() {
    const payment = await this.paymentMRepository.findAll({include:{all:true}})
    return payment;
  }

  async findOne(id: number) {
    const payment = await this.paymentMRepository.findOne({where:{id},include:{all:true}})
    return payment;
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const l = await this.paymentMRepository.findByPk(id)
    if(!l) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.paymentMRepository.update(updatePaymentMethodDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const l = await this.paymentMRepository.findByPk(id);
    if (!l) {
      console.log(l);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.paymentMRepository.destroy({ where: { id } });
    return l;
  }
}
