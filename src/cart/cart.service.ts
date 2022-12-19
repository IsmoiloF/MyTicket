import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';
// import { Booking } from 'src/booking/booking.model';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepasitory: typeof Cart){}
  
  async create(createCartDto: CreateCartDto) {
    const newCart = await this.cartRepasitory.create(createCartDto)
    return newCart;
  }

  async findAll() {
    const cart = await this.cartRepasitory.findAll({ include: { all: true } });
    return cart;
  }

  async findOne(id: number) {
    const book = await this.cartRepasitory.findOne({ where:{id}, include: { all: true } });
    return book;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const book = await this.cartRepasitory.findByPk(id)
    if(!book) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.cartRepasitory.update(updateCartDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const cart = await this.cartRepasitory.findByPk(id);
    if (!cart) {
      console.log(cart);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.cartRepasitory.destroy({ where: { id } });
    return cart;
  }
}
