import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './booking.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepasitory: typeof Booking){}
  async create(createBookingDto: CreateBookingDto) {
    const newBook = await this.bookingRepasitory.create(createBookingDto)
    return newBook;
  }

  async findAll() {
    const book = await this.bookingRepasitory.findAll({ include: { all: true } });
    return book;
  }

  async findOne(id: number) {
    const book = await this.bookingRepasitory.findOne({
      where: { id },
      include: { all: true },
    });
    return book;
  }

  async update(id:number,updateBookingDto: UpdateBookingDto) {
    const book = await this.bookingRepasitory.findByPk(id)
    if(!book) {
      throw new HttpException('Id notogri',HttpStatus.NOT_FOUND)
    }
    return this.bookingRepasitory.update(updateBookingDto,{where:{id},returning:true})
  }

  async remove(id: number) {
    const book = await this.bookingRepasitory.findByPk(id);
    if (!book) {
      console.log(book);
      throw new HttpException('Foydalunvchi topilmadi', HttpStatus.NOT_FOUND);
    }
    await this.bookingRepasitory.destroy({ where: { id } });
    return book;
  }
}
